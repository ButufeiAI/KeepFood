import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../components-template/image-with-base-path/index";
import CustomerModal from "./customerModal";


const Customer = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		  ========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-3 mb-4">
            <div className="flex-grow-1">
              <h3 className="mb-0">
                Clients{" "}
                <Link
                  to="#"
                  className="btn btn-icon btn-sm btn-white rounded-circle ms-2"
                >
                  <i className="icon-refresh-ccw" />
                </Link>
              </h3>
            </div>
            <div className="gap-2 d-flex align-items-center flex-wrap">
              <div className="input-group input-group-flat w-auto">
  <input type="text" className="form-control" placeholder="Rechercher" />
  <span className="input-group-text">
    <i className="icon-search text-dark" />
  </span>
</div>

              <Link
                to="#"
                className="btn btn-primary d-inline-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#add_customer"
              >
                <i className="icon-circle-plus me-1" />
                Ajouter
              </Link>
            </div>
          </div>
          {/* End Page Header */}
          {/* Row start */}
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-md-6 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="avatar avatar-rounded flex-shrink-0 me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-32.jpg"
                          alt="category"
                          className="img-fluid"
                        />
                      </Link>
                      <span>
                        <h6 className="fs-14 fw-semibold mb-0">
                          <Link to="#">Adrian James</Link>
                        </h6>
                        <p className="mb-0">Male</p>
                      </span>
                    </div>
                    <div>
                      <p className="badge bg-light text-dark fw-medium fs-13 mb-0">
                        #CR6569
                      </p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-phone text-dark me-2" /> Numéro de Téléphone{" "}
                      </span>
                      <span className="fw-medium text-dark">+1 987 654 3210</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-mail text-dark me-2" /> E-mail{" "}
                      </span>
                      <span className="fw-medium text-dark">
                        adrian@example.com
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-calendar-fold text-dark me-2" /> Créé
                        le{" "}
                      </span>
                      <span className="fw-medium text-dark">
                        25 Nov, 2025, 02:44 PM
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-top pt-3">
                    <span className="badge badge-soft-success">Active</span>
                    <div className="d-flex">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-white rounded-circle me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_customer"
                      >
                        <i className="icon-pencil-line" />
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-white rounded-circle"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                      >
                        <i className="icon-trash-2 text-danger" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-md-6 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="avatar avatar-rounded flex-shrink-0 me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-33.jpg"
                          alt="category"
                          className="img-fluid"
                        />
                      </Link>
                      <span>
                        <h6 className="fs-14 fw-semibold mb-0">
                          <Link to="#">Sue Allen</Link>
                        </h6>
                        <p className="mb-0">Female</p>
                      </span>
                    </div>
                    <div>
                      <p className="badge bg-light text-dark fw-medium fs-13 mb-0">
                        #CR8238
                      </p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-phone text-dark me-2" /> Numéro de Téléphone{" "}
                      </span>
                      <span className="fw-medium text-dark">+1 67890 12345</span>
                    </p>
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-mail text-dark me-2" /> E-mail{" "}
                      </span>
                      <span className="fw-medium text-dark">sue@example.com</span>
                    </p>
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-calendar-fold text-dark me-2" /> Créé
                        le{" "}
                      </span>
                      <span className="fw-medium text-dark">
                        30 Nov, 2025 - 03:15 PM
                      </span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-top pt-3">
                    <span className="badge badge-soft-danger">Disabled</span>
                    <div className="d-flex">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-white rounded-circle me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_customer"
                      >
                        <i className="icon-pencil-line" />
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-white rounded-circle"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                      >
                        <i className="icon-trash-2 text-danger" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-md-6 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="avatar avatar-rounded flex-shrink-0 me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-34.jpg"
                          alt="category"
                          className="img-fluid"
                        />
                      </Link>
                      <span>
                        <h6 className="fs-14 fw-semibold  mb-0">
                          <Link to="#">Frank Barrett</Link>
                        </h6>
                        <p className="mb-0">Female</p>
                      </span>
                    </div>
                    <div>
                      <p className="badge bg-light text-dark fw-medium fs-13 mb-0">
                        #CR4824
                      </p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-phone text-dark me-2" /> Numéro de Téléphone{" "}
                      </span>
                      <span className="fw-medium text-dark">+1 23456 78901</span>
                    </p>
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-mail text-dark me-2" /> E-mail{" "}
                      </span>
                      <span className="fw-medium text-dark">frank@example.com</span>
                    </p>
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-calendar-fold text-dark me-2" /> Créé
                        le{" "}
                      </span>
                      <span className="fw-medium text-dark">
                        05 Dec, 2025 - 11:30 AM
                      </span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-top pt-3">
                    <span className="badge badge-soft-success">Active</span>
                    <div className="d-flex">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-white rounded-circle me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_customer"
                      >
                        <i className="icon-pencil-line" />
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-white rounded-circle"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                      >
                        <i className="icon-trash-2 text-danger" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-md-6 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="avatar avatar-rounded badge bg-light flex-shrink-0 me-2"
                      >
                        <i className="icon-user text-dark fs-16" />
                      </Link>
                      <span>
                        <h6 className="fs-14 fw-semibold mb-0">
                          <Link to="#">Walkin Customer</Link>
                        </h6>
                        <p className="mb-0">Male</p>
                      </span>
                    </div>
                    <div>
                      <p className="badge bg-light text-dark fw-medium fs-13 mb-0">
                        #CR4578
                      </p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-phone text-dark me-2" /> Numéro de Téléphone{" "}
                      </span>
                      <span className="fw-medium text-dark">+1 56985 65895</span>
                    </p>
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-mail text-dark me-2" /> E-mail{" "}
                      </span>
                      <span className="fw-medium text-dark">info@example.com</span>
                    </p>
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-calendar-fold text-dark me-2" /> Créé
                        le{" "}
                      </span>
                      <span className="fw-medium text-dark">
                        25 Nov, 2025, 02:44 PM
                      </span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-top pt-3">
                    <span className="badge badge-soft-success">Active</span>
                    <div className="d-flex">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-white rounded-circle me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_customer"
                      >
                        <i className="icon-pencil-line" />
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-white rounded-circle"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                      >
                        <i className="icon-trash-2 text-danger" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-md-6 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="avatar avatar-rounded badge bg-light flex-shrink-0 me-2"
                      >
                        <i className="icon-user text-dark fs-16" />
                      </Link>
                      <span>
                        <h6 className="fs-14 fw-semibold mb-0">
                          <Link to="#">Walkin Customer</Link>
                        </h6>
                        <p className="mb-0">Female</p>
                      </span>
                    </div>
                    <div>
                      <p className="badge bg-light text-dark fw-medium fs-13 mb-0">
                        #CR6569
                      </p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-phone text-dark me-2" /> Numéro de Téléphone{" "}
                      </span>
                      <span className="fw-medium text-dark">+1 42367 12345</span>
                    </p>
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-mail text-dark me-2" /> E-mail{" "}
                      </span>
                      <span className="fw-medium text-dark">hello@example.com</span>
                    </p>
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-calendar-fold text-dark me-2" /> Créé
                        le{" "}
                      </span>
                      <span className="fw-medium text-dark">
                        26 Nov, 2025 - 03:15 PM
                      </span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-top pt-3">
                    <span className="badge badge-soft-success">Active</span>
                    <div className="d-flex">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-white rounded-circle me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_customer"
                      >
                        <i className="icon-pencil-line" />
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-white rounded-circle"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                      >
                        <i className="icon-trash-2 text-danger" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-md-6 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="avatar avatar-rounded flex-shrink-0 me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-36.jpg"
                          alt="category"
                          className="img-fluid"
                        />
                      </Link>
                      <span>
                        <h6 className="fs-14 fw-semibold mb-0">
                          <Link to="#">Jim Vickers</Link>
                        </h6>
                        <p className="mb-0">Male</p>
                      </span>
                    </div>
                    <div>
                      <p className="badge bg-light text-dark fw-medium fs-13 mb-0">
                        #CR5458
                      </p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-phone text-dark me-2" /> Numéro de Téléphone{" "}
                      </span>
                      <span className="fw-medium text-dark">+1 78912 34567</span>
                    </p>
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-mail text-dark me-2" /> E-mail{" "}
                      </span>
                      <span className="fw-medium text-dark">jim@example.com</span>
                    </p>
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-calendar-fold text-dark me-2" /> Créé
                        le{" "}
                      </span>
                      <span className="fw-medium text-dark">
                        27 Nov, 2025 - 09:30 AM
                      </span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-top pt-3">
                    <span className="badge badge-soft-danger">Disabled</span>
                    <div className="d-flex">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-white rounded-circle me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_customer"
                      >
                        <i className="icon-pencil-line" />
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-white rounded-circle"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                      >
                        <i className="icon-trash-2 text-danger" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-md-6 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="avatar avatar-rounded flex-shrink-0 me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-40.jpg"
                          alt="category"
                          className="img-fluid"
                        />
                      </Link>
                      <span>
                        <h6 className="fs-14 fw-semibold mb-0">
                          <Link to="#">David Belcher</Link>
                        </h6>
                        <p className="mb-0">Male</p>
                      </span>
                    </div>
                    <div>
                      <p className="badge bg-light text-dark fw-medium fs-13 mb-0">
                        #CR5458
                      </p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-phone text-dark me-2" /> Numéro de Téléphone{" "}
                      </span>
                      <span className="fw-medium text-dark">+1 23456 78901</span>
                    </p>
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-mail text-dark me-2" /> E-mail{" "}
                      </span>
                      <span className="fw-medium text-dark">david@example.com</span>
                    </p>
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-calendar-fold text-dark me-2" /> Créé
                        le{" "}
                      </span>
                      <span className="fw-medium text-dark">
                        12 Dec, 2025 - 09:15 AM
                      </span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-top pt-3">
                    <span className="badge badge-soft-success">Active</span>
                    <div className="d-flex">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-white rounded-circle me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_customer"
                      >
                        <i className="icon-pencil-line" />
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-white rounded-circle"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                      >
                        <i className="icon-trash-2 text-danger" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-md-6 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="avatar avatar-rounded flex-shrink-0 me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-37.jpg"
                          alt="category"
                          className="img-fluid"
                        />
                      </Link>
                      <span>
                        <h6 className="fs-14 fw-semibold mb-0">
                          <Link to="#">Nancy Chapman</Link>
                        </h6>
                        <p className="mb-0">Female</p>
                      </span>
                    </div>
                    <div>
                      <p className="badge bg-light text-dark fw-medium fs-13 mb-0">
                        #7ED321
                      </p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-phone text-dark me-2" /> Numéro de Téléphone{" "}
                      </span>
                      <span className="fw-medium text-dark">+1 34567 89012</span>
                    </p>
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-mail text-dark me-2" /> E-mail{" "}
                      </span>
                      <span className="fw-medium text-dark">nancy@example.com</span>
                    </p>
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-calendar-fold text-dark me-2" /> Créé
                        le{" "}
                      </span>
                      <span className="fw-medium text-dark">
                        14 Jan, 2025 - 11:30 AM
                      </span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-top pt-3">
                    <span className="badge badge-soft-success">Active</span>
                    <div className="d-flex">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-white rounded-circle me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_customer"
                      >
                        <i className="icon-pencil-line" />
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-white rounded-circle"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                      >
                        <i className="icon-trash-2 text-danger" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-md-6 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="avatar avatar-rounded flex-shrink-0 me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-41.jpg"
                          alt="category"
                          className="img-fluid"
                        />
                      </Link>
                      <span>
                        <h6 className="fs-14 fw-semibold mb-0">
                          <Link to="#">Julie Kangas</Link>
                        </h6>
                        <p className="mb-0">Female</p>
                      </span>
                    </div>
                    <div>
                      <p className="badge bg-light text-dark fw-medium fs-13 mb-0">
                        #D0021B
                      </p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-phone text-dark me-2" /> Numéro de Téléphone{" "}
                      </span>
                      <span className="fw-medium text-dark">+1 45678 90123</span>
                    </p>
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-mail text-dark me-2" /> E-mail{" "}
                      </span>
                      <span className="fw-medium text-dark">julie@example.com</span>
                    </p>
                    <p className="d-flex align-items-center justify-content-between mb-2">
                      <span className="d-flex align-items-center">
                        <i className="icon-calendar-fold text-dark me-2" /> Créé
                        le{" "}
                      </span>
                      <span className="fw-medium text-dark">
                        05 Feb, 2025 - 04:20 PM
                      </span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-top pt-3">
                    <span className="badge badge-soft-success">Active</span>
                    <div className="d-flex">
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-white rounded-circle me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_customer"
                      >
                        <i className="icon-pencil-line" />
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-icon btn-sm btn-white rounded-circle"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                      >
                        <i className="icon-trash-2 text-danger" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Row end */}
          {/* Pagination start */}
          <nav className="pagination-nav">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <Link
                  className="page-link d-flex align-items-center"
                  to="#"
                  aria-label="Previous"
                >
                  <span aria-hidden="true" className="me-1">
                    <i className="icon-chevron-left" />
                  </span>
                  Pre
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link
                  className="page-link d-flex align-items-center"
                  to="#"
                  aria-label="Previous"
                >
                  Next
                  <span aria-hidden="true" className="ms-1">
                    <i className="icon-chevron-right" />
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
          {/* Pagination end */}
        </div>
        {/* End Content */}
      </div>
      {/* ========================
			End Page Content
		  ========================= */}
      <CustomerModal />
    </>

  );
};

export default Customer;
