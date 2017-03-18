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
        if (! $user = Auth::user()) {
            return response()->json([
        'message' => 'User Not Found',
        ], 404);
        }
        return $user;
    }
    private function isStrict()
    {
        return isset(request()->route()->getAction()['rolesCheckStrict']) ? request()->route()->getAction()['rolesCheckStrict'] : false;
    }
    private function hasRequiredRoles($user, $roles)
    {
        if(!$this->isStrict())
        {
            foreach($roles as $role)
            {
              return $user->isA($role);  
            }
        }
        elseif($this->isStrict()){

            foreach($roles as $role)
            {
             if($user->isNotA($role))
             {
                return false;
             }
            }
            return true;
        }
        
    }
}
