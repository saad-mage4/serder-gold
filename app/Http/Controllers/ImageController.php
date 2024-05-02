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

    public function SaveImage(Request $request): RedirectResponse
    {
        // Save the logo image
        $logoName = $request->file('logo')->getClientOriginalName();
        $logoPath = $request->file('logo')->store('public/images');
        $logoDbPath = explode('/', $logoPath);
        $centerBannerName = $request->file('centerBanner')->getClientOriginalName();
        $centerBannerPath = $request->file('centerBanner')->store('public/images');
        $centerBannerDbPath = explode('/', $centerBannerPath);

        $logoSave = new Images();
        $logoSave->logo = $logoName;
        $logoSave->logo_path = $logoDbPath[2];
        $logoSave->home_center = $centerBannerName;
        $logoSave->home_center_path = $centerBannerDbPath[2];
        $logoSave->save();

        // return response('success');
        return Redirect::route('updateImages');
    }


    /*public function saveImages(Request $request): RedirectResponse
    {
        dd($request->files);
        return helper::class->saveOrUpdateEntity(Images::class, $request, $request->key);
    }*/
}
