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
        'vpn_value',
        'recommended',
        'server_location'
    );

    protected $casts = [
        'recommended' => 'boolean'
    ];

    public static $serverLists = [
        'US East (Ohio)' => 'us-east-2',
        'US East (N. Virginia)' => 'us-east-1',
        'US West (Oregon)' => 'us-west-2',
        'Asia Pacific (Mumbai)' => 'ap-south-1',
        'Asia Pacific (Seoul)' => 'ap-northeast-2',
        'Asia Pacific (Singapore)' => 'ap-southeast-1',
        'Asia Pacific (Sydney)' => 'ap-southeast-2',
        'Asia Pacific (Tokyo)' => 'ap-northeast-1',
        'Canada (Central)' => 'ca-central-1',
        'EU (Frankfurt)' => 'eu-central-1',
        'EU (Ireland)' => 'eu-west-1',
        'EU (London)' => 'eu-west-2',
        'EU (Paris)' => 'eu-west-3',
        'EU (Stockholm)' => 'eu-north-1'
    ];

    protected function location(): Attribute
    {
        return Attribute::make(
            set: fn (string $value) => self::$serverLists[$value],
        );
    }
}