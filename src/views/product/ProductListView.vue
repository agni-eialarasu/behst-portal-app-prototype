<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { userDataStore } from "@/stores/data-store";
import ProductCard from "@/comps/product/ProductCard.vue";

let dataStore = userDataStore();
const { products } = storeToRefs(dataStore);
</script>

<template>
  <div class="row g-6 g-xl-9">
    <div class="col-sm-6 col-xl-4">
      <div class="card h-100">
        <ProductCard cardClasses="h-100" :productModel="products[0]" />
      </div>
    </div>
    <div class="col-sm-6 col-xl-4">
      <div class="card h-100">
        <ProductCard cardClasses="h-100" :productModel="products[1]" />
      </div>
    </div>
    <div class="col-sm-6 col-xl-4">
      <div class="card h-100">
        <ProductCard cardClasses="h-100" :productModel="products[2]" />
      </div>
    </div>
  </div>
</template>
