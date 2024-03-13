<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class UserSubscriberVPNAccess extends Model
{
    protected $table = 'user_subscriber_vpn_access';
    protected $fillable = array(
        'user_subscribers_id',
        'name',
        'location_server',
        'location_code',
        'ip_address',
        'vpn_value',
        'recommended'
    );

    protected $casts = [
        'recommended' => 'boolean'
    ];

    protected function createdAt(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => date('F j, Y g:i a', strtotime($value)),
        );
    }
}
