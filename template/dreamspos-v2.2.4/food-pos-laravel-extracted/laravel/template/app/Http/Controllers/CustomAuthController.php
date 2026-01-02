<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CustomAuthController extends Controller
{
    // Show login page
    public function login()
    {
        return view('login');
    }

    // Handle fake login
    public function authenticate(Request $request)
    {
        // Validate input
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Fake credentials
        $fakeEmail = 'admin@example.com';
        $fakePassword = '123456';

        if (
            $request->email === $fakeEmail &&
            $request->password === $fakePassword
        ) {
            // Store fake session
            session(['fake_auth' => true]);

            return redirect()->to('index');
        }

        // Redirect back with error
        return back()->with('error', 'Invalid email or password');
    }
}
