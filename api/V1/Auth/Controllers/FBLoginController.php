<?php

namespace Api\V1\Auth\Controllers;

use App\Http\Controllers\Controller;
use SammyK\LaravelFacebookSdk\LaravelFacebookSdk;
use Facebook\Exceptions\FacebookSDKException;

class FBLoginController extends Controller
{

    /**
     * Added Check in Exception to Avoid Redirecting to /home or /dashboard
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * This will Get the Fb Login URL
     *
     * @return json
     */
    public function getLoginUrl()
    {
        $login_url = \FB::getLoginUrl(['email','public_profile']);
        return response()->json([
        'data' => [
            'url' => $login_url
        ]]);
    }
    /**
     * Since this is an Api, We Can Only use Javascript SDK
     * @return json
     */
    public function callback(LaravelFacebookSdk $fb)
    {
        try {
            $token = $fb->getJavaScriptHelper()->getAccessToken();
        } catch (FacebookSDKException $e) {
            // Failed to obtain access token
            dd($e->getMessage());
        }

        // $token will be null if no cookie was set or no OAuth data
        // was found in the cookie's signed request data
        if (! $token) {
            // User hasn't logged in using the JS SDK yet
        }
    }
}