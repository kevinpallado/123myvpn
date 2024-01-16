<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// controllers
use App\Http\Controllers\LoginController;
use App\Http\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['prefix' => 'v1/subscriber', 'middleware' => 'throttle:subscriber'], function() {
    // authentication
    Route::group(['prefix' => 'auth'], function() {
        Route::post('login', [LoginController::class, 'loginAPI']);
        Route::post('register', [LoginController::class, 'subscriberRegisterAPI']);
    });

    Route::group(['middleware' => 'auth:sanctum'], function () {
        Route::post('logout', [LoginController::class, 'logoutAPI']);
        // subscriber data
        Route::apiResource('dashboard', DashboardController::class);
    });
});