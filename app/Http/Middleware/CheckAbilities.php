<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use Tymon\JWTAuth\Exceptions\JWTException;

class CheckAbilities

{
    public function handle($request, Closure $next)
    {
        
        $abilities = $this->getRequiredAbilitiesForRoute();

        $user = $this->getAuthenticatedUser();

        if ($this->hasRequiredAbilities($user,$abilities)) {
            return $next($request);
        }

       return response()->json([
        'message' => 'Access Denied!',
        ], 401);
    }

    private function getRequiredAbilitiesForRoute()
    {
        $abilities = request()->route()->getAction()['abilities'];

        return isset($abilities) ? $abilities : null;
    }

    private function getAuthenticatedUser()
    {

    if (! $user = Auth::user()) {
            return response()->json([
        'message' => 'User Not Found',
        ], 404);
        }
        return $user;
    }
    private function isStrict()
    {
        return isset(request()->route()->getAction()['abilitiesCheckStrict']) ? request()->route()->getAction()['abilitiesCheckStrict'] : false;
    }
    private function hasRequiredAbilities($user, $abilities) 
    {

        if(!$this->isStrict())
        {
            foreach($abilities as $ability)
            {
              return $user->can($ability);
            }
        }

        elseif($this->isStrict()){

            foreach($abilities as $ability)
            {
             if(!$user->can($ability))
             {
                return false;
             }
            }
            return true;
        }
    }
}