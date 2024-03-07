<?php

namespace App\Http\Controllers;

use App\Http\Resources\GeneralResourceCollection;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pricing;

class SubscribersController extends Controller
{
    public function subscriberDetails(Request $request) {
        return response()->json([
            'subscriptionUserInfo' => auth()->user(),
        ]);
    }

    public function subscriberPriceListing(Request $request) {
        return response()->json([
            'subscriptionPricing' => GeneralResourceCollection::collection(Pricing::where('status', true)->get())
        ]);
    }
}