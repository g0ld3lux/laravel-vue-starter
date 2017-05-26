<?php

// Entry Point For Our Vue JS App
Route::get('/{vue?}', function () {
    return view('app');
})->where('vue', '[\/\w\.-]*')->name('app');
