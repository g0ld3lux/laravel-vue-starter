<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Auth\User;
use App\Observers\UserObserver;
use Admin\Models\Auth\Admin;
use Admin\Observers\AdminObserver;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        User::observe(UserObserver::class);
        Admin::observe(AdminObserver::class);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
