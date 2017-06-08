<?php

namespace Admin\Observers;

use Admin\Models\Auth\Admin;
use Keygen;
use Hash;

class AdminObserver
{
    /**
     * Listen to the Admin created event.
     *
     * @param  Admin  $admin
     * @return void
     */
    public function creating(Admin $admin)
    {
        // If We Didnt Passed Any Facebook Id On admin Creation then We Generate One
        if(is_null($admin->id) && !is_numeric($admin->id)){
            $admin->id = Admin::generateUniqueID();
        }
    }

    /**
     * Listen to the Admin deleting event.
     *
     * @param  Admin  $admin
     * @return void
     */
    public function deleting(Admin $admin)
    {
        //
    }

}