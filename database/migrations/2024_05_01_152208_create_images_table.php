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
        Schema::create('images', function (Blueprint $table) {
            $table->id();
            $table->string('site_title')->nullable();
            $table->string('logo')->nullable();
            $table->string('logo_path')->nullable();
            $table->string('home_center')->nullable();
            $table->string('home_center_path')->nullable();
            $table->string('home_left')->nullable();
            $table->string('home_left_path')->nullable();
            $table->string('home_right')->nullable();
            $table->string('home_right_path')->nullable();
            $table->string('bottom_img')->nullable();
            $table->string('bottom_img_path')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('images');
    }
};
