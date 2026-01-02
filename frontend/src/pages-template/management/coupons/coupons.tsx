import { Link } from "react-router-dom";
import DataTable from "../../components-template/data-table";
import { useCallback, useMemo, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";
import SearchInput from "../../components-template/data-table/dataTableSearch";
import ImageWithBasePath from "../../../components-template/image-with-base-path/index";
import type { TableData } from "../../../core/data/interface";
import CouponsModal from "./couponsModal";
import { CouponsData } from "../../../core/json/couponsData";

type DataRow = TableData & {
  key: string;
  id?: string;
  Coupon_Code: string;
  Valid_Category: string;
  Discount_Type: string;
  Discount_Amount: string;
  Duration: string;
  Status: string;
  Actions?: string;
};

const Coupons = () => {
  const [rows, setRows] = useState<DataRow[]>(
    () =>
      (CouponsData as TableData[]).map((row, idx) => ({
        ...row,
        key: `${(row as { key?: string }).key ||
          (row as { id?: string }).id ||
          row.Invoice_ID ||
          idx
          }`,
      })) as DataRow[]
  );
  const [pendingDelete, setPendingDelete] = useState<DataRow | null>(null);
  const baseColumns = useMemo(
    () => [
      {
        title: "Code Coupon",
        dataIndex: "Coupon_Code",
        sorter: (a: DataRow, b: DataRow) =>
          a.Coupon_Code.length - b.Coupon_Code.length,
      },
      {
        title: "Catégorie Valide",
        dataIndex: "Valid_Category",
        sorter: (a: DataRow, b: DataRow) =>
          a.Valid_Category.length - b.Valid_Category.length,
      },
      {
        title: "Type de Réduction",
        dataIndex: "Discount_Type",
        sorter: (a: DataRow, b: DataRow) =>
          a.Discount_Type.length - b.Discount_Type.length,
      },
      {
        title: "Montant de Réduction",
        dataIndex: "Discount_Amount",
        sorter: (a: DataRow, b: DataRow) =>
          a.Discount_Amount.length - b.Discount_Amount.length,
      },
      {
        title: "Durée",
        dataIndex: "Duration",
        sorter: (a: DataRow, b: DataRow) =>
          a.Duration.length - b.Duration.length,
      },
      {
        title: "Statut",
        dataIndex: "Status",
        render: (text: string) => (
          <span
            className={`badge ${text === "Active" ? "badge-soft-success" : "badge-soft-danger"
              } `}
          >
            {text === "Active" ? "Actif" : "Expiré"}
          </span>
        ),
      },
      {
        title: "Actions",
        dataIndex: "Actions",
        render: (_: string, record: DataRow) => (
          <>
            <Link
              to="#"
              className="btn btn-icon btn-sm btn-white rounded-circle me-2"
              data-bs-toggle="modal"
              data-bs-target="#show_coupon"
            >
              <i className="icon-eye" />
            </Link>
            <Link
              to="#"
              className="btn btn-icon btn-sm btn-white rounded-circle me-2"
              data-bs-toggle="modal"
              data-bs-target="#edit_coupon"
            >
              <i className="icon-pencil-line" />
            </Link>
            <Link
              to="#"
              className="btn btn-icon btn-sm btn-white rounded-circle"
              data-bs-toggle="modal"
              data-bs-target="#delete_modal"
              onClick={() =>
                setPendingDelete({
                  ...record,
                  key: record.key || record.Coupon_Code || record.id || "",
                })
              }
            >
              <i className="icon-trash-2" />
            </Link>
          </>
        ),
      },
    ],
    []
  );
  const [columnOrder, setColumnOrder] = useState<string[]>(() =>
    baseColumns.map((c) => String(c.dataIndex || c.title))
  );
  const [visibleColumnKeys, setVisibleColumnKeys] =
    useState<string[]>(columnOrder);

  const handleConfirmDelete = useCallback(() => {
    if (!pendingDelete?.key) return;
    setRows((prev) => prev.filter((row) => row.key !== pendingDelete.key));
    setPendingDelete(null);
  }, [pendingDelete]);
  const handleToggleColumn = useCallback((key: string) => {
    setVisibleColumnKeys((prev) =>
      prev.includes(key) ? prev.filter((c) => c !== key) : [...prev, key]
    );
  }, []);

  const handleColumnDragEnd = useCallback((result: DropResult) => {
    if (!result.destination) return;

    setColumnOrder((prev) => {
      const next = [...prev];
      const [moved] = next.splice(result.source.index, 1);
      next.splice(result.destination!.index, 0, moved);
      return next;
    });
  }, []);

  const orderedColumns = useMemo(() => {
    const columnMap = new Map(
      baseColumns.map((col) => [String(col.dataIndex || col.title), col])
    );
    return columnOrder
      .map((key) => columnMap.get(key))
      .filter(Boolean) as typeof baseColumns;
  }, [baseColumns, columnOrder]);

  const columns = orderedColumns;

  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = useCallback((value: string) => {
    setSearchText(value);
  }, []);
  const mappedColumns = useMemo(
    () =>
      columns.map((col: any, idx: number) => ({
        ...col,
        ID: idx.toString(),
        key: (col as any).dataIndex || idx.toString(),
      })),
    [columns]
  );
  const visibleColumns = useMemo(
    () =>
      mappedColumns.filter((col) =>
        visibleColumnKeys.includes(String(col.dataIndex || col.key))
      ),
    [mappedColumns, visibleColumnKeys]
  );
  return (
    <>
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-3 mb-4">
            <div className="flex-grow-1">
              <h3 className="mb-0">
                Coupons{" "}
                <Link
                  to="#"
                  className="btn btn-icon btn-sm btn-white rounded-circle ms-2"
                >
                  <i className="icon-refresh-ccw" />
                </Link>
              </h3>
            </div>
            <div className="gap-2 d-flex align-items-center flex-wrap">
              <div className="dropdown">
                <Link
                  to="#"
                  className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  <i className="icon-upload me-2" />
                  Exporter
                </Link>
                <ul className="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <Link to="#" className="dropdown-item rounded">
                      Exporter en PDF
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded">
                      Exporter en Excel
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                to="#"
                className="btn btn-primary d-inline-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#add_coupon"
              >
                <i className="icon-circle-plus me-1"></i>Ajouter
              </Link>
            </div>
          </div>
          {/* End Page Header */}
          {/* card start */}
          <div className="card mb-0">
            <div className="card-body">
              <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-4">
                <div className="search-input">
                  <SearchInput value={searchText} onChange={handleSearch} />
                </div>
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  {/* filter */}
                  <Link
                    to="#"
                    className="btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#filter-offcanvas"
                    aria-controls="filter-offcanvas"
                  >
                    <i className="icon-funnel me-2" />
                    Filtrer
                  </Link>
                  {/* column */}
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-icon btn-white"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                    >
                      <i className="icon-columns-3" />
                    </Link>
                    <div className="dropdown-menu dropdown-menu-md dropdown-menu-end p-3">
                      <h5 className="mb-3">Colonnes</h5>
                      <DragDropContext onDragEnd={handleColumnDragEnd}>
                        <Droppable droppableId="column-list">
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                            >
                              {mappedColumns.map((col, index) => {
                                const key = String(col.dataIndex || col.key);
                                const checked = visibleColumnKeys.includes(key);
                                return (
                                  <Draggable
                                    key={key}
                                    draggableId={key}
                                    index={index}
                                  >
                                    {(dragProvided) => (
                                      <div
                                        className="mb-3"
                                        ref={dragProvided.innerRef}
                                        {...dragProvided.draggableProps}
                                      >
                                        <label className="d-flex align-items-center">
                                          <span
                                            className="me-2 d-flex align-items-center text-muted"
                                            {...dragProvided.dragHandleProps}
                                            aria-label={`Drag to reorder ${col.title}`}
                                          >
                                            <i className="icon-grip-vertical" />
                                          </span>
                                          <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                            checked={checked}
                                            onChange={() =>
                                              handleToggleColumn(key)
                                            }
                                          />
                                          {col.title}
                                        </label>
                                      </div>
                                    )}
                                  </Draggable>
                                );
                              })}
                              {provided.placeholder}
                            </div>
                          )}
                        </Droppable>
                      </DragDropContext>
                    </div>
                  </div>
                  {/* sort by */}
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Trier par : Plus récent
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Plus récent
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Plus ancien
                        </Link>
                      </li>
                      <li>
                          <Link to="#" className="dropdown-item">
                          Croissant
                          </Link>
                      </li>
                      <li>
                          <Link to="#" className="dropdown-item">
                          Décroissant
                          </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* table start */}
              <div className="table-responsive table-nowrap">
                <DataTable
                  columns={visibleColumns}
                  dataSource={rows}
                  Selection={false}
                  searchText={searchText}
                />
              </div>
              {/* table end */}
            </div>
          </div>
          {/* card start */}
        </div>
        {/* End Content */}
      </div>

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
              <h4 className="mb-1">Confirmation de suppression</h4>
              <p className="mb-4">
                {pendingDelete ? (
                  <>
                    Êtes-vous sûr de vouloir supprimer <br />{" "}
                    {pendingDelete.Coupon_Code}?
                  </>
                ) : (
                  "Sélectionnez une ligne à supprimer."
                )}
              </p>
              <div className="d-flex justify-content-center gap-2">
                <Link
                  to="#"
                  className="btn btn-light w-100"
                  data-bs-dismiss="modal"
                >
                  Fermer
                </Link>
                <button
                  type="button"
                  className="btn btn-danger w-100"
                  data-bs-dismiss="modal"
                  onClick={handleConfirmDelete}
                  disabled={!pendingDelete}
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Modal  */}
      <CouponsModal />
    </>
  );
};

export default Coupons;
