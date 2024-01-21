<?php

use Illuminate\Support\Facades\Route;
// controllers
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\DashboardController;

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

Route::get('/', function () {
    return Inertia::render('home');
});

Route::prefix('admin')->name('admin.')->group(function() {
    Route::get('login', [LoginController::class, 'loginForm'])->name('login.form');
    Route::post('login', [LoginController::class, 'login'])->name('login.submit');

    Route::middleware('auth:admin')->group(function () {
        Route::get('logout', [LoginController::class, 'logout'])->name('logout.submit');
        Route::resource('dashboard', DashboardController::class)->only('index');
    });
});