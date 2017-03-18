<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->unsignedBigInteger('id'); // Allows Us to use Facebook ID
            $table->unsignedBigInteger('sp_id')->nullable(); // Sponsor ID
            $table->foreign('sp_id')->references('id')->on('users');
            $table->string('code',24);
            $table->string('first_name',32);
            $table->string('last_name',32);
            $table->string('username',32)->unique(); // Use for Login
            $table->string('email',80)->unique(); // For Sending Email Updates
            $table->string('password',60);
            $table->boolean('verified')->default(0); // Email Must be Verified
            $table->boolean('activated')->default(0); // Account Must Be Activated
            $table->boolean('banned')->default(0); // Account is Banned
            $table->boolean('on_trial')->default(1); // On Sign Up Trial is ON
            $table->boolean('subscribed')->default(0); // If User Subscribe
            $table->unsignedTinyInteger('resent')->default(0); // For Sending Password Reset Email
            $table->json('settings')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
