<?php

return [

    'sign_up' => [
        // If You want User a New User Given a New Token
        // This Will Log in the User to the App
        'release_token' => env('SIGN_UP_RELEASE_TOKEN', false),
        'validation_rules' => [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'username' => 'required|unique:users'
        ]
    ],

    'login' => [
        'validation_rules' => [
            'email' => 'required|email',
            'password' => 'required'
        ]
    ],

    'forgot_password' => [
        'validation_rules' => [
            'email' => 'required|email'
        ]
    ],

    'reset_password' => [
        // If You Want the User Who Request Reset be Login
        // He Will be Given a Token
        'release_token' => env('PASSWORD_RESET_RELEASE_TOKEN', false),
        'validation_rules' => [
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed'
        ]
    ],
    // For Max No of Password Reset Count
    'resent' => 3

];