<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model 
{

    protected $table = 'companies';
    public $timestamps = true;

    public function city()
    {
        return $this->belongsTo('City');
    }

}