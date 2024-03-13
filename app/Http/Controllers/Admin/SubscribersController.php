<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Stripe\StripeClient;
// model
use App\Models\Pricing;
use App\Models\UserSubscribers;
use App\Models\UserSubscriberVPNAccess;
// resource
use App\Http\Resources\GeneralResourceCollection;

class SubscribersController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('admin/subscribers/index')->with([
            'subscribers' => GeneralResourceCollection::collection(UserSubscribers::with('subscriptions','subscriptionStatus')->paginate(15))
        ]);
    }

    public function create(Request $request): Response
    {
        return Inertia::render('admin/subscribers/components/form');
    }

    public function store(Request $request): RedirectResponse
    {
        $subscriber = UserSubscribers::create(array_merge(
            $request->except('password'),
            ['password' => Hash::make($request->password)]
        ));

        return redirect()->route('admin.subscribers.index');
    }

    public function show(Request $request, UserSubscribers $subscriber)
    {
        switch($request->action) {
            case 'vpn-access':
                return Inertia::render('admin/subscribers/vpn-list')->with([
                    'vpnAccess' => $subscriber->subscriberAccess
                ]);
        }
    }

    public function edit(UserSubscribers $subscriber): Response
    {
        return Inertia::render('admin/subscribers/components/form')->with([
            'subscriber' => $subscriber,
            'subscriptionStatus' => $subscriber->subscriptionStatus
            // 'subscriberPaymentMethods' => $subscriber->paymentMethods(),
            // 'cancelSubscriptionGracePeriod' => $subscriber->subscription('default_plan')->onGracePeriod(),
            // 'canceledSubscription' => $subscriber->subscription('default_plan')->canceled(),
            // 'intent' => $subscriber->createSetupIntent(),
            // 'pricing' => Pricing::select('pricing_id','name','price','currency')->where('billing_method','month')->get()
        ]);
    }

    public function update(Request $request, UserSubscribers $subscriber)
    {
        // switch($request->action) {
        //     case 'card-info':
        //         $subscriber->newSubscription('default_plan', $request->planSelected)->create($request->setupIntent['payment_method']);
        //         break;
        //     case 'cancel-subscription':
        //         $subscriber->subscription('default_plan')->cancelAt(
        //             now()->addDays(5)
        //         );
        //         break;
        //     default:
        //         $subscriber->name = $request->name;
        //         $subscriber->email = $request->email;
        //         $subscriber->save();
        //         break;
        // }

        return redirect()->route('admin.subscribers.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
