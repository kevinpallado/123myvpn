<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Mail;
// request validation
use App\Http\Requests\Auth\ForgotPasswordAPIRequest;
use App\Http\Requests\Auth\ForgotPasswordSubmitAPIRequest;
use App\Http\Requests\Auth\LoginAPIRequest;
use App\Http\Requests\Auth\RegisterAPIRequest;
// models
use App\Models\UserSubscribers;

class LoginController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function loginAPI(LoginAPIRequest $request)
    {
        $request->authenticate();
        
        $subscribers = UserSubscribers::where('email', $request->email)->first();

        return response()->json([
            'user' => $subscribers,
            'token' => $subscribers->createToken('subscriber')->plainTextToken
        ], 200);
    }

    public function logoutAPI(Request $request)
    {
        auth()->user()->tokens()->delete();

        return response()->json(['message' => 'Logged out'], 200);
    }

    public function forgotPasswordAPI(ForgotPasswordAPIRequest $request)
    {
        $subscriber = UserSubscribers::where('email', $request->email)->firstOrFail();

        if(!$subscriber->forgot_pw_requested || (Carbon::now()->gte($subscriber->forgot_pw_requested))) {
            $forgotPasswordToken = Str::random(15);
            $subscriber->forgot_pw_token = $forgotPasswordToken;
            $subscriber->forgot_pw_requested = Carbon::now()->addDay(1);
            $subscriber->save();

            Mail::send('emails.ForgotPassword', ['code' => $forgotPasswordToken], function ($message) use($request, $subscriber) {
                $message->to($subscriber->email);
                $message->subject('Forgot Your Passowrd');
            });

            return response()->json(['message' => 'Code sent to your email.', 'token' => $forgotPasswordToken], 200);
        }

        return response()->json(['message' => 'You cannot request reset password in 1 day'], 200);
    }

    public function forgotPasswordSubmitAPI(ForgotPasswordSubmitAPIRequest $request)
    {
        $subscriber = UserSubscribers::where('email', $request->email)->where('forgot_pw_token', $request->pw_token)->firstOrFail();

        $subscriber->password = Hash::make($request->password);
        $subscriber->forgot_pw_token = null;
        $subscriber->forgot_pw_requested = null;
        $subscriber->save();

        return response()->json(['message' => 'Password successfully changed'], 200);
    }

    public function subscriberRegisterAPI(RegisterAPIRequest $request)
    {
        $subscriber = new UserSubscribers();

        $subscriber->name = $request->name;
        $subscriber->password = Hash::make($request->password);
        $subscriber->email = $request->email;
        $subscriber->save();

        // $subscriber->createAsStripeCustomer();

        return response()->json(['message' => 'Successfully registered. You can now login', 'data' => [
            'token' => $subscriber->createToken('subscriber')->plainTextToken
        ]], 200);
    }
}
