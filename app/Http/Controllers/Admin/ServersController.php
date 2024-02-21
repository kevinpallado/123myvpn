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
// request
use App\Http\Requests\Admin\Server\StoreRequest;
use App\Http\Requests\Admin\Server\UpdateRequest;

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
        return Inertia::render('admin/servers/components/form')->with([
            'countryServers' => array_keys(Server::$serverLists)
        ]);
    }

    public function store(StoreRequest $request): RedirectResponse
    {
        $server = new Server;
        $server->name            = $request->name;
        $server->ip_address      = $request->ip_address;
        $server->vpn_value       = $request->vpn_value;
        $server->location        = $request->location;
        $server->recommended     = $request->recommended;
        $server->server_location = $request->location;
        $server->save();

        return redirect()->intended(route('admin.servers.index'));
    }

    public function edit(Request $request, Server $server)
    {
        return Inertia::render('admin/servers/components/form')->with([
            'servers' => $server,
            'countryServers' => array_keys(Server::$serverLists)
        ]);
    }

    public function update(UpdateRequest $request, Server $server)
    {
        $server->name            = $request->name;
        $server->ip_address      = $request->ip_address;
        $server->vpn_value       = $request->vpn_value;
        $server->location        = $request->location;
        $server->recommended     = $request->recommended;
        $server->server_location = $request->location;
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
