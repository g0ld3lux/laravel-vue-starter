<?php

namespace Admin\Models\Auth;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Mutators\UserMutator;
use Admin\Notifications\AdminResetPasswordNotification;

class Admin extends Authenticatable
{
    use Notifiable, UserMutator;

    protected $table = 'admins';

    protected $guard = 'admin';

    public $incrementing = false;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'job_title',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token'
    ];

    protected $dates = ['deleted_at', 'created_at', 'updated_at'];

    // Override the Built In PasswordResetNotification by Laravel
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new AdminResetPasswordNotification($token));
    }
}
