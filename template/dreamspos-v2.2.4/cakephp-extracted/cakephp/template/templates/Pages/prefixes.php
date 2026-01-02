    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="page-wrapper">

        <!-- Start Content -->
		<div class="content settings-content">
			<div class="page-header settings-pg-header">
				<div class="add-item d-flex">
					<div class="page-title">
						<h4>Settings</h4>
						<h6>Manage your settings on portal</h6>
					</div>
				</div>
				<ul class="table-top-head">
					<li>
						<a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i class="ti ti-refresh"></i></a>
					</li>
					<li>
						<a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header"><i class="ti ti-chevron-up"></i></a>
					</li>
				</ul>
			</div>
			<div class="row">
				<div class="col-xl-12">
						<div class="settings-wrapper d-flex">
						<div class="settings-sidebar" id="sidebar2">
							<div class="sidebar-inner slimscroll">
								<div id="sidebar-menu5" class="sidebar-menu">
									<h4 class="fw-bold fs-18 mb-2 pb-2">Settings</h4>
									<ul>
										<li class="submenu-open">
											<ul>
												<li class="submenu">
													<a href="javascript:void(0);">
														<i class="ti ti-settings fs-18"></i>
														<span class="fs-14 fw-medium ms-2">General Settings</span>
														<span class="menu-arrow"></span>
													</a>
													<ul>
														<li><a href="general_settings">Profile</a></li>
														<li><a href="security_settings">Security</a></li>
														<li><a href="notification">Notifications</a></li>
														<li><a href="connected_apps">Connected Apps</a></li>
													</ul>
												</li>
												<li class="submenu">
													<a href="javascript:void(0);" class="active subdrop">
														<i class="ti ti-world fs-18"></i>
														<span class="fs-14 fw-medium ms-2">Website Settings</span>
														<span class="menu-arrow"></span>
													</a>
													<ul>
														<li><a href="system_settings">System Settings</a></li>
														<li><a href="company_settings">Company Settings </a></li>
														<li><a href="localization_settings">Localization</a></li>
														<li><a href="prefixes" class="active">Prefixes</a></li>
														<li><a href="preference">Preference</a></li>
														<li><a href="appearance">Appearance</a></li>
														<li><a href="social_authentication">Social Authentication</a></li>
														<li><a href="language_settings">Language</a></li>
													</ul>
												</li>
												<li class="submenu">
													<a href="javascript:void(0);">
														<i class="ti ti-device-mobile fs-18"></i>
														<span class="fs-14 fw-medium ms-2">App Settings</span>
														<span class="menu-arrow"></span>
													</a>
													<ul>
														<li><a href="invoice_settings">Invoice Settings</a></li>
														<li><a href="invoice_templates">Invoice Templates</a></li>
														<li><a href="printer_settings">Printer </a></li>
														<li><a href="pos_settings">POS</a></li>
														<li><a href="signatures">Signatures</a></li>
														<li><a href="custom_fields">Custom Fields</a></li>
													</ul>
												</li>
												<li class="submenu">
													<a href="javascript:void(0);">
														<i class="ti ti-device-desktop fs-18"></i>
														<span class="fs-14 fw-medium ms-2">System Settings</span>
														<span class="menu-arrow"></span>
													</a>
													<ul>
														<li class="submenu submenu-two"><a href="javascript:void(0);">Email<span class="menu-arrow inside-submenu"></span></a>
															<ul>
																<li><a href="email_settings">Email Settings</a></li>
																<li><a href="email_templates">Email Templates</a></li>
															</ul>
														</li>
														<li class="submenu submenu-two"><a href="javascript:void(0);">SMS<span class="menu-arrow inside-submenu"></span></a>
															<ul>
																<li><a href="sms_settings">SMS Settings</a></li>
																<li><a href="sms_templates">SMS Templates</a></li>
															</ul>
														</li>
														<li><a href="sms_settings">SMS Gateways</a></li>
														<li><a href="otp_settings">OTP</a></li>
														<li><a href="gdpr_settings">GDPR Cookies</a></li>
													</ul>
												</li>
												<li class="submenu">
													<a href="javascript:void(0);">
														<i class="ti ti-settings-dollar fs-18"></i>
														<span class="fs-14 fw-medium ms-2">Financial Settings</span>
														<span class="menu-arrow"></span>
													</a>
													<ul>
														<li><a href="payment_gateway_settings">Payment Gateway</a></li>
														<li><a href="bank_settings_grid">Bank Accounts </a></li>
														<li><a href="tax_rates">Tax Rates</a></li>
														<li><a href="currency_settings">Currencies</a></li>
													</ul>
												</li>
												<li class="submenu">
													<a href="javascript:void(0);">
														<i class="ti ti-settings-2 fs-18"></i>
														<span class="fs-14 fw-medium ms-2">Other Settings</span>
														<span class="menu-arrow"></span>
													</a>
													<ul>
														<li><a href="storage_settings">Storage</a></li>
														<li><a href="ban_ip_address">Ban IP Address </a></li>
													</ul>
												</li>
											</ul>								
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="card flex-fill mb-0">
							<div class="card-header">
								<h4 class="fs-18 fw-bold">Prefixes</h4>
							</div>
							<div class="card-body">
								<form action="prefixes">
									<div class="row">
										<div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
											<div class="mb-3">
												<label class="form-label">Product (SKU)</label>
												<input type="text" class="form-control" value="SKU -">
											</div>
										</div>
										<div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
											<div class="mb-3">
												<label class="form-label">Supplier</label>
												<input type="text" class="form-control" value="SUP -">
											</div>
										</div>									
										<div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
											<div class="mb-3">
												<label class="form-label">Purchase</label>
												<input type="text" class="form-control" value="PU -">
											</div>
										</div>										
										<div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
											<div class="mb-3">
												<label class="form-label">Purchase Return</label>
												<input type="text" class="form-control" value="PR -">
											</div>
										</div>
										<div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
											<div class="mb-3">
												<label class="form-label">Sales</label>
												<input type="text" class="form-control" value="SA -">
											</div>
										</div>										
										<div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
											<div class="mb-3">
												<label class="form-label">Sales Return</label>
												<input type="text" class="form-control" value="SR -">
											</div>
										</div>	
										<div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
											<div class="mb-3">
												<label class="form-label">Customer</label>
												<input type="text" class="form-control" value="CT -">
											</div>
										</div>	
										<div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
											<div class="mb-3">
												<label class="form-label">Expense</label>
												<input type="text" class="form-control" value="EX -">
											</div>
										</div>	
										<div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
											<div class="mb-3">
												<label class="form-label">Stock Transfer</label>
												<input type="text" class="form-control" value="ST -">
											</div>
										</div>	
										<div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
											<div class="mb-3">
												<label class="form-label">Stock Adjustmentt</label>
												<input type="text" class="form-control" value="SA -">
											</div>
										</div>	
										<div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
											<div class="mb-3">
												<label class="form-label">Sales Order</label>
												<input type="text" class="form-control" value="SO -">
											</div>
										</div>	
										<div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
											<div class="mb-3">
												<label class="form-label">POS Invoice</label>
												<input type="text" class="form-control" value="PINV -">
											</div>
										</div>	
										<div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
											<div class="mb-3">
												<label class="form-label">Estimation</label>
												<input type="text" class="form-control" value="EST -">
											</div>
										</div>	
										<div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
											<div class="mb-3">
												<label class="form-label">Transaction</label>
												<input type="text" class="form-control" value="TRN -">
											</div>
										</div>	
										<div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
											<div class="mb-3">
												<label class="form-label">Employee</label>
												<input type="text" class="form-control" value="EMP -">
											</div>
										</div>	
									</div>
									<div class="text-end settings-bottom-btn mt-0">
										<button type="button" class="btn btn-secondary me-2">Cancel</button>
										<button type="submit" class="btn btn-primary">Save Changes</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        <!-- End Content -->
    
        <?= $this->element('footer') ?>

    </div>

    <!-- ========================
        End Page Content
    ========================= -->      