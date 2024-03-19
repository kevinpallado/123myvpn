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
            'data' => [
                'recommended' => Server::where('recommended', true)->get(),
                'server-lists' => Server::when($request->search, fn($query,$search) => $query->where('name','like','%'.$search.'%'))->get()
            ]
        ]);
    }
}
