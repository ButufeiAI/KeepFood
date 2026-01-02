import { Link } from "react-router-dom";
import CommonSelect from "../../../components-template/common-select/commonSelect";
import { Category_Food, Tax } from "../../../core/json/selectOption";
import DynamicRowGroup from "./rowGroup";
import ImageWithBasePath from "../../../components-template/image-with-base-path/index";


const ItemsModal = () => {
    return (
        <>
            {/* Items Details */}
            <div className="modal fade" id="items_details">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header p-4 pb-0 border-0 mb-3">
                            <div className="border-bottom d-flex align-items-center justify-content-between flex-fill  pb-3 ">
                                <h4 className="modal-title">Détails de l'Article</h4>
                                <button
                                    type="button"
                                    className="btn-close btn-close-modal"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <i className="icon-x" />
                                </button>
                            </div>
                        </div>
                        <form>
                            <div className="modal-body p-4 pt-1">
                                <div className="row row-gap-3">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="bg-light p-3 rounded">
                                            <ImageWithBasePath
                                                src="assets/img/items/food-17.jpg"
                                                alt="item"
                                                className="img-fluid w-100"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="mb-3">
                                            <h5>Chicken Taco</h5>
                                            <p>
                                                Tender grilled chicken wrapped in soft tortillas, topped
                                                with fresh lettuce, salsa, and creamy sauce.
                                            </p>
                                        </div>
                                        <div className="mb-3 pb-3 border-bottom size-tabs">
                                            <h6>Tailles</h6>
                                            <div className="d-flex gap-3">
                                                <div className="size-tab">
                                                    <h6 className="fs-13 mb-0 fw-medium">Petit</h6>
                                                </div>
                                                <div className="size-tab">
                                                    <h6 className="fs-13 mb-0 fw-medium">Moyen</h6>
                                                </div>
                                                <div className="size-tab">
                                                    <h6 className="fs-13 mb-0 fw-medium">Régulier</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className="mb-3">Suppléments &amp; Améliorations</h6>
                                            <div className="row row-gap-md-4 row-gap-sm-3">
                                                <div className="col-lg-6">
                                                    <div className="items-card">
                                                        <div className="d-flex align-items-center">
                                                            <span className="avatar avatar-lg border rounded-circle me-1">
                                                                <ImageWithBasePath
                                                                    src="assets/img/items/food-17.jpg"
                                                                    alt="item"
                                                                    className="img-fluid rounded-circle"
                                                                />
                                                            </span>
                                                            <h6 className="fs-12 fw-medium mb-0">
                                                                Extra Chicken
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="items-card">
                                                        <div className="d-flex align-items-center">
                                                            <span className="avatar avatar-lg border rounded-circle me-1">
                                                                <ImageWithBasePath
                                                                    src="assets/img/items/food-18.jpg"
                                                                    alt="item"
                                                                    className="img-fluid rounded-circle"
                                                                />
                                                            </span>
                                                            <h6 className="fs-12 fw-medium mb-0 text-nowrap">
                                                                Premium Tortilla
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="items-card">
                                                        <div className="d-flex align-items-center">
                                                            <span className="avatar avatar-lg border rounded-circle me-1">
                                                                <ImageWithBasePath
                                                                    src="assets/img/items/food-19.jpg"
                                                                    alt="item"
                                                                    className="img-fluid rounded-circle"
                                                                />
                                                            </span>
                                                            <h6 className="fs-12 fw-medium mb-0 text-nowrap">
                                                                Cheese Upgrade
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Items Details End */}
            {/* Add Item */}
            <div className="modal fade" id="add_item">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header border-0 p-4">
                            <div className="d-flex align-items-center justify-content-between flex-fill pb-3 border-bottom">
                                <h4 className="modal-title">Ajouter un Article</h4>
                                <button
                                    type="button"
                                    className="btn-close btn-close-modal"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <i className="icon-x" />
                                </button>
                            </div>
                        </div>
                        <form>
                            <div className="modal-body p-4 pt-1">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="d-flex align-items-center flex-wrap user-avatar">
                                            <div className="d-flex flex-column algin-items-center justify-content-center">
                                                <div className="avatar avatar-3xl border bg-light mb-3">
                                                    <i className="icon-images fs-28 text-dark" />
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <div className="btn btn-icon btn-sm btn-white rounded-circle position-relative me-2">
                                                        <input
                                                            type="file"
                                                            className="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0"
                                                        />
                                                        <i className="icon-upload" />
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
                                    </div>
                                    <div className="col-lg-8 flex-fill">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Nom de l'Article<span className="text-danger"> *</span>
                                                    </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Description<span className="text-danger"> *</span>
                                                    </label>
                                                    <textarea
                                                        rows={4}
                                                        className="form-control mb-2"
                                                        defaultValue={""}
                                                    />
                                                    <span>Ajouter au minimum 200 caractères</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Prix<span className="text-danger"> *</span>
                                                    </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Prix Net<span className="text-danger"> *</span>
                                                    </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Catégorie<span className="text-danger"> *</span>
                                                    </label>
                                                    <CommonSelect
                                                        options={Category_Food}
                                                        className="select"
                                                        defaultValue={Category_Food[0]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Taxe<span className="text-danger"> *</span>
                                                    </label>
                                                    <CommonSelect
                                                        options={Tax}
                                                        className="select"
                                                        defaultValue={Tax[0]}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="accordion-card-one accordion mb-3"
                                    id="accordionExample"
                                >
                                    <div className="accordion-item pb-3">
                                        <div className="accordion-header" id="headingOne">
                                            <div
                                                className="accordion-button p-3 pb-0"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-controls="collapseOne"
                                            >
                                                <div className="addproduct-icon d-flex align-items-center justify-content-between w-100">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="mb-0">
                                                            <span>Variations</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="collapseOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body border-0 pb-0">
                                                <DynamicRowGroup groupId="group1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="accordion-card-one accordion mb-3"
                                    id="accordionExample2"
                                >
                                    <div className="accordion-item pb-3">
                                        <div className="accordion-header" id="heading2">
                                            <div
                                                className="accordion-button p-3 pb-0"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse2"
                                                aria-controls="collapse2"
                                            >
                                                <div className="addproduct-icon d-flex align-items-center justify-content-between w-100">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="mb-0">
                                                            <span>Suppléments</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="collapse2"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading2"
                                            data-bs-parent="#accordionExample2"
                                        >
                                            <div className="accordion-body border-0 pb-0">
                                                <DynamicRowGroup groupId="group2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-end gap-2">
                                    <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                    >
                                        Annuler
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Enregistrer l'Article
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Add Item End */}
            {/* Edit Item */}
            <div className="modal fade" id="edit_item">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header border-0 p-4">
                            <div className="d-flex align-items-center justify-content-between flex-fill pb-3 border-bottom">
                                <h4 className="modal-title">Modifier l'Article</h4>
                                <button
                                    type="button"
                                    className="btn-close btn-close-modal"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <i className="icon-x" />
                                </button>
                            </div>
                        </div>
                        <form>
                            <div className="modal-body p-4 pt-1">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="d-flex align-items-center flex-wrap user-avatar">
                                            <div className="d-flex flex-column algin-items-center justify-content-center">
                                                <div className="avatar avatar-3xl border bg-light mb-3">
                                                    <ImageWithBasePath
                                                        src="assets/img/items/food-10.jpg"
                                                        alt="item"
                                                        className="img-fluid rounded"
                                                    />
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
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
                                    </div>
                                    <div className="col-lg-8 flex-fill">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Nom de l'Article<span className="text-danger"> *</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="Pasta"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Description<span className="text-danger"> *</span>
                                                    </label>
                                                    <textarea
                                                        rows={4}
                                                        className="form-control mb-2"
                                                        defaultValue={
                                                            "Pasta is a traditional Italian dish made from wheat flour, water, or eggs, shaped into a variety of forms.\n                                                "
                                                        }
                                                    />
                                                    <span>Ajouter au minimum 200 caractères</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Prix<span className="text-danger"> *</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="$96"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Prix Net<span className="text-danger"> *</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="$96"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Catégorie<span className="text-danger"> *</span>
                                                    </label>
                                                    <CommonSelect
                                                        options={Category_Food}
                                                        className="select"
                                                        defaultValue={Category_Food[1]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Taxe<span className="text-danger"> *</span>
                                                    </label>
                                                    <CommonSelect
                                                        options={Tax}
                                                        className="select"
                                                        defaultValue={Tax[1]}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="accordion-card-one accordion mb-3"
                                    id="accordionExample3"
                                >
                                    <div className="accordion-item pb-3">
                                        <div className="accordion-header" id="heading3">
                                            <div
                                                className="accordion-button p-3 pb-0"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse3"
                                                aria-controls="collapse3"
                                            >
                                                <div className="addproduct-icon d-flex align-items-center justify-content-between w-100">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="mb-0">
                                                            <span>Variations</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="collapse3"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="heading3"
                                            data-bs-parent="#accordionExample3"
                                        >
                                            <div className="accordion-body border-0 pb-0">
                                                <DynamicRowGroup groupId="group3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="accordion-card-one accordion mb-3"
                                    id="accordionExample4"
                                >
                                    <div className="accordion-item pb-3">
                                        <div className="accordion-header" id="heading4">
                                            <div
                                                className="accordion-button p-3 pb-0"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse4"
                                                aria-controls="collapse4"
                                            >
                                                <div className="addproduct-icon d-flex align-items-center justify-content-between w-100">
                                                    <div className="d-flex align-items-center">
                                                        <h5 className="mb-0">
                                                            <span>Suppléments</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="collapse4"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="heading4"
                                            data-bs-parent="#accordionExample4"
                                        >
                                            <div className="accordion-body border-0 pb-0">
                                                <DynamicRowGroup groupId="group4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-end gap-2">
                                    <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                    >
                                        Annuler
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Enregistrer l'Article
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Edit Item end */}
            {/* Start Modal  */}
            <div className="modal fade" id="delete_item">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content">
                        <div className="modal-body text-center p-4">
                            <div className="mb-4">
                                <span className="avatar avatar-xxl rounded-circle bg-danger-subtle">
                                    <ImageWithBasePath
                                        src="assets/img/icons/trash-icon.svg"
                                        alt="trash"
                                        className="img-fluid w-auto h-auto"
                                    />
                                </span>
                            </div>
                            <h4 className="mb-1">Confirmation de suppression</h4>
                            <p className="mb-4">Êtes-vous sûr de vouloir supprimer ?</p>
                            <div className="d-flex justify-content-center gap-2">
                                <Link to="#" className="btn btn-light w-100" data-bs-dismiss="modal">
                                    Fermer
                                </Link>
                                <Link to="#" className="btn btn-danger w-100">
                                    Supprimer
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Modal  */}
            {/* Start Modal  */}
            <div className="modal fade" id="hide_item">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content">
                        <div className="modal-body text-center p-4">
                            <div className="mb-4">
                                <span className="avatar avatar-xxl rounded-circle bg-info-subtle">
                                    <ImageWithBasePath
                                        src="assets/img/icons/hide.svg"
                                        alt="trash"
                                        className="img-fluid w-auto h-auto"
                                    />
                                </span>
                            </div>
                            <h4 className="mb-1">Confirmation de masquage</h4>
                            <p className="mb-4">Êtes-vous sûr de vouloir masquer cet article ?</p>
                            <div className="d-flex justify-content-center gap-2">
                                <Link to="#" className="btn btn-light w-100" data-bs-dismiss="modal">
                                    Fermer
                                </Link>
                                <Link to="#" className="btn btn-info w-100">
                                    Masquer
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Modal  */}
        </>

    );
};

export default ItemsModal;
