<?php

// Add Your Web Routes Here

Route::group(['domain' => 'www.'.config('app.domain')], function () {
    Route::get('/{vue?}', 'DomainController@vueRouterCatcher')->name('app');
});

Route::group(['domain' => '{username}.'.config('app.domain')], function () {
    Route::get('/', function ($username) {
        return 'this is dashboard of ' .$username; 
    });
});

Route::group(['domain' => config('app.domain')], function () {
    Route::get('/{nonwww?}', 'DomainController@redirectNonWWWToWWW')->name('redirectToWWW');
});