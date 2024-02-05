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
        Schema::table('pricing', function(Blueprint $table) {
            $table->longText('features');
        });

        Schema::create('host_server', function(Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('location');
            $table->string('ip_address');
            $table->string('vpn_value');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pricing', function(Blueprint $table) {
            $table->dropColumns(['features']);
        });

        Schema::dropIfExists('host_server');
    }
};
