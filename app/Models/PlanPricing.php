<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PlanPricing extends Model
{
    use SoftDeletes;

    protected $table = 'plan_pricing';
    protected $fillable = array(
        'name',
        'sale_text',
        'price_initial',
        'price_per_data',
        'price_percentage_off',
        'data_min_gb',
        'data_max_gb',
        'data_step_gb',
        'status'
    );

    protected $casts = [
        'status' => 'boolean'
    ];

    protected function updatedAt(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => date('F j, Y g:iA', strtotime($value)),
        );
    }

    public static $saleList = [
        '5' => 'Save 5%',
        '10' => 'Save 10%',
        '15' => 'Save 15%'
    ];

    protected function priceOff(): Attribute
    {
        return Attribute::make(
            set: fn (string $value) => self::$saleList[$value],
        );
    }

}