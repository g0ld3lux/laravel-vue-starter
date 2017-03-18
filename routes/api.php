<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::group([
    'middleware' => ['roles'],
    // We can Easily Add Roles in the Middleware
    'roles' => ['admin','manager'],
    // Tells Our Middleware if we Will Be Strict in Arrays of Roles
    'rolesCheckStrict' => true,
    'prefix' => 'admin'
], function() {
    Route::get('/' , function(){
        return 'Im an Admin HooRaaaah!';
    });
});


Route::group([
    'middleware' => ['jwt.auth', 'abilities'],
    'abilities' => ['view-dashboard', 'login'],
    'abilitiesCheckStrict' => true,
    ], function() {
Route::get('dashboard', function() {
   
   return 'power';

});
});


Route::group([
    'prefix' => 'restricted',
    'middleware' => 'auth:api',
], function () {

    // Authentication Routes...
    Route::get('logout', 'Auth\LoginController@logout');


    Route::get('/test', function () {
        return 'authenticated';
    });
});
Route::get('login', 'Auth\LoginController@login');

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');