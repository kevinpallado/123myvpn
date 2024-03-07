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
        Schema::table('user_subscribers', function(Blueprint $table) {
            $table->string('forgot_pw_token')->nullable();
            $table->dateTime('forgot_pw_requested')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('user_subscribers', function(Blueprint $table) {
            $table->dropColumn('forgot_pw_token');
            $table->dropColumn('forgot_pw_requested');
        });
    }
};
