<?php

namespace App\Http\Controllers;

use App\helper;
use App\Models\Images;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ImageController extends Controller
{

    public function saveImages(Request $request): RedirectResponse
    {
        dd($request->files);
        return helper::class->saveOrUpdateEntity(Images::class, $request, $request->key);
    }
}
