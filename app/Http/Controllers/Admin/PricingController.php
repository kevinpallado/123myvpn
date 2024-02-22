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

use App\Http\Requests\Admin\Pricing\StoreRequest;

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

    public function store(StoreRequest $request): RedirectResponse
    {
        \Stripe\Stripe::setApiKey(config('cashier.secret'));

        if($request->status) {
            if(Pricing::where('status', true)->where('billing_method', $request->billing)->count() == 3) {
                dd("Active pricing is more than 3 for billing method[".$request->billing."]");
            }
        } else {
            try {
                $plan = Plan::create([
                    'amount'    => $request->plan_amount*100,
                    'currency'  => $request->currency,
                    'interval'  => $request->billing,
                    'product'   => [
                        'name'  => $request->plan_name
                    ]
                ]);
        
                    $price = new Pricing;
                    $price->pricing_id      = $plan->id;
                    $price->name            = $request->plan_name;
                    $price->billing_method  = $request->billing;
                    $price->price           = $plan->amount;
                    $price->currency        = $plan->currency;
                    $price->status          = $request->status;
                    $price->features        = 'null';
                
            } catch(\Exception $e) {
                dd($e->getMessage());
            }
        }

        return redirect()->intended(route('admin.pricing.index'));
    }

}
