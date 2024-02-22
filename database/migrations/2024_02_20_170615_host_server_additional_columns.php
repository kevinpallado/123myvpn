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
        Schema::table('host_server', function(Blueprint $table) {
            $table->boolean('recommended')->default(false);
            $table->string('server_location');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('host_server', function(Blueprint $table) {
            $table->dropColumn(['recommended','country']);
        });
    }
};
