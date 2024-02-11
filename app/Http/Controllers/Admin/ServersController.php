<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
// models
use App\Models\Server;
// resource
use App\Http\Resources\GeneralResourceCollection;

class ServersController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('admin/servers/index')->with([
            'servers' => GeneralResourceCollection::collection(Server::paginate(10))
        ]);
    }

    public function create(Request $request): Response
    {
        return Inertia::render('admin/servers/components/form');
    }

    public function store(Request $request): RedirectResponse
    {
        Server::create($request->all());

        return redirect()->intended(route('admin.servers.index'));
    }

    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, $server)
    {
        return Inertia::render('admin/servers/components/form')->with([
            'servers' => Server::findOrFail($server),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        
        $server = Server::findOrFail($id);
    
        // Assigning request data to the server model's attributes
        $server->name = $request->name;
        $server->ip_address = $request->ip_address;
        $server->vpn_value = $request->vpn_value;
        $server->location = $request->location;
    
        $server->save();
    
        return redirect()->intended(route('admin.servers.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Server::findOrFail($id)->delete();

        return redirect()->intended(route('admin.servers.index'));
    }
}
