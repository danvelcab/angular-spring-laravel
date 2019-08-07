<?php

use Illuminate\Database\Seeder;
use \Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('companies')->truncate(); // Borramos el contenido de la tabla
        DB::table('cities')->truncate(); // Borramos el contenido de la tabla
        $this->call(CityTableSeeder::class);
        $this->call(CompanyTableSeeder::class);
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
