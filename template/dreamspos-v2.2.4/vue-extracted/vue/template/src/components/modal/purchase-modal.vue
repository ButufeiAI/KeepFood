<template>
    <!-- Invoices -->
    <div class="modal fade" id="view_invoice">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-body p-5">
                    <div class="row justify-content-between align-items-center mb-3">
                        <div class="col-md-6">
                            <div class="mb-3 invoice-logo d-flex">
                                <img src="@/assets/img/logo.svg" width="130" class="img-fluid dark-logo" alt="logo">
                                <img src="@/assets/img/logo-white.svg" width="130" class="img-fluid white-logo"
                                    alt="logo">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class=" text-end mb-3">
                                <h5 class="text-dark mb-1">Invoice</h5>
                                <p class="mb-1 fw-normal"><i class="ti ti-file-invoice me-1"></i>INV0287</p>
                                <p class="mb-1 fw-normal"><i class="ti ti-calendar me-1"></i>Issue date : 12 Sep 2024
                                </p>
                                <p class="fw-normal"><i class="ti ti-calendar me-1"></i>Due date : 12 Oct 2024 </p>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3 d-flex justify-content-between">
                        <div class="col-md-7">
                            <p class="text-dark mb-2 fw-medium fs-16">Invoice From :</p>
                            <div>
                                <p class="mb-1">SmartHR</p>
                                <p class="mb-1">367 Hillcrest Lane, Irvine, California,
                                    United States</p>
                                <p class="mb-1">smarthr@example.com</p>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <p class="text-dark mb-2 fw-medium fs-16 text-end">Invoice To :</p>
                            <div>
                                <p class="mb-1 text-end">BrightWave Innovations</p>
                                <p class="mb-1 text-end">367 Hillcrest Lane, Irvine, California,
                                    United States</p>
                                <p class="mb-1 text-end">michael@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <div class="table-responsive mb-3">
                            <table class="table">
                                <thead class="thead-light">
                                    <tr>
                                        <th>Plan</th>
                                        <th class="text-end">Billing Cycle</th>
                                        <th class="text-end">Created Date</th>
                                        <th class="text-end">Expiring On</th>
                                        <th class="text-end">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Advanced (Monthly)</td>
                                        <td class="text-end">30 Days</td>
                                        <td class="text-end">12 Sep 2024</td>
                                        <td class="text-end">12 Oct 2024</td>
                                        <td class="text-end">$200</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row mb-3 d-flex justify-content-between">
                        <div class="col-md-4">
                            <div>
                                <h6 class="mb-4">Payment info:</h6>
                                <p class="mb-0">Credit Card - 123***********789</p>
                                <div class="d-flex justify-content-between align-items-center mb-2 pe-3">
                                    <p class="mb-0">Amount</p>
                                    <p class="text-dark fw-medium mb-2">$200.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="d-flex justify-content-between align-items-center pe-3">
                                <p class="text-dark fw-medium mb-0">Sub Total</p>
                                <p class="mb-2">$200.00</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center pe-3">
                                <p class="text-dark fw-medium mb-0">Tax </p>
                                <p class="mb-2">$0.00</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center pe-3">
                                <p class="text-dark fw-medium mb-0">Total</p>
                                <p class="text-dark fw-medium mb-2">$200.00</p>
                            </div>
                        </div>
                    </div>
                    <div class="card border mb-0">
                        <div class="card-body">
                            <p class="text-dark fw-medium mb-2">Terms & Conditions:</p>
                            <p class="fs-12 fw-normal d-flex align-items-baseline mb-2"><i
                                    class="ti ti-point-filled text-primary me-1"></i>All payments must be made according
                                to the agreed schedule. Late payments may incur additional fees.</p>
                            <p class="fs-12 fw-normal d-flex align-items-baseline"><i
                                    class="ti ti-point-filled text-primary me-1"></i>We are not liable for any indirect,
                                incidental, or consequential damages, including loss of profits, revenue, or data.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Invoices -->

    <!-- Delete Modal -->
    <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
            <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Purchase</h4>
            <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete purchase?</p>
            <div class="modal-footer-btn mt-3 d-flex justify-content-center">
              <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Yes Delete</button>
            </div>						
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- /Delete Modal -->
</template>