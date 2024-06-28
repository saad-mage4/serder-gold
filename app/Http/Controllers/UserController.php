<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\{Auth, DB, Hash};

class UserController extends Controller
{
    /**
     * @return Collection
     */
    public function getUsers(): Collection
    {
        return DB::table('users')->whereNot('id', Auth::id())->get();
    }

    /**
     * @param Request $request
     * @return string
     */
    public function saveUser(Request $request): string
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

        return 'New user added successfully';
    }
}
