<?php

namespace Api\V1\Auth\Controllers;

use Config;
use App\Models\Auth\User;
use App\Http\Controllers\Controller;
use Api\V1\Auth\Requests\SignUpRequest;
use Symfony\Component\HttpKernel\Exception\HttpException;
use DB;

class SignUpController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }
    public function signUp(SignUpRequest $request)
    {   
        // This Ensure Account Creation Will Never Happen If Something Goes Wrong!
        DB::beginTransaction();
        $user = new User($request->all());
        try {
            if(!$user->save()) {
                throw new HttpException('Whoops! Account Creation Failed!');
            }
        } catch (HttpException $e){
            DB::rollback();
            return response()->json(['message' => $e->getMessage()], 500);
        }
        // If All is Well Commit To Database
        DB::commit();
        // Issuing Token is Disabled in Config
        if(!Config::get('auth_scaffold.sign_up.release_token')) {
            return response()->json([
                'message' => 'Account Registered!'
            ], 201);
        }
        // Issuing Token is Enabled
        $token = \Auth::login($user);
        return response()->json([
            'message' => 'Account Registered!',
            'token' => $token
        ], 201);
    }
}