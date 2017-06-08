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
        \Bouncer::allow('tenant')->to(['manage_users']);
        \Bouncer::allow('manager')->to('manage_projects','manage_comment','manage_files');
        \Bouncer::allow('worker')->to('update_task','edit_profile', 'comment','upload_files');
        \Bouncer::allow('client')->to('edit_profile', 'edit_profile', 'comment' ,'upload_files');
        });

        $user = User::create([
            'email' => 'user@example.com',
            'username' => 'user',
            'first_name' => 'John',
            'last_name' => 'Doe',
            'password' => 'password'
        ]);

        \Bouncer::assign('tenant')->to($user);
        // Gives All Abilities
        \Bouncer::allow($user)->everything();

    }
}
