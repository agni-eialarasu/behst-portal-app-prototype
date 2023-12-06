<script lang="ts" setup>
import { useRoute } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { userDataStore } from "@/stores/data-store";
import QuotationListCardOne from "@/comps/quotation/QuotationListCardOne.vue";
import CustomerDetailCard from "@/comps/customer/CustomerDetailCard.vue";
import QuotationListCardTab from "@/comps/quotation/QuotationListCardTab.vue";

const comingSoon = () => {
  Swal.fire("Coming soon..");
};

let route = useRoute();
const customerId = "" + route.params.id;

let dataStore = userDataStore();
const customer = dataStore.findCustomerById(customerId);
</script>

<template>
  <div class="d-flex flex-column flex-xl-row">
    <div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
      <div class="card mb-5 mb-xl-8">
        <CustomerDetailCard :customer="customer" />
      </div>
    </div>

    <div class="flex-lg-row-fluid ms-lg-15">
      <ul
        class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-8"
      >
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4 active"
            data-bs-toggle="tab"
            href="#customer_overview_tab"
            >Overview</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4"
            data-bs-toggle="tab"
            href="#customer_past_purchases_tab"
            >Past Purchases</a
          >
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="customer_overview_tab"
          role="tabpanel"
        >
          <QuotationListCardTab card-classes="mb-6 mb-xl-9" :customer-id="customerId" />
          <!--
          <QuotationListCardOne
            card-classes="mb-6 mb-xl-9"
            card-title="Quotations New"
            :customer-id="customerId"
            :status="'new'"
          />
          <QuotationListCardOne
            card-classes="mb-6 mb-xl-9"
            card-title="Quotations Invoice"
            :customer-id="customerId"
            :status="'invoice'"
          />
          <QuotationListCardOne
            card-classes="mb-6 mb-xl-9"
            card-title="Quotations Shipping"
            :customer-id="customerId"
            :status="'shipping'"
          />
          -->
        </div>
        <div
          class="tab-pane fade"
          id="customer_past_purchases_tab"
          role="tabpanel"
        >
          <QuotationListCardOne
            card-classes="mb-6 mb-xl-9"
            card-title="Quotations Won"
            :customer-id="customerId"
            :status="'won'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
