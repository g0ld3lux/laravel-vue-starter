<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Mutators\UserMutator;
use Silber\Bouncer\Database\HasRolesAndAbilities;
use Tymon\JWTAuth\Contracts\JWTSubject as AuthenticatableUserContract;

class User extends Authenticatable implements AuthenticatableUserContract
{
    use Notifiable, UserMutator, HasRolesAndAbilities;

    protected $table = 'users';

    public $incrementing = false;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'username', 'password'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token'
    ];

    protected $casts = [
        'verified' => 'boolean',
        'activated' => 'boolean',
        'banned' => 'boolean',
        'on_trial' => 'boolean',
        'subscribed' => 'boolean',
        'settings' => 'array'
    ];
    protected $dates = ['deleted_at', 'created_at', 'updated_at'];

    public function getJWTIdentifier()
    {
        return $this->getKey(); 
    }

    public function getJWTCustomClaims()
    {
        return [
             'user' => [ 
                'id' => $this->id,
             ]
        ];
    }
}
