<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\Pricing;

use App\Http\Resources\GeneralResourceCollection;

class SubscriptionController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('subscription')->with([
            'subs' => GeneralResourceCollection::collection(Pricing::all())
        ]);
    }
}