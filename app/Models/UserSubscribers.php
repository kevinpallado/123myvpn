<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Laravel\Cashier\Billable;

class UserSubscribers extends Authenticatable
{
    use HasApiTokens, Billable;

    protected $table = 'user_subscribers';
    protected $fillable = array(
        'name',
        'email',
        'password',
        'forgot_pw_token',
        'forgot_pw_requested',
        'phone',
        'dob'
    );

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function subscriberAccess() {
        return $this->hasMany(UserSubscriberVPNAccess::class, 'user_subscribers_id');
    }

    public function subscriptionStatus() {
        return $this->hasOne(UserSubscriberStatus::class, 'user_subscribers_id');
    }

    protected function updatedAt(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => date('F j, Y g:i a', strtotime($value)),
        );
    }
}
