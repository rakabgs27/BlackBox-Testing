<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $table='carts'; 

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function cart_detail(){
        return $this->hasMany(Cart_Details::class);
    }
}
