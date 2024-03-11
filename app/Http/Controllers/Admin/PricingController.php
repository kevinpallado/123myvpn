<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
// models
use App\Models\PlanPricing;
use App\Models\Pricing;
use Stripe\Plan;
// resource
use App\Http\Resources\GeneralResourceCollection;

use App\Http\Requests\Admin\Pricing\StoreRequest;

class PricingController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('admin/pricing/index')->with([
            'pricing' => GeneralResourceCollection::collection(PlanPricing::paginate(10))
        ]);
    }

    public function create(Request $request): Response
    {
        return Inertia::render('admin/pricing/components/form');
    }

    public function store(StoreRequest $request): RedirectResponse
    {
        dd($request->all());
    }

    public function edit(Request $request, PlanPricing $pricing)
    {
        return Inertia::render('admin/pricing/components/form')->with([
            'pricing'
        ]);
    }

    public function update(Request $request, PlanPricing $pricing)
    {
        dd($request->all());
    }
}
