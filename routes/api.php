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
Route::domain('kor.korkhondi.com')->group(function () {
    Route::get('test', function() {
        return response()->json(['message' => 'Testing environment']);
    });
});
Route::domain('api.123myvpn.com')->group(function () {
    Route::get('test', function() {
        return response()->json(['message' => 'Testing environment']);
    });
});
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
        // subscriber data
        Route::get('pricing-plan', [SubscribersController::class, 'subscriberPriceListing']);
        Route::get('subscription-status', [SubscribersController::class, 'subscriberDetails']);
        Route::post('subscription-status', [SubscribersController::class, 'submitSubscription']);
        Route::apiResource('vpn-servers', VPNServerController::class)->only('index');
    });
});