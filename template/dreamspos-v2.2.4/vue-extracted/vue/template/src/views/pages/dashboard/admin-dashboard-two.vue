<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="row">
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
          <div class="card dash-widget w-100">
            <div class="card-body d-flex align-items-center">
              <div class="dash-widgetimg">
                <span><img src="@/assets/img/icons/dash1.svg" alt="img" /></span>
              </div>
              <div class="dash-widgetcontent">
                <h5>$<span class="counters" data-count="307144.00">$307,144.00</span></h5>
                <p class="mb-0">Total Purchase Due</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
          <div class="card dash-widget dash1 w-100">
            <div class="card-body d-flex align-items-center">
              <div class="dash-widgetimg">
                <span><img src="@/assets/img/icons/dash2.svg" alt="img" /></span>
              </div>
              <div class="dash-widgetcontent">
                <h5>$<span class="counters" data-count="4385.00">$4,385.00</span></h5>
                <p class="mb-0">Total Sales Due</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
          <div class="card dash-widget dash2 w-100">
            <div class="card-body d-flex align-items-center">
              <div class="dash-widgetimg">
                <span><img src="@/assets/img/icons/dash3.svg" alt="img" /></span>
              </div>
              <div class="dash-widgetcontent">
                <h5>$<span class="counters" data-count="385656.50">$385,656.50</span></h5>
                <p class="mb-0">Total Sale Amount</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
          <div class="card dash-widget dash3 w-100">
            <div class="card-body d-flex align-items-center">
              <div class="dash-widgetimg">
                <span><img src="@/assets/img/icons/dash4.svg" alt="img" /></span>
              </div>
              <div class="dash-widgetcontent">
                <h5>$<span class="counters" data-count="40000.00">$400.00</span></h5>
                <p class="mb-0">Total Expense Amount</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
          <div class="dash-count bg-primary">
            <div class="dash-counts">
              <h4>100</h4>
              <p class="text-white mb-0">Customers</p>
            </div>
            <div class="dash-imgs">
              <vue-feather type="user"></vue-feather>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
          <div class="dash-count das1 bg-cyan-900">
            <div class="dash-counts">
              <h4>110</h4>
              <p class="text-white mb-0">Suppliers</p>
            </div>
            <div class="dash-imgs">
              <vue-feather type="user-check"></vue-feather>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
          <div class="dash-count das2 bg-dark">
            <div class="dash-counts">
              <h4>150</h4>
              <p class="text-white mb-0">Purchase Invoice</p>
            </div>
            <div class="dash-imgs">
              <img
                src="@/assets/img/icons/file-text-icon-01.svg"
                class="img-fluid"
                alt="icon"
              />
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
          <div class="dash-count das3 bg-success">
            <div class="dash-counts">
              <h4>170</h4>
              <p class="text-white mb-0">Sales Invoice</p>
            </div>
            <div class="dash-imgs">
              <vue-feather type="file"></vue-feather>
            </div>
          </div>
        </div>
      </div>
      <!-- Button trigger modal -->

      <div class="row">
        <div class="col-xl-7 col-sm-12 col-12 d-flex">
          <div class="card flex-fill">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h5 class="card-title mb-0">Purchase & Sales</h5>
              <div class="graph-sets">
                <ul class="mb-0">
                  <li>
                    <span>Sales</span>
                  </li>
                  <li>
                    <span>Purchase</span>
                  </li>
                </ul>
                <div class="dropdown dropdown-wraper">
                  <button
                    class="btn btn-light btn-sm dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    2024
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item">2024</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item">2023</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item">2022</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div id="sales_charts"></div>
              <apexchart
                type="bar"
                height="300"
                :options="basicAreaChart.slinesone"
                :series="basicAreaChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-sm-12 col-12 d-flex">
          <div class="card flex-fill default-cover mb-4">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h4 class="card-title mb-0">Recently Added Products</h4>
              <router-link to="/inventory/product-list" class="fs-13 fw-medium text-decoration-underline">View All</router-link>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive dataview">
                <table class="table dashboard-recent-products">
                  <thead class="thead-light">
                    <tr>
                      <th>#</th>
                      <th>Products</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in AdminProducts" :key="item.id">
                      <td>{{ item.id }}</td>
                      <td>
                        <div class="d-flex align-items-center">
                          <router-link to="/inventory/product-list" class="avatar avatar-lg me-3">
                            <img :src="getImageUrl(item.Image)" alt="img">
                          </router-link>
                          <div>
                            <h6><router-link to="/inventory/product-list" class="fw-bold">{{item.Title}}</router-link></h6>
                          </div>
                        </div>
                      </td>
                      <td>{{ item.Price }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h4 class="card-title">Expired Products</h4>
          <div class="view-all-link">
            <router-link to="/inventory/expired-products" class="fs-13 fw-medium text-decoration-underline">View All</router-link>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive dataview">
            <table class="table dashboard-expired-products">
              <thead>
                <tr>
                  <th class="no-sort">
                    <label class="checkboxs">
                      <input type="checkbox" id="select-all" />
                      <span class="checkmarks"></span>
                    </label>
                  </th>
                  <th>Product</th>
                  <th>SKU</th>
                  <th>Manufactured Date</th>
                  <th>Expired Date</th>
                  <th class="no-sort">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in AdminExpired" :key="item.id">
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox">
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar avatar-lg me-2">
                        <img :src="getImageUrl(item.Image)" alt="img">
                      </a>
                      <div>
                        <h6><a href="javascript:void(0);" class="fw-bold">{{ item.Title }}</a></h6>
                      </div>
                    </div>
                  </td>
                  <td>{{item.SKU}}</td>
                  <td>{{item.Manufactured}}</td>
                  <td>{{item.Expired}}</td>
                  <td class="action-table-data">
                    <div class="edit-delete-action">
                      <a class="me-2 p-2" href="#">
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a class="p-2" href="javascript:void(0);">
                        <i data-feather="trash-2" class="feather-trash-2"></i>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div
      class="copyright-footer d-flex align-items-center justify-content-between border-top bg-white gap-3 flex-wrap"
    >
      <p class="fs-13 text-gray-9 mb-0">
        {{ new Date().getFullYear() }} © DreamsPOS. All Right Reserved
      </p>
      <p>
        Designed & Developed By Dreams
        <a href="javascript:void(0);" class="link-primary">Dreams</a>
      </p>
    </div>
  </div>
</template>

<script>

import { basicAreaChart } from "./data";
import AdminProducts from "@/assets/json/admin-products.json";
import AdminExpired from "@/assets/json/admin-expired.json";

export default {
  data() {
    return {
      basicAreaChart: basicAreaChart,
      AdminProducts: AdminProducts,
      AdminExpired: AdminExpired,
    };
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/products/${imageName}`, import.meta.url).href;
    },
  }
};
</script>
