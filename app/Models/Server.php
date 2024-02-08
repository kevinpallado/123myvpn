<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Server extends Model
{
    protected $table = 'host_server';
    protected $primaryKey = 'id';
    protected $fillable = array(
        'name',
        'location',
        'ip_address',
        'vpn_value'
    );

    public $timestamps = false;
}
