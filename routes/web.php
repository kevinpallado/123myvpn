<?php

use Illuminate\Support\Facades\Route;
// controllers
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\PricingController;
use App\Http\Controllers\Admin\SubscribersController;
use App\Http\Controllers\Admin\ServersController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\HomeController;

use Inertia\Inertia;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::resource('/', HomeController::class)->only('index');
Route::resource('/subscription', SubscriptionController::class)->only('index');

Route::prefix('admin')->name('admin.')->group(function() {
    Route::get('login', [LoginController::class, 'loginForm'])->name('login.form');
    Route::post('login', [LoginController::class, 'login'])->name('login.submit');

    Route::middleware('auth:admin')->group(function () {
        Route::get('logout', [LoginController::class, 'logout'])->name('logout.submit');
        Route::resource('dashboard', DashboardController::class)->only('index');
        Route::resource('subscribers', SubscribersController::class);
        Route::resource('pricing', PricingController::class);
        Route::resource('servers', ServersController::class);
        Route::resource('users', UsersController::class);
    });
});