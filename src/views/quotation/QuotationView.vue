<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { QuotationModel } from "@/models/quotation-model";
import { userDataStore } from "@/stores/data-store";
import QuotationPreviewCard from "@/comps/quotation/QuotationPreviewCard.vue";
import InvoicePreviewCard from "@/comps/quotation/InvoicePreviewCard.vue";
import PackagingPreviewCard from "@/comps/quotation/PackagingPreviewCard.vue";

const comingSoon = () => {
  Swal.fire("Coming soon..");
};

let route = useRoute();
const quoteId = "" + route.params.id;

const quote = ref<QuotationModel>(new QuotationModel());

let dataStore = userDataStore();

function init() {
  let quotation = dataStore.findQuotationById(quoteId);
  if (quotation !== undefined) quote.value = quotation;
}

if (dataStore.quotations.length == 0)
  dataStore.getQuotations().then(() => init());
else init();
</script>

<template>
  <div id="kt_app_content" class="app-content flex-column-fluid">
    <div id="kt_app_content_container" class="app-container container-fluid">
      <div>
        <div class="d-flex flex-stack flex-wrap mb-3">
          <div class="my-1 me-5">
            <button class="btn btn-secondary my-1" onclick="history.back()">
              <i class="bi bi-arrow-left fs-3"></i>
              Back
            </button>
          </div>
          <div class="my-1 me-5">
            <span class="fw-bold fs-3 text-gray-600">Quote Id: </span>
            <span class="fw-bold fs-2 text-gray-800">
              #{{ quote?.aliasId }}</span
            >
          </div>
          <div class="my-1 me-5">
            <span class="fw-bold fs-3 text-gray-600">Status: </span>
            <span class="fw-bold fs-2 text-gray-800 text-uppercase">
              {{ quote?.status }}</span
            >
          </div>
          <div class="my-1 me-5">
            <button
              class="btn btn-light-primary my-1 me-12"
              @click="comingSoon()"
            >
              Edit
            </button>
            <!--            <router-link to="/quotations/-/edit">-->
            <!--              <button class="btn btn-primary my-1">Edit</button>-->
            <!--            </router-link>-->
          </div>
        </div>
      </div>
      <template v-if="quote.status !== 'won'">
        <QuotationPreviewCard :quote="quote" v-if="quote.status === 'new'" />
        <InvoicePreviewCard :quote="quote" v-if="quote.status === 'invoice'" />
        <PackagingPreviewCard
          :quote="quote"
          v-if="quote.status === 'shipping'"
        />
      </template>
      <template v-if="quote.status === 'won'">
        <h2>coming soon...</h2>
      </template>
      <div>
        <div class="d-flex flex-stack flex-wrap mt-3">
          <div class="my-1 me-5">
            <button class="btn btn-secondary my-1" onclick="history.back()">
              <i class="bi bi-arrow-left fs-3"></i>
              Back
            </button>
          </div>
          <div class="my-1 me-5">
            <button
              class="btn btn-light-primary my-1 me-12"
              @click="comingSoon()"
            >
              Download
            </button>
            <button
              class="btn btn-light-primary my-1 me-12"
              @click="comingSoon()"
            >
              Edit
            </button>
            <!--            <router-link to="/quotations/-/edit">-->
            <!--              <button class="btn btn-primary my-1">Edit</button>-->
            <!--            </router-link>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
