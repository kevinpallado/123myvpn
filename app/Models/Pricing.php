<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Pricing extends Model
{
    protected $table = 'pricing';
    protected $fillable = array(
        'pricing_id',
        'name',
        'billing_method',
        'interval_count',
        'price',
        'currency',
        'status',
        'features'
    );

    protected $casts = [
        'status' => 'boolean'
    ];

    protected function price(): Attribute
    {
        return Attribute::make(
            get: fn (float $value) => $value/100,
        );
    }

    protected function updatedAt(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => date('F j, Y g:i a', strtotime($value)),
        );
    }

    public static $featureLists = [
        
    ];

    public static $currencyLists = [
        'USD' => 'US Dollar',
        'CAD' => 'Canadian Dollar'
    ];

    public static $periodLists = [
        'month' => 'Monthly Period',
        'year' => 'Yearly Period'
    ];

    protected function billing(): Attribute
    {
        return Attribute::make(
            set: fn (string $value) => self::$periodLists[$value],
        );
    }

}
