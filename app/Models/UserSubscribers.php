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
    );

    protected $hidden = [
        'password',
        'remember_token',
    ];
}
