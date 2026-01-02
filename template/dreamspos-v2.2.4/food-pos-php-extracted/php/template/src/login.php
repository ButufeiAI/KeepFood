<?php ob_start();?>

    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="container-fuild">

        <!-- Start Content -->
        <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">

            <!-- start row -->
            <div class="row g-2">

                <div class="col-lg-6 col-md-12 col-sm-12 p-3">

                    <!-- start row -->
                    <div class="row justify-content-center align-items-center overflow-auto flex-wrap auth-vh vh-100">

                        <div class="col-xl-8 col-lg-10 col-md-8 col-sm-10 mx-auto">
                            <form action="index.php">

                                <div class="d-flex flex-column justify-content-between">
                                    <div class="mb-5">
                                        <a href="index.php"><img src="assets/img/logo.svg" class="img-fluid" alt="Logo"></a>
                                    </div>

                                    <div>
                                        <div class="mb-4">
                                            <h3 class="mb-2">Hi, Welcome Back !!!</h3>
                                            <p class="mb-0">Please enter your credentials to sign in!</p>
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label">Email<span class="text-danger"> *</span></label>
                                            <input type="email" class="form-control">
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label">Password<span class="text-danger"> *</span></label>
                                            <div class="input-group input-group-flat pass-group">
                                                <input type="password" class="form-control pass-input">
                                                <span class="input-group-text toggle-password ">
                                                    <i class="icon-eye-off"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="d-flex align-items-center justify-content-between mb-4">
                                            <div class="d-flex align-items-center">
                                                <div class="form-check form-check-md mb-0">
                                                    <input class="form-check-input" id="remember_me" type="checkbox">
                                                    <label for="remember_me" class="form-check-label text-dark mt-0">Remember Me</label>
                                                </div>
                                            </div>
                                            <div class="text-end">
                                                <a href="forgot-password.php" class="link-primary">Forgot Password?</a>
                                            </div>
                                        </div>

                                        <div class="mb-4">
                                            <button type="submit" class="btn btn-primary w-100">Sign In</button>
                                        </div>

                                        <div class="login-or position-relative mb-4 text-center">
                                            <span class="position-relative bg-white px-2 z-2">or continue with</span>
                                        </div>

                                        <div class="d-flex align-items-center justify-content-center flex-wrap">
                                            <div class="text-center me-2 flex-fill">
                                                <a href="#" class="btn btn-white d-flex align-items-center justify-content-center shadow">
                                                    <img class="img-fluid me-2" src="assets/img/icons/google.svg" alt="google">Google
                                                </a>
                                            </div>
                                            <div class="text-center me-2 flex-fill">
                                                <a href="#" class="btn btn-white d-flex align-items-center justify-content-center shadow">
                                                    <img class="img-fluid me-2" src="assets/img/icons/fb.svg" alt="facebook">Facebook
                                                </a>
                                            </div>
                                        </div>

                                        <div class="text-center mt-4">
                                            <p class="fw-normal mb-0">Don't have an account?
                                                <a href="register.php" class="link-primary"> Sign Up</a>
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            </form>
                        </div> <!-- end col -->

                    </div>
                    <!-- end row -->

                </div> <!-- end col -->

                <div class="col-lg-6">
                    <div class="position-relative d-lg-flex align-items-center justify-content-center d-none flex-wrap vh-100 p-4 ps-0">
                        <div class="w-100 rounded-3 position-relative h-100 bg-primary z-1 overflow-hidden">
                            <img src="assets/img/authentication/authentication-bg-01.png" class="img-fluid position-absolute end-0 z-n1 auth-bg-01" alt="bg">
                            <img src="assets/img/authentication/authentication-bg-02.png" class="img-fluid position-absolute top-0 end-0 z-n1 auth-bg-02" alt="bg">
                            <div class="px-4 rounded-3 h-100 d-flex flex-column align-items-center auth-wrap">
                                <div class="text-center z-2">
                                    <h1 class="text-white mb-2">Complete Control of Your Cafe & Restaurant with Ease</h1>
                                    <p class="text-white mb-0">From billing to inventory access everything you need in a single powerful dashboard, Analyze sales, track your best-selling dishes.</p>
                                </div>
                                <div class="text-center auth-img position-absolute bottom-0">
                                    <img src="assets/img/authentication/login.png" class="img-fluid position-relative z-1" alt="user">
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- end col -->

            </div>
            <!-- end row -->

            <div class="alert alert-danger border-0 border-danger border-bottom alert-dismissible pe-5 d-none" role="alert">
                <p class="fw-medium mb-0 d-inline-flex align-items-center">
                <span class="btn btn-icon btn-xs rounded-circle bg-danger d-flex align-items-center justify-content-center pe-none me-2 "><i class="icon-x fs-16 text-white"></i></span>Invalid email or password</p>
                <button type="button" class="btn-close btn-custom-close top-50 translate-middle-y link-danger" data-bs-dismiss="alert" aria-label="Close"><i class="icon-x"></i></button>
            </div>

        </div>
        <!-- End Content -->

    </div>

    <!-- ========================
        End Page Content
    ========================= -->

<?php
$content = ob_get_clean();
require_once '../layouts/auth_main.php';
?>
