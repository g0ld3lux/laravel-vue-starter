<?php

// Add Your Web Routes Here

Route::group(['domain' => 'www.'.config('app.domain')], function () {
    Route::get('/{vue?}', 'DomainController@vueRouterCatcher')->where('vue', '[\/\w\.-]*')->name('app');
});

Route::group(['domain' => '{username}.'.config('app.domain')], function () {
    Route::get('/', function ($username) {
        return 'this is dashboard of ' .$username; 
    });
})->where('username','^/\b([a-z0-9]+)\b(?<!admin|api|support)');

Route::group(['domain' => config('app.domain')], function () {
    Route::get('/{slug?}', 'DomainController@redirectNonWWWToWWW')->where('vue', '[\/\w\.-]*')->name('redirectToWWW');
});