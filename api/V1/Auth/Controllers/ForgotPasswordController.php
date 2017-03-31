<?php

namespace Api\V1\Auth\Controllers;

use App\Models\Auth\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Password;
use Api\V1\Auth\Requests\ForgotPasswordRequest;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ForgotPasswordController extends Controller
{

    public function __construct()
    {
        $this->middleware('guest');
    }
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function sendResetEmail(ForgotPasswordRequest $request)
    {
        // Check if the Email is Registered
        $user = User::where('email', '=', $request->get('email'))->first();
        // Throw Exception Model Not found
        if(!$user) {
            throw new ModelNotFoundException('User Not Found');
        }
        // Check if We Exceeded Password Reset!
        // If Yes then We Show a Message We Reached the Limit and Avoid Sending More Email
        if($user->resent >= (int)config('auth_scaffold.resent')){
            return response()->json(['message' => 'You Have Exceeded Password Reset Request Count of ('.$user->resent.') Request.'], 429);
        }
        
        // If We Havent Exceeded The Number of Resent Then We Send a New Mail
        $broker = $this->getPasswordBroker();
        $sendingResponse = $broker->sendResetLink($request->only('email'));

        // Check if We Sent The Email
        if($sendingResponse !== Password::RESET_LINK_SENT) {
            throw new HttpException(500);
        }
        // Increase the Resent Number by 1 Each time We Sent An Email
        $user->resent++;
        $user->save();
        // Show Message We Have Successfully Email them the Reset Link
        return response()->json([
            'message' => 'We have Sent You an Email with a Link To Reset Your Password.'
        ], 200);
    }

    /**
     * Get the broker to be used during password reset.
     *
     * @return \Illuminate\Contracts\Auth\PasswordBroker
     */
    private function getPasswordBroker()
    {
        return Password::broker();
    }
}