<?php

use Illuminate\Support\Facades\Route;

Route::get('{reactRoutes}', function () {
    return view('welcome'); // your start view
})->where('reactRoutes', '^((?!api).)*$'); // except 'api' word

Route::post('api/Login', 'App\Http\Controllers\Api\ApiController@Login');
Route::post('api/GetRequests', 'App\Http\Controllers\Api\ApiController@GetRequests');
Route::post('api/CheckConflictSchedules', 'App\Http\Controllers\Api\ApiController@CheckConflictSchedules');

Route::get('api/Logout', 'App\Http\Controllers\Api\ApiController@Logout');
Route::get('api/SessionCheck', 'App\Http\Controllers\Api\ApiController@SessionCheck');
Route::get('api/UserList', 'App\Http\Controllers\Api\ApiController@UserList');
Route::get('api/UserList2', 'App\Http\Controllers\Api\ApiController@UserList2');
Route::post('api/GetUserInfo', 'App\Http\Controllers\Api\ApiController@GetUserInfo');
Route::get('api/UserInfoDropdown', 'App\Http\Controllers\Api\ApiController@UserInfoDropdown');
Route::get('api/RequestsDropdown', 'App\Http\Controllers\Api\ApiController@RequestsDropdown');
Route::get('api/GetDashboardCounts', 'App\Http\Controllers\Api\ApiController@GetDashboardCounts');
Route::get('api/GetStudentRequests', 'App\Http\Controllers\Api\ApiController@GetStudentRequests');
