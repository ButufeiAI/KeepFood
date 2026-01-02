import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../components-template/image-with-base-path/index";
import CommonSelect from "../../../components-template/common-select/commonSelect";
import { Status_Active } from "../../../core/json/selectOption";

const EstablishmentTypeModal = () => {
    return (
        <>
            {/* Add Establishment Type */}
            <div className="modal fade" id="add_establishment_type">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0 p-4 pb-3">
                            <h4 className="modal-title">Ajouter un Type d'Établissement</h4>
                            <button
                                type="button"
                                className="btn-close btn-close-modal"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="icon-x" />
                            </button>
                        </div>
                        <form>
                            <div className="modal-body p-4 pt-1">
                                <div className="mb-3 d-flex align-items-center flex-wrap gap-3">
                                    <div className="avatar avatar-3xl border bg-light">
                                        <i className="icon-images fs-28 text-dark" />
                                    </div>
                                    <div>
                                        <label className="form-label">
                                            Image du Type d'Établissement<span className="text-danger"> *</span>
                                        </label>
                                        <p className="fs-13 mb-3">L'image doit faire moins de 5 MB</p>
                                        <div className="d-flex align-items-center">
                                            <div className="btn btn-icon btn-sm btn-white rounded-circle position-relative me-2">
                                                <input
                                                    type="file"
                                                    className="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0"
                                                />
                                                <i className="icon-pencil-line" />
                                            </div>
                                            <Link
                                                to="#"
                                                className="btn btn-icon btn-sm btn-white rounded-circle text-danger"
                                            >
                                                <i className="icon-trash-2" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Nom du Type d'Établissement<span className="text-danger"> *</span>
                                    </label>
                                    <input type="text" className="form-control" placeholder="Ex: Pizzeria, Snack, Friterie..." />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Description
                                    </label>
                                    <textarea className="form-control" rows={3} placeholder="Description du type d'établissement"></textarea>
                                </div>
                                <div className="d-flex align-items-center justify-content-between gap-2 pt-1">
                                    <button
                                        type="button"
                                        className="btn btn-light w-100"
                                        data-bs-dismiss="modal"
                                    >
                                        Annuler
                                    </button>
                                    <button type="submit" className="btn btn-primary w-100">
                                        Enregistrer
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Add Establishment Type End */}
            {/* Edit Establishment Type */}
            <div className="modal fade" id="edit_establishment_type">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0 p-4 pb-3">
                            <h4 className="modal-title">Modifier le Type d'Établissement</h4>
                            <button
                                type="button"
                                className="btn-close btn-close-modal"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="icon-x" />
                            </button>
                        </div>
                        <form>
                            <div className="modal-body p-4 pt-1">
                                <div className="mb-3 d-flex align-items-center flex-wrap gap-3">
                                    <div className="avatar avatar-3xl avatar-rounded border">
                                        <ImageWithBasePath
                                            src="assets/img/establishment-type/establishment-type-01.png"
                                            alt="type"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">
                                            Image du Type d'Établissement<span className="text-danger"> *</span>
                                        </label>
                                        <p className="fs-13 mb-3">L'image doit faire moins de 5 MB</p>
                                        <div className="d-flex align-items-center">
                                            <div className="btn btn-icon btn-sm btn-white rounded-circle position-relative me-2">
                                                <input
                                                    type="file"
                                                    className="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0"
                                                />
                                                <i className="icon-pencil-line" />
                                            </div>
                                            <Link
                                                to="#"
                                                className="btn btn-icon btn-sm btn-white rounded-circle text-danger"
                                            >
                                                <i className="icon-trash-2" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Nom du Type d'Établissement<span className="text-danger"> *</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Pizzeria"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Description
                                    </label>
                                    <textarea className="form-control" rows={3} defaultValue="Restaurant spécialisé dans la préparation de pizzas"></textarea>
                                </div>
                                <div className="d-flex align-items-center justify-content-between gap-2 pt-1">
                                    <button
                                        type="button"
                                        className="btn btn-light w-100"
                                        data-bs-dismiss="modal"
                                    >
                                        Annuler
                                    </button>
                                    <button type="submit" className="btn btn-primary w-100">
                                        Enregistrer
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Edit Establishment Type End */}

            {/* Start Filter */}
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="filter-offcanvas">
                <div className="offcanvas-header pb-0">
                    <div className="border-bottom d-flex align-items-center justify-content-between w-100 pb-3">
                        <h4 className="offcanvas-title mb-0">Filtrer</h4>
                        <button
                            type="button"
                            className="btn-close btn-close-modal"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        >
                            <i className="icon-x" />
                        </button>
                    </div>
                </div>
                <div className="offcanvas-body d-flex flex-column pt-3">
                    <div>
                        <div className="mb-3">
                            <label className="form-label">
                                Statut<span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                                options={Status_Active}
                                className="select"
                                defaultValue={Status_Active[1]}
                            />
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-2 mt-auto">
                        <Link to="#" className="btn btn-light w-100">
                            Réinitialiser
                        </Link>
                        <Link to="#" className="btn btn-primary w-100">
                            Appliquer
                        </Link>
                    </div>
                </div>
            </div>
            {/* End Filter */}
        </>

    );
};

export default EstablishmentTypeModal;
