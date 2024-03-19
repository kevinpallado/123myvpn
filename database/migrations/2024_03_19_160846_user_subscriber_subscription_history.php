<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_subscriber_subscription_history', function(Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_subscribers_id');
            $table->unsignedBigInteger('plan_pricing_id');
            $table->boolean('premium_user')->default(false);
            $table->dateTime('date_subscribe', $precision = 0);
            $table->dateTime('date_expired', $precision = 0);
            $table->double('data_subscribed');
            $table->double('data_remaining')->nullable();
            $table->foreign('user_subscribers_id')->references('id')->on('user_subscribers');
            $table->foreign('plan_pricing_id')->references('id')->on('plan_pricing');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_subscriber_subscription_history');
    }
};
