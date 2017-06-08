<?php

Route::group(['domain' => 'admin.'.config('app.domain')], function () {
  // Authentication Routes
  Route::get('/login', 'Auth\AdminLoginController@showLoginForm')->name('admin.login');
  Route::post('/login', 'Auth\AdminLoginController@login')->name('admin.login.submit');
  Route::get('/logout', 'Auth\AdminLoginController@logout')->name('admin.logout');

  // Password reset Routes
  Route::post('/password/email', 'Auth\AdminForgotPasswordController@sendResetLinkEmail')->name('admin.password.email');
  Route::get('/password/reset', 'Auth\AdminForgotPasswordController@showLinkRequestForm')->name('admin.password.request');
  Route::post('/password/reset', 'Auth\AdminResetPasswordController@reset');
  Route::get('/password/reset/{token}', 'Auth\AdminResetPasswordController@showResetForm')->name('admin.password.reset');
  // Admin Dashboard Route
  Route::get('/', 'DashboardController@index')->name('admin.dashboard');
  
});

Route::group(['domain' => '{username}.'.config('app.domain')], function () {
    Route::get('/', function ($username) {
        return 'this is dashboard of ' .$username; 
    });
});
// Vue Router Catcher
// Cause Unpleasant Bug, if Place on web.php so we move it here
Route::get('/{vue?}', function () {
    return view('app');
})->where('vue', '[\/\w\.-]*')->name('app');
