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
use App\Http\Requests\Admin\Pricing\UpdateRequest;

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
        return Inertia::render('admin/pricing/components/form')->with([
            'saleList' => array_keys(PlanPricing::$saleList)
        ]);
    }

    public function store(StoreRequest $request): RedirectResponse
    {
        $pricing = new PlanPricing;
        $pricing->name                  = $request->name;
        $pricing->price_initial         = $request->price_initial;
        $pricing->price_per_data        = $request->price_per_data;
        $pricing->price_percentage_off  = $request->price_percentage_off;
        $pricing->data_min_gb           = $request->data_min_gb;
        $pricing->data_max_gb           = $request->data_max_gb;
        $pricing->data_step_gb          = $request->data_step_gb;
        $pricing->status                = $request->status;
        $pricing->save();

        return redirect()->intended(route('admin.pricing.index'));
    }

    public function edit(Request $request, PlanPricing $pricing)
    {
        return Inertia::render('admin/pricing/components/form')->with([
            'pricing' => $pricing,
            'saleList' => array_keys(PlanPricing::$saleList)
        ]);
    }

    public function update(UpdateRequest $request, PlanPricing $pricing)
    {
        $pricing = new PlanPricing;
        $pricing->name                  = $request->name;
        $pricing->price_initial         = $request->price_initial;
        $pricing->price_per_data        = $request->price_per_data;
        $pricing->price_percentage_off  = $request->price_percentage_off;
        $pricing->data_min_gb           = $request->data_min_gb;
        $pricing->data_max_gb           = $request->data_max_gb;
        $pricing->data_step_gb          = $request->data_step_gb;
        $pricing->status                = $request->status;
        $pricing->save();

        return redirect()->intended(route('admin.pricing.index'));
    }

    public function destroy(string $id)
    {
        PlanPricing::findOrFail($id)->delete();

        return redirect()->intended(route('admin.pricing.index'));
    }

}
