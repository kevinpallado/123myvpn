<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
// request validation
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

    public function subscriberRegisterAPI(RegisterAPIRequest $request)
    {
        $subscriber = new UserSubscribers();

        $subscriber->name = $request->name;
        $subscriber->password = Hash::make($request->password);
        $subscriber->email = $request->email;
        $subscriber->save();

        return response()->json(['message' => 'Successfully registered. You can now login'], 200);
    }
}
