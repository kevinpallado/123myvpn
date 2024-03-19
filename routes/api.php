<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// controllers
use App\Http\Controllers\LoginController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\VPNServerController;
use App\Http\Controllers\SubscribersController;

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
        Route::post('forgot-password', [LoginController::class, 'forgotPasswordAPI']);
        Route::post('forgot-password-submit', [LoginController::class, 'forgotPasswordSubmitAPI']);
    });

    Route::group(['middleware' => 'auth:sanctum'], function () {
        Route::post('change-password', [SubscribersController::class, 'subscriberChangePassword']);
        Route::post('logout', [LoginController::class, 'logoutAPI']);
        // subscriber profile
        Route::group(['prefix' => 'profile'], function () {
            Route::post('update', [SubscribersController::class, 'updateProfile']);
        });
        // subscriber data
        Route::get('subscription-history', [SubscribersController::class, 'subscriberHistory']);
        Route::get('pricing-plan', [SubscribersController::class, 'subscriberPriceListing']);
        Route::get('subscription-status', [SubscribersController::class, 'subscriberDetails']);
        Route::post('subscription-status', [SubscribersController::class, 'submitSubscription']);
        Route::apiResource('vpn-servers', VPNServerController::class)->only('index');
    });
});