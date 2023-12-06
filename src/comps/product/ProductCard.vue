<script setup lang="ts">
import Swal from "sweetalert2/dist/sweetalert2.js";
import { ProductModel } from "@/models";

const props = defineProps({
  cardClasses: String,
  productModel: ProductModel,
});

const comingSoon = () => {
  Swal.fire("Coming soon..");
};
</script>

<template>
  <div class="card h-100" :class="cardClasses">
    <div class="card-header flex-nowrap border-0">
      <div class="card-title m-0">
        <a href="#" class="fs-1 fw-bold text-hover-primary text-gray-900 m-0">
          {{ productModel?.name }}
        </a>
      </div>
      <div class="card-toolbar m-0">
        <span class="fs-2 fw-bold text-warning m-0">
          $ <v-num
              #="{ number }"
              :value="productModel?.cost"
              minimum-fraction-digits="2"
              maximum-fraction-digits="2"
              >{{ number }}</v-num
            >
        </span>
      </div>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-sm-6">
          <div
            class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-400px min-h-sm-100 h-100"
            :style="{
              backgroundSize: '100% 100%',
              backgroundImage: `url(${productModel?.imageUri})`,
            }"
          ></div>
        </div>
        <div class="col-sm-6">
          <div class="d-flex flex-column h-100">
            <div>
              <span class="fw-semibold text-gray-600 fs-6 mb-8 d-block">
                {{ productModel?.description }}
              </span>
            </div>
            <div class="d-flex">
              <button
                class="btn btn-sm btn-light-primary"
                @click="comingSoon()"
              >
                Add to Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
