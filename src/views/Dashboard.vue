<template>
  <div class="row gx-5 gx-xl-10">
    <div class="col-xl-6 mb-5 mb-xl-10">
      <QuotationListWidget className="h-xl-100" />
    </div>
    <div class="col-xl-6 mb-5 mb-xl-10">
      <CustomerListWidget className="h-md-100" />
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import CustomerListWidget from "@/comps/customer/CustomerListWidget.vue";
import QuotationListWidget from "@/comps/quotation/QuotationListWidget.vue";

export default defineComponent({
  name: "main-dashboard",
  components: {
    QuotationListWidget,
    CustomerListWidget,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
