<?php

namespace App\Http\Controllers;

use App\helper;
use App\Models\Images;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    /**
     * @param Request $request
     * @return string
     */
    public function saveImages(request $request): string
    {
        return helper::class->saveOrUpdateEntity(Images::class, $request, $request->key);
    }
}
