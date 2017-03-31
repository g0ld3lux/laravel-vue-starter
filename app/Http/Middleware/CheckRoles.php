<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use Tymon\JWTAuth\Exceptions\JWTException;

class CheckRoles
{
    protected $allowed = false;
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        
        $roles = $this->getRequiredRoleForRoute();

        $user = $this->getAuthenticatedUser();

        if ($this->hasRequiredRoles($user,$roles)) {
            return $next($request);
        }
        return response()->json([
        'message' => 'Access Denied!',
        ], 401);
    }

    private function getRequiredRoleForRoute()
    {
        $roles = request()->route()->getAction()['roles'];

        return isset($roles) ? $roles : null;
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
        return isset(request()->route()->getAction()['rolesStrict']) ? request()->route()->getAction()['rolesStrict'] : false;
    }
    private function hasRequiredRoles($user, $roles)
    {
        // If User is Super Admin , Has '*' Wildcard Abilities
        if($user->can('*'))
        {
            return true;
        }
        // by Default Role Check is Non Strict, At Least One Role is Present it will Return True
        if(!$this->isStrict())
        {
            foreach($roles as $role)
            {
              return $user->isA($role);
            }
        }
        // If Strick is Check then All Roles Must be present
        return \Bouncer::is($user)->all(...$roles);
    }
}
