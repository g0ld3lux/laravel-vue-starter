<?php

// We Will Use Vue Router Instead of Laravel Routing System
Route::get('/{vue?}', function () {
    return view('app');
})->where('vue', '[\/\w\.-]*')->name('app');
