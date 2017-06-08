<?php

use Illuminate\Database\Seeder;
use Admin\Models\Auth\Admin;


class AdminTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $user = Admin::create([
            'email' => 'admin@example.com',
            'job_title' => 'CEO',
            'name' => 'admin',
            'password' => 'password'
        ]);

    }
}
