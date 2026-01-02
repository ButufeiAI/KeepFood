<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomAuthController;

Route::get('login', [CustomAuthController::class, 'login'])->name('login');
Route::post('login', [CustomAuthController::class, 'authenticate'])->name('login.submit');

Route::get('/index', function () {
    // Optional protection
    if (!session('fake_auth')) {
        return redirect('login');
    }

    return view('index');
})->name('index');

Route::get('/', function () {
    return view('index');
})->name('index');

Route::get('/addons', function () {
    return view('addons');
})->name('addons');

Route::get('/audit-report', function () {
    return view('audit-report');
})->name('audit-report');

Route::get('/categories', function () {
    return view('categories');
})->name('categories');

Route::get('/coupons', function () {
    return view('coupons');
})->name('coupons');

Route::get('/customer-report', function () {
    return view('customer-report');
})->name('customer-report');

Route::get('/customer', function () {
    return view('customer');
})->name('customer');

Route::get('/delivery-settings', function () {
    return view('delivery-settings');
})->name('delivery-settings');

Route::get('/earning-report', function () {
    return view('earning-report');
})->name('earning-report');

Route::get('/email-verification', function () {
    return view('email-verification');
})->name('email-verification');

Route::get('/forgot-password', function () {
    return view('forgot-password');
})->name('forgot-password');

Route::get('/integrations-settings', function () {
    return view('integrations-settings');
})->name('integrations-settings');

Route::get('/invoices', function () {
    return view('invoices');
})->name('invoices');

Route::get('/invoice-details', function () {
    return view('invoice-details');
})->name('invoice-details');

Route::get('/items', function () {
    return view('items');
})->name('items');

Route::get('/kanban-view', function () {
    return view('kanban-view');
})->name('kanban-view');

Route::get('/kitchen', function () {
    return view('kitchen');
})->name('kitchen');

// Route::get('/login', function () {
//     return view('login');
// })->name('login');

Route::get('/notifications-settings', function () {
    return view('notifications-settings');
})->name('notifications-settings');

Route::get('/order-report', function () {
    return view('order-report');
})->name('order-report');

Route::get('/orders', function () {
    return view('orders');
})->name('orders');

Route::get('/otp', function () {
    return view('otp');
})->name('otp');

Route::get('/pos', function () {
    return view('pos');
})->name('pos');

Route::get('/payment-settings', function () {
    return view('payment-settings');
})->name('payment-settings');

Route::get('/payments', function () {
    return view('payments');
})->name('payments');

Route::get('/print-settings', function () {
    return view('print-settings');
})->name('print-settings');

Route::get('/register', function () {
    return view('register');
})->name('register');

Route::get('/reservations', function () {
    return view('reservations');
})->name('reservations');

Route::get('/reset-password', function () {
    return view('reset-password');
})->name('reset-password');

Route::get('/role-permission', function () {
    return view('role-permission');
})->name('role-permission');

Route::get('/sales-report', function () {
    return view('sales-report');
})->name('sales-report');

Route::get('/store-settings', function () {
    return view('store-settings');
})->name('store-settings');

Route::get('/table', function () {
    return view('table');
})->name('table');

Route::get('/tax-settings', function () {
    return view('tax-settings');
})->name('tax-settings');

Route::get('/users', function () {
    return view('users');
})->name('users');