<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateResourcesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resources', function (Blueprint $table) {
            $table->increments('id');
	        $table->integer('area_id')->unsigned()->nullable();
	        $table->string('type');
	        $table->string('name');
	        $table->string('description');
	        $table->integer('capacity');
	        //Vehicles
	        $table->string('make')->nullable();
	        $table->string('model')->nullable();
	        $table->string('year')->nullable();

	        $table->foreign('area_id')->references('id')->on('areas')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('resources');
    }
}
