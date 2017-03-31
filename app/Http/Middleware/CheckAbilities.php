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
        // Auth User is From Token
        if (! $user = Auth::user()) {
            return response()->json([
        'message' => 'User Not Found',
        ], 404);
        }
        return $user;
    }
    private function isStrict()
    {
        return isset(request()->route()->getAction()['abilitiesStrict']) ? request()->route()->getAction()['abilitiesStrict'] : false;
    }
    private function hasRequiredAbilities($user, $abilities) 
    {
        // If User is Super Admin , Has '*' Wildcard Abilities
        if($user->can('*'))
        {
            return true;
        }
        // For Normal User We Check if Request is Not Strict, Has At Least One of the Abilities
        if(!$this->isStrict())
        {
            foreach($abilities as $ability)
            {
              return $user->can($ability);
            }
        }
        // If Strict then We Need All Abilities To Be Present in a User
        $userAbilities = array_intersect_assoc($abilities,$user->getAbilities()->pluck('name')->toArray());
        
        return $abilities === $userAbilities;
    }
}