<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
// models
use App\Models\Users;
// resource
use App\Http\Resources\GeneralResourceCollection;

class UsersController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('admin/users/index')->with([
            'users' => GeneralResourceCollection::collection(Users::paginate(10))
        ]);
    }

    public function create(Request $request): Response
    {
        return Inertia::render('admin/users/components/form');
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => '',
        ]);

        Users::create($request->all());

        return redirect()->intended(route('admin.users.index'));
    }

    public function show(Request $user)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, $user)
    {
        return Inertia::render('admin/users/components/form')->with([
            'users' => Users::findOrFail($user),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
{
    $request->validate([
        'name' => 'required',
        'email' => 'required|email',
        'password' => '',
    ]);

    $user = Users::findOrFail($id);
    $user->update($request->except(['password']));

    return redirect()->intended(route('admin.users.index'));
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Users::findOrFail($id)->delete();

        return redirect()->intended(route('admin.users.index'));
    }
}
