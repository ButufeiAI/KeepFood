import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Toast from "../../components-template/toast/toast";
import { useAuth } from "../auth-context/authContext";
import { all_routes } from "../../../routes/all_routes";
import ImageWithBasePath from "../../../components/ImageWithBasePath";
type PasswordField = "password" | "confirmPassword";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  // For UI form
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("123456");

  // Toast state
  const [toast, setToast] = useState<{
    msg: string;
    type: "success" | "danger" | "warning" | "info";
  } | null>(null);

  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = (
    message: string,
    type: "success" | "danger" | "warning" | "info"
  ) => {
    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }
    setToast({ msg: message, type });
    toastTimer.current = setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (toastTimer.current) {
        clearTimeout(toastTimer.current);
      }
    };
  }, []);

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPassword = password;

    if (!trimmedEmail || !trimmedPassword) {
      showToast("Veuillez remplir tous les champs !", "danger");
      return;
    }

    const result = login(trimmedEmail, trimmedPassword);

    if (!result.ok) {
      showToast(result.msg ?? "E-mail ou mot de passe invalide", "danger");
      return;
    }

    showToast("Connexion réussie !", "success");

    navigate(all_routes.dashboard, { replace: true });
  };


  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <>
      {/* Toast Notification */}
      {toast && <Toast msg={toast.msg} type={toast.type} />}

      {/* ========================
         Start Page Content
       ========================= */}
      <div className="container-fuild">
        <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
          <div className="row g-2">
            <div className="col-lg-6 col-md-12 col-sm-12 p-3">
              <div className="row justify-content-center align-items-center overflow-auto flex-wrap auth-vh vh-100">
                <div className="col-xl-8 col-lg-10 col-md-8 col-sm-10 mx-auto">
                  <form onSubmit={handleLogin}>
                    <div className="d-flex flex-column justify-content-between p-3">
                      <div className="mb-5">
                        <Link to="/">
                          <ImageWithBasePath
                            src="assets/img/logo.svg"
                            className="img-fluid"
                            alt="Logo"
                          />
                        </Link>
                      </div>

                      <div>
                        <div className="mb-4">
                          <h3 className="mb-2">Bonjour, Bon Retour !!!</h3>
                          <p className="mb-0">
                            Veuillez entrer vos identifiants pour vous connecter !
                          </p>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">
                            E-mail<span className="text-danger"> *</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="nom@exemple.com"
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">
                            Mot de passe<span className="text-danger"> *</span>
                          </label>

                          <div className="input-group input-group-flat pass-group">
                            <input
                              type={passwordVisibility.password ? "text" : "password"}
                              className="form-control pass-input"
                              aria-label="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                              className={`ti toggle-password input-group-text toggle-password ${passwordVisibility.password ? "icon-eye" : "icon-eye-off"
                                }`}
                              onClick={() => togglePasswordVisibility("password")}
                            ></span>
                          </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mb-4">
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              id="remember_me"
                              type="checkbox"
                            />
                            <label
                              htmlFor="remember_me"
                              className="form-check-label text-dark mt-0"
                            >
                              Se souvenir de moi
                            </label>
                          </div>

                          <Link to={all_routes.forgotPassword} className="link-primary">
                            Mot de passe oublié ?
                          </Link>
                        </div>

                        <div className="mb-4">
                          <button
                            type="submit"
                            className="btn btn-primary w-100"
                          >
                            Se connecter
                          </button>
                        </div>

                        <div className="login-or position-relative mb-4 text-center">
                          <span className="position-relative bg-white px-2 z-2">
                            ou continuer avec
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center flex-wrap">
                          <div className="text-center me-2 flex-fill">
                            <Link
                              to="#"
                              className="btn btn-white d-flex align-items-center justify-content-center shadow"
                            >
                              <ImageWithBasePath
                                className="img-fluid me-2"
                                src="assets/img/icons/google.svg"
                                alt="google"
                              />
                              Google
                            </Link>
                          </div>
                          <div className="text-center me-2 flex-fill">
                            <Link
                              to="#"
                              className="btn btn-white d-flex align-items-center justify-content-center shadow"
                            >
                              <ImageWithBasePath
                                className="img-fluid me-2"
                                src="assets/img/icons/fb.svg"
                                alt="facebook"
                              />
                              Facebook
                            </Link>
                          </div>
                        </div>


                        <div className="text-center mt-4">
                          <p className="fw-normal mb-0">
                            Vous n'avez pas de compte ?
                            <Link to={all_routes.register} className="link-primary">
                              {" "}
                              S'inscrire
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="col-lg-6">
              <div className="position-relative d-lg-flex align-items-center justify-content-center d-none flex-wrap vh-100 p-4 ps-0">
                <div className="w-100 rounded-3 position-relative h-100 bg-primary z-1 overflow-hidden">
                  <ImageWithBasePath
                    src="assets/img/authentication/authentication-bg-01.png"
                    className="img-fluid position-absolute end-0 z-n1 auth-bg-01"
                    alt="bg"
                  />
                  <ImageWithBasePath
                    src="assets/img/authentication/authentication-bg-02.png"
                    className="img-fluid position-absolute top-0 end-0 z-n1 auth-bg-02"
                    alt="bg"
                  />
                  <div className="px-4 rounded-3 h-100 d-flex flex-column align-items-center auth-wrap">
                    <div className="text-center z-2">
                      <h1 className="text-white mb-2">
                        Contrôle Complet de Votre Café &amp; Restaurant en Toute Simplicité
                      </h1>
                      <p className="text-white mb-0">
                        De la facturation à l'inventaire, accédez à tout ce dont vous avez besoin dans un tableau de bord puissant, Analysez les ventes, suivez vos plats les plus vendus.
                      </p>
                    </div>

                    <div className="text-center auth-img position-absolute bottom-0">
                      <ImageWithBasePath
                        src="assets/img/authentication/login.png"
                        className="img-fluid position-relative z-1"
                        alt="user"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
