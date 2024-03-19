<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserSubscriberSubscriptionHistory extends Model
{
    protected $table = 'user_subscriber_subscription_history';
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
