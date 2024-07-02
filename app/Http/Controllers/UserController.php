<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\{Request, RedirectResponse};
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\{Auth, DB, Hash, Redirect};

class UserController extends Controller
{
    /**
     * @return Collection
     */
    public function getUsers(): Collection
    {
        return DB::table('users')->whereNot('user_role', 'admin')->get();
    }

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function saveUser(Request $request): RedirectResponse
    {
        User::create([
            'name' => request('name'),
            'email' => request('email'),
            'password' => Hash::make(request('name')),
            'user_role' => request('role'),
        ]);

        if ($request->hasFile('avatar')) {
            $avatar = $request->file('avatar');
            $avatarName = time() . '_' . $avatar->getClientOriginalName();
            $avatar->move(public_path('images'), $avatarName);
            User::where('email', '=', request('email'))->update(['avatar' => 'images/' . $avatarName]);
        }

        return Redirect::route('Users')->with('success', 'User saved successfully!');

    }
}
