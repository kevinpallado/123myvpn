<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class UserSubscriberStatus extends Model
{
    protected $table = 'user_subscriber_status';
    protected $primaryKey = 'id';
    protected $fillable = array(
        'user_subscribers_id',
        'plan_pricing_id',
        'premium_user',
        'date_subscribe',
        'date_expired',
        'data_subscribed',
        'data_remaining'
    );

    protected $casts = [
        'premium_user' => 'boolean'
    ];
}
