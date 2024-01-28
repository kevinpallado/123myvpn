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
use App\Models\UserSubscribers;
// resource
use App\Http\Resources\GeneralResourceCollection;

class SubscribersController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('admin/subscribers/index')->with([
            'subscribers' => GeneralResourceCollection::collection(UserSubscribers::paginate(15))
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

        $subscriber->createAsStripeCustomer();

        return redirect()->route('admin.subscribers.index');
    }

    public function show(UserSubscribers $subscriber)
    {
        //
    }

    public function edit(UserSubscribers $subscriber): Response
    {
        return Inertia::render('admin/subscribers/components/form')->with([
            'subscriber' => $subscriber
        ]);
    }

    public function update(Request $request, UserSubscribers $subscriber)
    {
        switch($request->action) {
            case 'card-info':
                $stripeClient = new StripeClient(config('cashier.secret'));

                try {
                    $paymentMethodReference = $stripeClient->paymentMethods->create([
                        'type' => 'card',
                        'card' => [
                            'number' => $request->card_number,
                            'exp_month' => 8,
                            'exp_year' => 2024,
                            'cvc' => 123
                        ]
                    ]);

                    $stripeClient->paymentMethods->attach(
                        $paymentMethodReference->id,
                        ['customer' => $subscriber->stripe_id]
                    );

                    $subscriber->defaultPaymentMethod();
                    
                } catch(\Exception $e) {
                    dd($e->getMessage());
                }
            default:
                $subscriber->name = $request->name;
                $subscriber->email = $request->email;
                $subscriber->save();
        }

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
