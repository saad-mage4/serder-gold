<?php

namespace App\Http\Controllers;

use App\Models\Articles;
use Illuminate\Http\{Request, RedirectResponse};
use Illuminate\Support\Facades\{Auth, DB, Redirect};

class ArticlesController extends Controller
{
    public function saveArticle(Request $request): RedirectResponse
    {
        $request->validate([
            'banner.*' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        /* Checking if exist already */
        $articleSave = Articles::where('id', $request->id)->first();

        if (!$articleSave) {
            /* Image model initializing */
            $articleSave = new Articles();
            $articleSave->author_id = Auth::id();
        }

        if ($request->has('title')) {
            $articleSave->title = $request->title;
        }

        if ($request->has('description')) {
            $articleSave->description = $request->description;
        }

        /* Setting the images to their respective columns */
        if ($request->hasFile('banner')) {
            $logoHeader = $request->file('banner');
            $logoHeaderName = time() . '_' . $logoHeader->getClientOriginalName();
            $logoHeader->move(public_path('images'), $logoHeaderName);
            $articleSave->logo_header = 'images/' . $logoHeaderName;
        }

        /* Saving the articles */
        $articleSave->save();

        return Redirect::route('updateArticle')->with('success', 'Article saved successfully!');
    }

    public function getArticles()
    {
        return DB::table('articles')->get();
    }
}
