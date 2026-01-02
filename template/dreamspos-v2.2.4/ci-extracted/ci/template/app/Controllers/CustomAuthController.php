<?php

namespace App\Controllers;

use CodeIgniter\Controller;

class CustomAuthController extends Controller
{
    public function login()
    {
        return view('login');
    }

    public function attemptLogin()
    {
        $session = session();

        $email    = $this->request->getPost('email');
        $password = $this->request->getPost('password');

        // 🔐 Fake credentials
        if ($email === 'admin@example.com' && $password === 'admin123') {

            // Set fake login session
            $session->set('isLoggedIn', true);
            $session->set('user_email', $email);

            return redirect()->route('index');
        }

        // Login failed
        return redirect()->back()->with('error', 'Invalid email or password');
    }
}
