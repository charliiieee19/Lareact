<?php

use Illuminate\Support\Facades\Route;

Route::get('{reactRoutes}', function () {
    return view('welcome'); // your start view
})->where('reactRoutes', '^((?!api).)*$'); // except 'api' word

Route::post('api/Login', 'App\Http\Controllers\Api\StudentController@Login');
Route::get('api/Logout', 'App\Http\Controllers\Api\StudentController@Logout');

Route::get('api/SessionCheck', 'App\Http\Controllers\Api\StudentController@SessionCheck');