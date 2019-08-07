<?php

use Illuminate\Database\Seeder;
use \Illuminate\Support\Facades\DB;

class CompanyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('companies')->insert([
            'name' => 'Company1',
            'email' => 'company1@email.com',
            'phone' => '123456789',
            'city_id' => 1
        ]);
        DB::table('companies')->insert([
            'name' => 'Company2',
            'email' => 'company2@email.com',
            'phone' => '123456789',
            'city_id' => 2
        ]);
    }
}
