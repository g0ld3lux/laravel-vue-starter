<?php

// Add Your Web Routes Here

Route::group(['domain' => 'www.'.config('app.domain')], function () {
    Route::get('/{vue?}', function () {
    return view('app');
    })->where('vue', '[\/\w\.-]*')->name('app');
});

Route::group(['domain' => '{username}.'.config('app.domain')], function () {
    Route::get('/', function ($username) {
        return 'this is dashboard of ' .$username; 
    });
});

Route::group(['domain' => config('app.domain')], function () {
    Route::get('/', function () {
        return redirect()->route('app');
    });
});