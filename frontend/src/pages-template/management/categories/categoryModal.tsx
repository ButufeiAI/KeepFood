import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ImageWithBasePath from "../../../components-template/image-with-base-path/index";
import CommonSelect from "../../../components-template/common-select/commonSelect";
import { Status_Active } from "../../../core/json/selectOption";
import { establishmentTypesService, EstablishmentType } from "../../../services/establishment-types.service";

const CategoryModal = () => {
    const [establishmentTypes, setEstablishmentTypes] = useState<EstablishmentType[]>([]);
    const [establishmentTypeOptions, setEstablishmentTypeOptions] = useState<{ value: string; label: string }[]>([]);

    useEffect(() => {
        const loadEstablishmentTypes = async () => {
            try {
                const types = await establishmentTypesService.getAll();
                setEstablishmentTypes(types);
                setEstablishmentTypeOptions([
                    { value: "Select", label: "Sélectionner" },
                    ...types
                        .filter(type => type.isActive && type.status === 'ACTIVE')
                        .map(type => ({
                            value: type.id,
                            label: type.name
                        }))
                ]);
            } catch (error) {
                console.error('Erreur lors du chargement des types d\'établissement:', error);
            }
        };
        loadEstablishmentTypes();
    }, []);
    return (
        <>
            {/* Add Category */}
            <div className="modal fade" id="add_category">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0 p-4 pb-3">
                            <h4 className="modal-title">Ajouter une Catégorie</h4>
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
                                            Image de la Catégorie<span className="text-danger"> *</span>
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
                                        Type d'Établissement<span className="text-danger"> *</span>
                                    </label>
                                    <CommonSelect
                                        options={establishmentTypeOptions}
                                        className="select"
                                        defaultValue={establishmentTypeOptions[0]}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Nom de la Catégorie<span className="text-danger"> *</span>
                                    </label>
                                    <input type="text" className="form-control" />
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
            {/* Add Category End */}
            {/* Edit Category */}
            <div className="modal fade" id="edit_category">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0 p-4 pb-3">
                            <h4 className="modal-title">Modifier la Catégorie</h4>
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
                                            src="assets/img/category/category-01.png"
                                            alt="category"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">
                                            Image de la Catégorie<span className="text-danger"> *</span>
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
                                        Type d'Établissement<span className="text-danger"> *</span>
                                    </label>
                                    <CommonSelect
                                        options={establishmentTypeOptions}
                                        className="select"
                                        defaultValue={establishmentTypeOptions[0]}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Nom de la Catégorie<span className="text-danger"> *</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Sea Food"
                                    />
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
            {/* Edit Category End */}

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
                                Catégorie<span className="text-danger"> *</span>
                            </label>
                            <div className="dropdown">
                                <Link
                                    to="#"
                                    className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    Sélectionner
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end p-3 w-100">
                                    <h6 className="fs-14 fw-semibold mb-3">Catégorie</h6>
                                    <div className="input-icon-end input-icon position-relative mb-3">
                                        <span className="input-icon-addon">
                                            <i className="icon-search text-dark" />
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control form-control-md"
                                            placeholder="Rechercher"
                                        />
                                    </div>
                                    <div className="vstack gap-2">
                                        <div>
                                            <label className="d-flex align-items-center">
                                                <input
                                                    className="form-check-input m-0 me-2"
                                                    type="checkbox"
                                                />
                                                Sea Food
                                            </label>
                                        </div>
                                        <div>
                                            <label className="d-flex align-items-center">
                                                <input
                                                    className="form-check-input m-0 me-2"
                                                    type="checkbox"
                                                />
                                                Pizza
                                            </label>
                                        </div>
                                        <div>
                                            <label className="d-flex align-items-center">
                                                <input
                                                    className="form-check-input m-0 me-2"
                                                    type="checkbox"
                                                />
                                                Salads
                                            </label>
                                        </div>
                                        <div>
                                            <label className="d-flex align-items-center">
                                                <input
                                                    className="form-check-input m-0 me-2"
                                                    type="checkbox"
                                                />
                                                Tacos
                                            </label>
                                        </div>
                                        <div>
                                            <label className="d-flex align-items-center">
                                                <input
                                                    className="form-check-input m-0 me-2"
                                                    type="checkbox"
                                                />
                                                Burgers
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default CategoryModal;
