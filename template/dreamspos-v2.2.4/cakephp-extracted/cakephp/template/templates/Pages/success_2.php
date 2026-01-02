    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="account-content">
        <div class="row login-wrapper">
            <div class="col-lg-6">
                <div class="login-content">
                    <div class="login-userset">
                        <div class="login-userset">
                            <div class="login-logo logo-normal">
                                <?= $this->Html->image('logo.svg', ['alt' => 'img']) ?>
                            </div>
                        </div>    
                        <a href="index" class="login-logo logo-white">
                            <?= $this->Html->image('logo-white.svg', ['alt' => 'img']) ?>
                        </a>
                        <div class="login-userheading text-center">
                            <?= $this->Html->image('icons/check-icon.svg', ['alt' => 'Icon']) ?>
                            <h3 class="text-center">Success</h3>
                            <h4 class="verfy-mail-content text-center">Your Passwrod Reset Successfully!</h4>
                        </div>
                        <div class="form-login">
                            <a class="btn btn-login mt-0" href="signin_2">Back to Login</a>
                        </div>
                        <div class="my-4 d-flex justify-content-center align-items-center copyright-text">
                            <p>Copyright &copy; 2025 DreamsPOS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="login-img">
                    <?= $this->Html->image('authentication/authentication-06.svg', ['alt' => 'img']) ?>
                </div>
            </div>
        </div>
    </div>

    <!-- ========================
        End Page Content
    ========================= -->      