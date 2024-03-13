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
        Schema::create('user_subscriber_vpn_access', function(Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_subscribers_id');
            $table->string('name');
            $table->string('location_server');
            $table->string('location_code');
            $table->string('ip_address');
            $table->string('vpn_value');
            $table->boolean('recommended')->default(false);
            $table->foreign('user_subscribers_id')->references('id')->on('user_subscribers');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_subscriber_vpn_access');
    }
};
