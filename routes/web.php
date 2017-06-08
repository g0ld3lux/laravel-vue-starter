<?php

// Add Your Web Routes Here
Route::group(['domain' => '{username}.'.config('app.domain')], function () {
    Route::get('/', function ($username) {
        return 'this is dashboard of ' .$username; 
    });
});