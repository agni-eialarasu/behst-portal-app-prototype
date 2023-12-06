<script setup lang="ts">
import { userDataStore } from "@/stores/data-store";
import { storeToRefs } from "pinia";
import Swal from "sweetalert2";

const comingSoon = () => {
  Swal.fire("Coming soon..");
};

const props = defineProps({
  className: String
});

let dataStore = userDataStore();
const { customers } = storeToRefs(dataStore);
</script>

<template>
  <div class="card card-flush" :class="className">
    <div class="card-header pt-7">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold text-gray-800">Customers</span>
        <span class="text-gray-500 mt-1 fw-semibold fs-6">My Customers</span>
      </h3>
      <div class="card-toolbar">
        <button class="btn btn-sm btn-primary" @click="comingSoon()">
          <KTIcon icon-name="plus-square" icon-class="fs-3" /> New Customer
        </button>
      </div>
    </div>
    <br/>
    <div class="card-body pt-6">
      <div class="table-responsive">
        <table class="table table-row-dashed align-middle gs-0 gy-3 my-0">
          <thead>
            <tr class="fs-7 fw-bold text-gray-500 border-bottom-0">
              <th class="p-0 pb-3 min-w-175px text-start">NAME</th>
              <th class="p-0 pb-3 min-w-100px text-end">COMPANY</th>
              <th class="p-0 pb-3 min-w-175px text-end pe-12">STATUS</th>
              <th class="p-0 pb-3 w-50px text-end">VIEW</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, i) in customers" :key="i">
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="symbol symbol-50px me-3">
                      <img :src="item.imageUri" class="" alt="" />
                    </div>
                    <div class="d-flex justify-content-start flex-column">
                      <span
                        class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                      >
                        {{ item.mainContactName }}
                      </span>
                      <span class="text-gray-500 fw-semibold d-block fs-7">
                        {{ item.mainContactEmail }}
                      </span>
                    </div>
                  </div>
                </td>
                <td class="text-end pe-0">
                  <span class="text-gray-600 fw-bold fs-6">
                    {{ item.name }}
                  </span>
                </td>
                <td class="text-end pe-12">
                  <span class="`badge py-3 px-4 fs-7 badge-light-primary">
                    {{ item.status }}
                  </span>
                </td>
                <td class="text-end">
                  <router-link
                    :to="`/customers/${item.id}/view`"
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
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
