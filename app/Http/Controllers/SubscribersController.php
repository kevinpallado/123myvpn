<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
// validation
use App\Http\Requests\Subscriber\ChangePasswordRequest;
use App\Http\Requests\Subscriber\ProfileRequest;
use App\Http\Requests\Subscriber\SubscriptionRequest;
// models
use App\Models\PlanPricing;
use App\Models\UserSubscribers;
use App\Models\UserSubscriberStatus;
use App\Models\UserSubscriberSubscriptionHistory;
// collection
use App\Http\Resources\GeneralResourceCollection;

class SubscribersController extends Controller
{
    public function submitSubscription(SubscriptionRequest $request) {
        
        if(auth()->user()->subscriptionStatus && !Carbon::now()->gte(auth()->user()->subscriptionStatus->date_expired)) {
            return response()->json([
                'message' => 'Active plan is on-going',
            ]);
        }

        UserSubscriberStatus::updateOrCreate(
            ['user_subscribers_id' => auth()->user()->id],
            [
                'user_subscribers_id' => auth()->user()->id,
                'plan_pricing_id' => $request->plan_pricing_id,
                'premium_user' => true,
                'date_subscribe' => Carbon::now(),
                'date_expired' => Carbon::now()->addMonths(1),
                'data_subscribed' => $request->data_subscribed,
                'data_remaining' => $request->data_subscribed
            ]
        );

        UserSubscriberSubscriptionHistory::create([
            'user_subscribers_id' => auth()->user()->id,
            'plan_pricing_id' => $request->plan_pricing_id,
            'premium_user' => true,
            'date_subscribe' => Carbon::now(),
            'date_expired' => Carbon::now()->addMonths(1),
            'data_subscribed' => $request->data_subscribed,
            'data_remaining' => $request->data_subscribed
        ]);

        return response()->json([
            'message' => 'Successfully subscribed plan',
        ]);
    }

    public function subscriberChangePassword(ChangePasswordRequest $request) {
        $userSubscriber = auth()->user();
        $userSubscriber->password = Hash::make($request->password);
        $userSubscriber->save();

        return response()->json([
            'message' => 'Successfully updated password',
        ]);
    }

    public function subscriberDetails(Request $request) {
        return response()->json([
            'subscriptionUserInfo' => UserSubscribers::select('name','email','active','updated_at')->findOrFail(auth()->user()->id),
            'subscriptionStatusInfo' => auth()->user()->subscriptionStatus,
            'subscribedPlan' => PlanPricing::where('id', auth()->user()->subscriptionStatus->plan_pricing_id)->first()
        ]);
    }

    public function subscriberPriceListing(Request $request) {
        return response()->json([
            'subscriptionPricing' => GeneralResourceCollection::collection(PlanPricing::where('status', true)->get())
        ]);
    }

    public function updateProfile(ProfileRequest $request) {
        $userSubscriber = UserSubscribers::findOrFail(auth()->user()->id);

        $userSubscriber->name = $request->name;
        $userSubscriber->email = $request->email;
        $userSubscriber->save();

        return response()->json([
            'message' => 'Successfully updated profile information',
        ]);
    }

    public function subscriberHistory(Request $request) {
        $history = UserSubscriberSubscriptionHistory::where('user_subscribers_id', auth()->user()->id)->get();
        return response()->json([
            'subscriptionHistory' => $history,
        ]);
    }
}