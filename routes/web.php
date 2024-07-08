<?php

use App\Http\Controllers\{
    ArticlesController,
    ProfileController,
    ImageController,
    StockRecordsController,
    UserController
};
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/showArticles', function () {
    return Inertia::render('showArticles');
});

Route::get('/ArticleDetails/{id}', function ($id) {
    return Inertia::render('ArticleDetails', ['id' => $id]);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('/get-articles-details/{id}', [ArticlesController::class, 'getArticleDetails']);
/* Wrapping up the routes in middleware */
Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    /* Sponsorships */
    Route::get('/updateImages', function () {
        return Inertia::render('updateImages');
    })->name('updateImages');

    Route::post('/save-images', [ImageController::class, 'SaveImages'])->name('save-images');

    /* Articles */
    Route::get('/Articles', function () {
        return Inertia::render('Articles');
    })->name('Articles');
    Route::get('/add-articles', function () {
        return Inertia::render('addArticles');
    })->name('add-articles');
    Route::post('/save-articles', [ArticlesController::class, 'saveArticle'])->name('save-articles');
    Route::post('/update-articles', [ArticlesController::class, 'updateArticles'])->name('update-articles');
    
    /* Users */
    Route::get('/Users', function () {
        return Inertia::render('Users');
    })->name('Users');
    Route::get('/add-users', function () {
        return Inertia::render('addUsers');
    })->name('add-users');
    Route::get('/get-users', [UserController::class, 'getUsers'])->name('get-users');
    Route::post('/save-users', [UserController::class, 'saveUser'])->name('save-users');
    // Route::post('/update-users', [ArticlesController::class, 'updateUsers'])->name('update-users');
});
Route::get('/get-articles', [ArticlesController::class, 'getArticles'])->name('get-articles');
Route::get('/showArticles', function () {
    return Inertia::render('showArticles');
})->name('showArticles');
Route::get('/get-images', [ImageController::class, 'getImages'])->name('get-images');
Route::get('/get-records', [StockRecordsController::class, 'getRecords'])->name('get-records');

require __DIR__ . '/auth.php';
