<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\PlanPricing;

use App\Http\Resources\GeneralResourceCollection;

class HomeController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('home')->with([
            'activePricing' => PlanPricing::where('status', true)->get()
        ]);
    }
}