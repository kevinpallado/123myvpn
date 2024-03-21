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
        Schema::table('user_subscriber_status', function(Blueprint $table) {
            $table->string('transaction_id')->nullable();
            $table->string('transaction_type')->nullable();
        });

        Schema::table('user_subscriber_subscription_history', function(Blueprint $table) {
            $table->string('transaction_id')->nullable();
            $table->string('transaction_type')->nullable();
        });

        Schema::table('user_subscribers', function(Blueprint $table) {
            $table->string('phone')->nullable();
            $table->string('dob')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('user_subscriber_status', function(Blueprint $table) {
            $table->dropColumn('transaction_id');
            $table->dropColumn('transaction_type');
        });

        Schema::table('user_subscriber_subscription_history', function(Blueprint $table) {
            $table->dropColumn('transaction_id');
            $table->dropColumn('transaction_type');
        });

        Schema::table('user_subscribers', function(Blueprint $table) {
            $table->dropColumn('phone');
            $table->dropColumn('dob');
        });
    }
};
