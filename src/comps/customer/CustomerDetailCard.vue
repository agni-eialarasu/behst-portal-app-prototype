<script setup lang="ts">
import Swal from "sweetalert2/dist/sweetalert2.js";
import { getAssetPath } from "@/core/helpers/assets";
import type { CustomerModel } from "@/models";

const comingSoon = () => {
  Swal.fire("Coming soon..");
};

const props = defineProps<{
  customer: CustomerModel;
}>();
</script>

<template>
  <div class="card-body pt-15">
    <div class="d-flex flex-center flex-column mb-5">
      <div class="symbol symbol-100px symbol-circle mb-7">
        <img :src="getAssetPath('media/avatars/300-7.jpg')" alt="image" />
      </div>
      <a href="#" class="fs-3 text-gray-800 text-hover-primary fw-bold mb-1">
        {{ customer.name }}
      </a>
    </div>
    <div class="d-flex flex-stack fs-4 py-3">
      <div
        class="fw-bold rotate collapsible"
        data-bs-toggle="collapse"
        href="#kt_customer_view_details"
        role="button"
        aria-expanded="false"
        aria-controls="kt_customer_view_details"
      >
        Details
        <span class="ms-2 rotate-180">
          <KTIcon icon-name="down" icon-class="fs-3" />
        </span>
      </div>
      <span
        data-bs-toggle="tooltip"
        data-bs-trigger="hover"
        title="Edit customer details"
      >
        <button
          @click="comingSoon()"
          class="btn btn-sm btn-light-primary"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_update_customer"
        >
          Edit
        </button>
      </span>
    </div>

    <div class="separator separator-dashed my-3"></div>

    <div id="kt_customer_view_details" class="collapse show">
      <div class="py-5 fs-6">
        <h2 class="pb-2 text-gray-600">Main Contact</h2>
        <div class="fw-semibold fs-6 text-gray-600 mb-1">Name</div>
        <div class="fw-bold fs-6 text-gray-800 mb-5">
          {{ customer.mainContactName }}
        </div>
        <div class="fw-semibold fs-6 text-gray-600 mb-1">Email</div>
        <div class="fw-bold fs-6 text-gray-800 mb-5">
          {{ customer.mainContactEmail }}
        </div>
        <div class="fw-semibold fs-6 text-gray-600 mb-1">Phone</div>
        <div class="fw-bold fs-6 text-gray-800 mb-5">
          {{ customer.mainContactPhone }}
        </div>
        <div class="fw-semibold fs-6 text-gray-600 mb-1">Billing Address</div>
        <div class="fw-bold fs-6 text-gray-800 mb-5">
          {{ customer.billingAddress }}
        </div>
        <div class="separator border-gray-300 my-5"></div>
        <h2 class="pb-2 text-gray-600">Accounting Contact</h2>
        <div class="fw-semibold fs-6 text-gray-600 mb-1">Name</div>
        <div class="fw-bold fs-6 text-gray-800 mb-5">
          {{ customer.accountingContactName }}
        </div>
        <div class="fw-semibold fs-6 text-gray-600 mb-1">Email</div>
        <div class="fw-bold fs-6 text-gray-800 mb-5">
          {{ customer.accountingContactEmail }}
        </div>
        <div class="fw-semibold fs-6 text-gray-600 mb-1">Phone</div>
        <div class="fw-bold fs-6 text-gray-800 mb-5">
          {{ customer.accountingContactPhone }}
        </div>
        <div class="separator border-gray-300 my-5"></div>
        <h2 class="pb-2 text-gray-600">Shipping Contact</h2>
        <div class="fw-semibold fs-6 text-gray-600 mb-1">Name</div>
        <div class="fw-bold fs-6 text-gray-800 mb-5">
          {{ customer.deliveryContactName }}
        </div>
        <div class="fw-semibold fs-6 text-gray-600 mb-1">Email</div>
        <div class="fw-bold fs-6 text-gray-800 mb-5">
          {{ customer.deliveryContactEmail }}
        </div>
        <div class="fw-semibold fs-6 text-gray-600 mb-1">Phone</div>
        <div class="fw-bold fs-6 text-gray-800 mb-5">
          {{ customer.deliveryContactPhone }}
        </div>
        <div class="fw-semibold fs-6 text-gray-600 mb-1">Delivery Address</div>
        <div class="fw-bold fs-6 text-gray-800 mb-5">
          {{ customer.shippingAddress }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
