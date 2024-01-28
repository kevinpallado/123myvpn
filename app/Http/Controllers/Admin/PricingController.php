<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
// models
use App\Models\Pricing;
use Stripe\Plan;
// resource
use App\Http\Resources\GeneralResourceCollection;

class PricingController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('admin/pricing/index')->with([
            'pricing' => GeneralResourceCollection::collection(Pricing::paginate(10))
        ]);
    }

    public function create(Request $request): Response
    {
        return Inertia::render('admin/pricing/components/form');
    }

    public function store(Request $request): RedirectResponse
    {
        \Stripe\Stripe::setApiKey(config('cashier.secret'));

        try {
            $plan = Plan::create([
                'amount' => $request->plan_amount*100,
                'currency' => $request->currency,
                'interval' => $request->billing,
                'product' => [
                    'name' => $request->plan_name
                ]
            ]);
    
            Pricing::create([
                'pricing_id' => $plan->id,
                'name' => $request->plan_name,
                'billing_method' => $request->billing,
                'price' => $plan->amount,
                'currency' => $plan->currency
            ]);
        } catch(\Exception $e) {
            dd($e->getMessage());
        }

        return redirect()->intended(route('admin.pricing.index'));
    }

    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
