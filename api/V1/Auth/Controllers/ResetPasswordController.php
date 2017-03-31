<?php

namespace Api\V1\Auth\Controllers;

use App\Models\Auth\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Password;
use Api\V1\Auth\Requests\ResetPasswordRequest;
use Symfony\Component\HttpKernel\Exception\HttpException;

class ResetPasswordController extends Controller
{
    // Redirect to Dashboard if Authenticated
    protected $redirectTo = '/dashboard';

    public function __construct()
    {
        $this->middleware('guest');
    }
    public function resetPassword(ResetPasswordRequest $request)
    {
        // Reset Password
        $response = $this->broker()->reset(
            $this->credentials($request), function ($user, $password) {
                $this->reset($user, $password);
            }
        );
        // Check if We Have Reset Password
        if($response !== Password::PASSWORD_RESET) {
            throw new HttpException(500);
        }
        // If We Set Not to Release Token After Reset
        // We Just Sent a Message That Password is Changed
        if(!config('auth_scaffold.reset_password.release_token')) {
            return response()->json([
                'message' => 'Password Has Been Changed!',
            ]);
        }
        // Get User By Email
        $user = User::findByEmail($request->get('email'));

        // We Released A New Token After Password Reset
        return response()->json([
            'message' => 'Password Has Been Changed!',
            'token' => \Auth::login($user)
        ]);
    }

    /**
     * Get the broker to be used during password reset.
     *
     * @return \Illuminate\Contracts\Auth\PasswordBroker
     */
    public function broker()
    {
        return Password::broker();
    }

    /**
     * Get the password reset credentials from the request.
     *
     * @param  ResetPasswordRequest  $request
     * @return array
     */
    protected function credentials(ResetPasswordRequest $request)
    {
        return $request->only(
            'email', 'password', 'password_confirmation', 'token'
        );
    }

    /**
     * Reset the given user's password.
     *
     * @param  \Illuminate\Contracts\Auth\CanResetPassword  $user
     * @param  string  $password
     * @return void
     */
    protected function reset($user, $password)
    {
        // Change New Pass
        $user->password = $password;
        //  We Reset Resent Count back to Zero
        $user->resent = 0;
        $user->save();
    }
}