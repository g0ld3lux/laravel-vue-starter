<?php

// Add Your Web Routes Here

Route::group(['domain' => 'www.'.config('app.domain')], function () {
    Route::get('/{vue?}', 'DomainController@vueRouterCatcher')->where('vue', '[\/\w\.-]*')->name('app');
});

Route::group(['domain' => '{username}.'.config('app.domain'), 'where' => ['username' => '^(?!(?:static|my|admin|www)$).*$']], function () {
    Route::get('/', function ($username) {
        return 'this is dashboard of ' .$username; 
    });
});

Route::group(['domain' => config('app.domain')], function () {
    Route::get('/{slug?}', 'DomainController@redirectNonWWWToWWW')->where('slug', '[\/\w\.-]*')->name('redirectToWWW');
});