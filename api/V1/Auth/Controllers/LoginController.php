<?php

namespace Api\V1\Auth\Controllers;

use Api\V1\Auth\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

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
     * if User is Login then Redirect Directly to Dashboard
     *
     * @return void
     */
    protected $redirectTo = '/dashboard';
    /**
     * Added Check in Exception to Avoid Redirecting to /home or /dashboard
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => ['logout', 'check']]);
    }

    public function username()
    {
        return 'email';
    }

    public function login(LoginRequest $request)
    {

        $loginRequest = new LoginRequest();


        $validator    = \Validator::make($request->all(), $loginRequest->rules(), $loginRequest->messages());
        
        // Check Validation If No Errors
        if ($validator->fails()) {
            return response()->json(['success' => false, 'errors' => $validator->errors()->toArray(), 'inputs' => Input::except('_token', 'password')], 400);
        }

        // Check if to Many Login Attempts
        if ($this->hasTooManyLoginAttempts($request)) {
        $this->fireLockoutEvent($request);
        return response()->json([
        'message' => 'Too Many Failed Login Attempts!',
        ], 429);
        }

        // Get the Credentials
        $credentials = $this->credentials($request);

        // Validate Credentials 
        $valid     = $this->guard()->validate($credentials);
        if (!$valid) {
            $this->incrementLoginAttempts($request);
            return $this->sendFailedLoginResponse($request);
        }

        // Login and Get a JWT Token
        $token = $this->guard()->attempt($credentials);

        // User Statuses
        $verified = $this->guard()->user()->verified;
        $activated = $this->guard()->user()->activated;
        $banned = $this->guard()->user()->banned;
        
        // Account Banned Message
        if($banned){

             return response()->json(['message' => 'This Account is Banned. You May Submit a Ban Appeal to Our Support.',], 401);
        }
        // Email Not Verified Message
        if(!$verified){

             return response()->json(['message' => 'Please Check Your Email and Verify Your Email is Valid.',], 401);
        }
        // Account Inactive Message
        if(!$activated){

             return response()->json(['message' => 'Your Account is Inactive. If Your Account is Inactive after 48 hrs, Please Contact Our Support.',], 401);
        }
        // If Nothing Needs to Be Done then Give the User A Token
        if ($token) {
        return $this->sendLoginResponse($request, $token);
        }

    }

    protected function sendLoginResponse(LoginRequest $request, $token)
    {
    $this->clearLoginAttempts($request);

    return $this->authenticated($request, $this->guard()->user(), $token);
    }

    protected function authenticated(LoginRequest $request, $user, $token)
    {
    return response()->json([
        'message' => 'Authenticated',
        'access_token' => $token,
        'token_type' => 'bearer',
        'expires_in' => (\Config::get('jwt.ttl') * 60) - 120,
        'refresh_token' => $token,
        'refresh_token_expires_in' => (\Config::get('jwt.ttl') * 60)
    ]);
    }

    protected function sendFailedLoginResponse(LoginRequest $request)
    {
    return response()->json([
        'message' => \Lang::get('auth.failed'),
    ], 401);
    }

    public function check()
    {
        if($this->guard()->check()){
            return response()->json(['authenticated' => true,], 200);
        }
        return response()->json(['authenticated' => false,], 401);
    }

    public function logout()
    {
    $this->guard()->logout(); // pass true to blacklist forever
    return response()->json(['message' => 'Account was Log Out',], 200);
    }
}