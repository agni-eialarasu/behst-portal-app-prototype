<script setup lang="ts">
import { ref } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { userDataStore } from "@/stores/data-store";
import type { QuotationModel } from "@/models/quotation-model";
import QuotationListTableComp from "@/comps/quotation/QuotationListTableComp.vue";

const comingSoon = () => {
  Swal.fire("Coming soon..");
};

const props = defineProps<{
  cardClasses: string;
  cardTitle: string;
  customerId: string;
  status: string;
}>();

let dataStore = userDataStore();

const quotes = ref(new Array<QuotationModel>());

function init() {
  quotes.value = dataStore.filterQuotationsByCustomerIdAndStatuId(
    props.customerId,
    props.status
  );
  console.log(quotes.value);
}

if (dataStore.quotations.length == 0)
  dataStore.getQuotations().then(() => init());
else init();
</script>

<template>
  <div :class="`card pt-4 ${cardClasses}`">
    <div class="card-header border-0">
      <div class="card-title">
        <h2>{{ cardTitle }}</h2>
      </div>
      <div class="card-toolbar">&nbsp;</div>
    </div>

    <div class="card-body pt-0 pb-5">
      <QuotationListTableComp :quotes="quotes" />
    </div>
  </div>
</template>
