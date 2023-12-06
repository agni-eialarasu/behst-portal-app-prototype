<script setup lang="ts">
import Swal from "sweetalert2/dist/sweetalert2.js";
import { momentDateFormatter } from "@/core/helpers/util";
import type { QuotationModel } from "@/models/quotation-model";

const comingSoon = () => {
  Swal.fire("Coming soon..");
};

const props = defineProps({
  quotes: Array<QuotationModel>,
});
</script>

<template>
  <div class="table-responsive">
    <table class="table table-row-dashed align-middle gs-0 gy-3 my-0">
      <thead>
        <tr class="fs-7 fw-bold text-gray-500 border-bottom-0">
          <th class="p-0 pb-3 min-w-200px text-start">Name</th>
          <th class="p-0 pb-3 min-w-100px text-end pe-13">Amount</th>
          <th class="pb-3 min-w-100px text-start">Expiry Date</th>
          <th class="pb-3 min-w-100px text-start">Status</th>
          <th class="p-0 pb-3 w-50px text-end">Actions</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(quote, j) in quotes" :key="j">
          <tr>
            <td class="text-start">
              <span class="text-gray-800 fw-bold mb-1 fs-6">
                {{ quote.name }}
              </span>
            </td>
            <td class="text-end pe-13">
              <span class="text-gray-800 fw-bold fs-6">
                $<v-num
                  #="{ number }"
                  :value="quote.totalAmount"
                  minimum-fraction-digits="2"
                  maximum-fraction-digits="2"
                  >{{ number }}</v-num
                >
              </span>
            </td>
            <td class="text-start">
              <span class="text-gray-800 fw-bold mb-1 fs-6">
                {{ momentDateFormatter(quote.date) }}
              </span>
            </td>
            <td class="text-start">
              <span class="text-gray-800 fw-bold mb-1 fs-6 text-capitalize">
                {{ quote.status }}
              </span>
            </td>
            <td class="text-end">
              <router-link
                :to="`/quotations/${quote.id}/view`"
                class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
              >
                <KTIcon
                  icon-name="black-right"
                  icon-class="fs-5 text-gray-700"
                />
              </router-link>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
