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
        Schema::create('plan_pricing', function(Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('sale_text')->nullable();
            $table->double('price_initial');
            $table->double('price_per_data');
            $table->integer('price_percentage_off')->default(0);
            $table->integer('data_min_gb');
            $table->integer('data_max_gb')->nullable();
            $table->integer('data_step_gb');
            $table->boolean('status')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plan_pricing');
    }
};
