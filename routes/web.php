<?php

use App\Http\Controllers\{ProfileController, ImageController};
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

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

/* Wrapping up the routes in middleware */
Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/updateImages', function () {
        return Inertia::render('updateImages');
    })->name('updateImages');

    Route::post('/save-images', [ImageController::class, 'SaveImages'])->name('save-images');
    Route::get('/get-images', [ImageController::class, 'getImages'])->name('get-images');
});

require __DIR__.'/auth.php';
