<?php

namespace App\Providers;

use App\Models\UserSubscribers;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\ServiceProvider;
// models
use Laravel\Cashier\Cashier;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Model::shouldBeStrict();
        Cashier::calculateTaxes();
        Cashier::useCustomerModel(UserSubscribers::class);
    }
}
