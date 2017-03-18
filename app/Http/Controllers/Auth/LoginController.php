<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }
    
    public function username()
    {
        return 'email';
    }

    public function login(Request $request)
    {
     $this->validateLogin($request);

    if ($this->hasTooManyLoginAttempts($request)) {
        $this->fireLockoutEvent($request);
        return response()->json([
        'message' => 'Too Many Failed Login Attempts!',
        ], 429);

    }
    $credentials = $this->credentials($request);

    if ($token = $this->guard()->attempt($credentials)) {

        return $this->sendLoginResponse($request, $token);
    }
    $this->incrementLoginAttempts($request);
    return $this->sendFailedLoginResponse($request);
    
    }

    protected function sendLoginResponse(Request $request, $token)
    {
    $this->clearLoginAttempts($request);

    return $this->authenticated($request, $this->guard()->user(), $token);
    }
    protected function authenticated(Request $request, $user, $token)
    {
    return response()->json([
        'message' => 'Successfully Login!',
        'access_token' => $token,
        'token_type' => 'bearer',
        'expires_in' => (\Config::get('jwt.ttl') * 60) - 120,
        'refresh_token' => $token,
        'refresh_token_expires_in' => (\Config::get('jwt.ttl') * 60)
    ]);
    }

    protected function sendFailedLoginResponse(Request $request)
    {
    return response()->json([
        'message' => \Lang::get('auth.failed'),
    ], 401);
    }

    public function logout()
    {
    $this->guard()->logout(); // pass true to blacklist forever
    return response()->json([
        'message' => 'Successfully Logout!',
        ], 200);

    }

    protected function validateLogin(Request $request)
    {
        $this->validate($request, [
            $this->username() => 'required', 'password' => 'required',
        ]);
    }
}
