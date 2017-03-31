<?php

use Illuminate\Database\Seeder;
use App\Models\Auth\User;


class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Bouncer::seeder(function () {
        // List All the Abilities of Each Roles
        \Bouncer::allow('admin')->to(['ban-user', 'add-user', 'delete-user', 'view-user', 'edit-user']);
        \Bouncer::allow('user')->to('update-profile');
        });

        $user = User::create([
            'email' => 'admin@laravel.dev',
            'username' => 'superadmin',
            'first_name' => 'John',
            'last_name' => 'Doe',
            'password' => 'password'
        ]);

        \Bouncer::assign('admin')->to($user);
        // Gives All Abilities
        \Bouncer::allow($user)->everything();

    }
}
