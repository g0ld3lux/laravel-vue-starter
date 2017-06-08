<?php

namespace App\Http\Controllers;

class DomainController extends Controller
{
    // This will be our default Response for the whole api routes.
    public function redirectNonWWWToWWW()
    {
        return redirect()->route('app');
    }

    public function vueRouterCatcher()
    {
        return view('app');
    }
}