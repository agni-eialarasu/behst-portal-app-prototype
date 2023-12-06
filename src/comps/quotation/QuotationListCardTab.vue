<script setup lang="ts">
import { ref } from "vue";
import type { QuotationModel } from "@/models/quotation-model";
import { userDataStore } from "@/stores/data-store";
import QuotationListTableComp from "@/comps/quotation/QuotationListTableComp.vue";

const props = defineProps<{
  cardClasses: string;
  customerId: string;
}>();

let dataStore = userDataStore();

const quotesNew = ref(new Array<QuotationModel>());
const quotesInvoice = ref(new Array<QuotationModel>());
const quotesShipping = ref(new Array<QuotationModel>());

function init() {
  quotesNew.value = dataStore.filterQuotationsByCustomerIdAndStatuId(
    props.customerId,
    "new"
  );
  quotesInvoice.value = dataStore.filterQuotationsByCustomerIdAndStatuId(
    props.customerId,
    "invoice"
  );
  quotesShipping.value = dataStore.filterQuotationsByCustomerIdAndStatuId(
    props.customerId,
    "shipping"
  );
}

if (dataStore.quotations.length == 0)
  dataStore.getQuotations().then(() => init());
else init();
</script>

<template>
  <div :class="`card pt-2 ${cardClasses}`">
    <div class="card-header border-0">
      <div class="card-title">
        <h2>Quotations</h2>
      </div>
      <div class="card-toolbar m-0">
        <ul
          class="nav nav-stretch fs-5 fw-semibold nav-line-tabs nav-line-tabs-2x border-transparent"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <a
              id="quotation_list_card_tab_new"
              class="nav-link text-active-primary active"
              data-bs-toggle="tab"
              role="tab"
              href="#quotation_list_card_tab_new_content"
            >
              New
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              id="quotation_list_card_tab_invoice"
              class="nav-link text-active-primary ms-3"
              data-bs-toggle="tab"
              role="tab"
              href="#quotation_list_card_tab_invoice_content"
            >
              Invoice
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              id="quotation_list_card_tab_shipping"
              class="nav-link text-active-primary ms-3"
              data-bs-toggle="tab"
              role="tab"
              href="#quotation_list_card_tab_shipping_content"
            >
              Shipping
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="card-body pt-0">
      <div class="tab-content">
        <div
          id="quotation_list_card_tab_new_content"
          class="py-0 tab-pane fade active show"
          role="tabpanel"
        >
          <QuotationListTableComp :quotes="quotesNew" />
        </div>
        <div
          id="quotation_list_card_tab_invoice_content"
          class="py-0 tab-pane fade"
          role="tabpanel"
        >
          <QuotationListTableComp :quotes="quotesInvoice" />
        </div>
        <div
          id="quotation_list_card_tab_shipping_content"
          class="py-0 tab-pane fade"
          role="tabpanel"
        >
          <QuotationListTableComp :quotes="quotesShipping" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
