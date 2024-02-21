<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// models
use App\Models\Server;

class VPNServerController extends Controller
{
    public function index(Request $request)
    {
        return response()->json([
            'data' => Server::get()
        ]);
    }
}
