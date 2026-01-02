import { Link } from "react-router-dom"
import ImageWithBasePath from "../../../components-template/image-with-base-path/index"
import { Role, Status_Inactive } from "../../../core/json/selectOption"
import CommonSelect from "../../../components-template/common-select/commonSelect"

const UsersModal = () => {
  const handleRevertAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.currentTarget.checked;
    const pane = e.currentTarget.closest(".form-check");
    if (pane) {
      const inputs = pane.querySelectorAll<HTMLInputElement>(
        '.form-check-input [type="checkbox"]'
      );
      inputs.forEach((input) => (input.checked = checked));
    }
  };
    return (
        <>
  {/* User Permission */}
  <div className="modal fade" id="user_permission">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header border-0 p-4 pb-3">
          <h4 className="modal-title">Permissions</h4>
          <button
            type="button"
            className="btn-close btn-close-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="icon-x" />
          </button>
        </div>
        <form action="users.html">
          <div className="modal-body p-4 pt-1">
            <div className="d-flex justify-content-end mb-3">
              <div className="form-check form-check-md">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="select-all"
                  onChange={handleRevertAll}
                />
                <label htmlFor="select-all">Tout Annuler</label>
              </div>
            </div>
            <div className="table-responsive mb-3">
              <table className="table m-0 table-nowrap bg-white border ">
                <thead>
                  <tr>
                    <th>Module</th>
                    <th>Voir</th>
                    <th>Ajouter</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                    <th>Exporter</th>
                    <th>Approuver/Annuler</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-dark fw-medium">Dashboard</td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-dark fw-medium">POS</td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-dark fw-medium">Hold/Resume Sale</td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-dark fw-medium">Refund / Return</td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-dark fw-medium">Products</td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-dark fw-medium">Categories</td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-dark fw-medium">Customers</td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-dark fw-medium">Reports</td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-dark fw-medium">Settings</td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md ps-0">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2 pt-1">
              <button
                type="button"
                className="btn btn-light w-100"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary w-100">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

            {/* Add users */}
            <div className="modal fade" id="add_users">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0 p-4 pb-3">
                            <h4 className="modal-title">Ajouter Utilisateur</h4>
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
                                <div className="d-flex align-items-center flex-wrap mb-4">
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
                                <div className="row algin-items-center justify-content-center">
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                First Name<span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Last Name<span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Role<span className="text-danger"> *</span>
                                    </label>
                                   <CommonSelect
                                        options={Role}
                                        className="select"
                                        defaultValue={Role[0]}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Phone Number<span className="text-danger"> *</span>
                                    </label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Status<span className="text-danger"> *</span>
                                    </label>
                                    <CommonSelect
                                        options={Status_Inactive}
                                        className="select"
                                        defaultValue={Status_Inactive[0]}
                                    />
                                </div>
                                <div className="d-flex align-items-center justify-content-between gap-2 pt-1">
                                    <button
                                        type="button"
                                        className="btn btn-light w-100"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-primary w-100">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Add users End */}
            {/* Edit users */}
            <div className="modal fade" id="edit_users">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0 p-4 pb-3">
                            <h4 className="modal-title">Modifier Utilisateur</h4>
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
                                <div className="d-flex align-items-center flex-wrap mb-4">
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
                                <div className="row algin-items-center justify-content-center">
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                First Name<span className="text-danger"> *</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="Emily"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Last Name<span className="text-danger"> *</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="Johnson"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Role<span className="text-danger"> *</span>
                                    </label>
                                    <CommonSelect
                                        options={Role}
                                        className="select"
                                        defaultValue={Role[1]}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Phone Number<span className="text-danger"> *</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="+1 34567 89012"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Status<span className="text-danger"> *</span>
                                    </label>
                                    <CommonSelect
                                        options={Status_Inactive}
                                        className="select"
                                        defaultValue={Status_Inactive[1]}
                                    />
                                </div>
                                <div className="d-flex align-items-center justify-content-end gap-2 pt-1">
                                    <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Edit users End */}
            {/* Start Modal  */}
            <div className="modal fade" id="delete_modal">
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
                            <h4 className="mb-1">Delete Confirmation</h4>
                            <p className="mb-4">Are you sure you want to delete?</p>
                            <div className="d-flex justify-content-center gap-2">
                                <Link to="#" className="btn btn-light w-100" data-bs-dismiss="modal">
                                    Close
                                </Link>
                                <Link to="#" className="btn btn-danger w-100">
                                    Delete
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Modal  */}
            {/* Start Filter */}
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="filter-offcanvas">
                <div className="offcanvas-header pb-0">
                    <div className="border-bottom d-flex align-items-center justify-content-between w-100 pb-3">
                        <h4 className="offcanvas-title mb-0">Filter</h4>
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
                                Name<span className="text-danger"> *</span>
                            </label>
                            <div className="dropdown">
                                <Link
                                    to="#"
                                    className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    Select
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end p-3 w-100">
                                    <h6 className="fs-14 fw-semibold mb-3">Name</h6>
                                    <div className="input-icon-end input-icon position-relative mb-3">
                                        <span className="input-icon-addon">
                                            <i className="icon-search text-dark" />
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control form-control-md"
                                            placeholder="Search"
                                        />
                                    </div>
                                    <div className="vstack gap-2">
                                        <div>
                                            <label className="d-flex align-items-center">
                                                <input
                                                    className="form-check-input m-0 me-2"
                                                    type="checkbox"
                                                />
                                                John Smith
                                            </label>
                                        </div>
                                        <div>
                                            <label className="d-flex align-items-center">
                                                <input
                                                    className="form-check-input m-0 me-2"
                                                    type="checkbox"
                                                />
                                                Emily Johnson
                                            </label>
                                        </div>
                                        <div>
                                            <label className="d-flex align-items-center">
                                                <input
                                                    className="form-check-input m-0 me-2"
                                                    type="checkbox"
                                                />
                                                David Williams
                                            </label>
                                        </div>
                                        <div>
                                            <label className="d-flex align-items-center">
                                                <input
                                                    className="form-check-input m-0 me-2"
                                                    type="checkbox"
                                                />
                                                Ashley Brown
                                            </label>
                                        </div>
                                        <div>
                                            <label className="d-flex align-items-center">
                                                <input
                                                    className="form-check-input m-0 me-2"
                                                    type="checkbox"
                                                />
                                                Michael Davis
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Role<span className="text-danger"> *</span>
                            </label>
                            <div className="dropdown">
                                <Link
                                    to="#"
                                    className="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    Select
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end p-3 w-100">
                                    <h6 className="fs-14 fw-semibold mb-3">Role</h6>
                                    <div className="input-icon-end input-icon position-relative mb-3">
                                        <span className="input-icon-addon">
                                            <i className="icon-search text-dark" />
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control form-control-md"
                                            placeholder="Search"
                                        />
                                    </div>
                                    <div className="vstack gap-2">
                                        <div>
                                            <label className="d-flex align-items-center">
                                                <input
                                                    className="form-check-input m-0 me-2"
                                                    type="checkbox"
                                                />
                                                Admin / Owner
                                            </label>
                                        </div>
                                        <div>
                                            <label className="d-flex align-items-center">
                                                <input
                                                    className="form-check-input m-0 me-2"
                                                    type="checkbox"
                                                />
                                                Supervisor
                                            </label>
                                        </div>
                                        <div>
                                            <label className="d-flex align-items-center">
                                                <input
                                                    className="form-check-input m-0 me-2"
                                                    type="checkbox"
                                                />
                                                Cashier
                                            </label>
                                        </div>
                                        <div>
                                            <label className="d-flex align-items-center">
                                                <input
                                                    className="form-check-input m-0 me-2"
                                                    type="checkbox"
                                                />
                                                Chef
                                            </label>
                                        </div>
                                        <div>
                                            <label className="d-flex align-items-center">
                                                <input
                                                    className="form-check-input m-0 me-2"
                                                    type="checkbox"
                                                />
                                                Waiter
                                            </label>
                                        </div>
                                        <div>
                                            <label className="d-flex align-items-center">
                                                <input
                                                    className="form-check-input m-0 me-2"
                                                    type="checkbox"
                                                />
                                                Delivery
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-0">
                            <label className="form-label">
                                Status<span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                                        options={Status_Inactive}
                                        className="select"
                                        defaultValue={Status_Inactive[0]}
                                    />
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-2 mt-auto offcanvas-footer border-0">
                        <Link to="#" className="btn btn-light w-100">
                            Reset
                        </Link>
                        <Link to="#" className="btn btn-primary w-100">
                            Apply
                        </Link>
                    </div>
                </div>
            </div>
            {/* End Filter */}
        </>

    )
}

export default UsersModal