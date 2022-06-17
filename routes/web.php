<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\BarangController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();


Route::get('/', function () {
    return view('guest/guest');
});
Route::get('/guest/listproduk', function () {
    return view('guest/listproduk');
});


Route::group(['middleware' =>['auth', 'cekRole:admin,user']],function(){
    Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])->name('dashboard');
    Route::resource('kategori', KategoriController::class);
    Route::resource('barang', BarangController::class);
    
});

Route::group(['middleware' =>['auth', 'cekRole:user']],function(){
   
    Route::get('/riwayat-transaksi', function () {
        return view('dashboard/user/riwayatTransaksi');
    });
    
    Route::get('/cart-index',[CartController::class, 'index']);
    Route::post('cart/{id}', [CartController::class, 'tambahCart']);
    Route::delete('cart-delete/{id}', [CartController::class, 'deleteCart']);
    Route::get('check-out',[CartController::class, 'checkOut']);

});



