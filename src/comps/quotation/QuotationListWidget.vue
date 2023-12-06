<script setup lang="ts">
import type { QuotationModel } from "@/models/quotation-model";
import { userDataStore } from "@/stores/data-store";

const props = defineProps({
  className: String,
});

let dataStore = userDataStore();

const items = [
  {
    index: "1",
    title: "New",
    status: "new",
    icon: "car",
    content: new Array<QuotationModel>(),
  },
  {
    index: "2",
    title: "Invoice",
    status: "invoice",
    icon: "send",
    content: new Array<QuotationModel>(),
  },
  {
    index: "3",
    title: "Shipping",
    status: "shipping",
    icon: "bitcoin",
    content: new Array<QuotationModel>(),
  },
  {
    index: "4",
    title: "Won",
    status: "won",
    icon: "like",
    content: new Array<QuotationModel>(),
  },
];

function init() {
  items.forEach((item) => {
    item.content = dataStore.filterQuotationsByStatusId(item.status);
  });
}

if (dataStore.quotations.length == 0)
  dataStore.getQuotations().then(() => init());
else init();
</script>
<template>
  <!--begin::Main-->
  <div class="card card-flush" :class="className">
    <!--begin::Header-->
    <div class="card-header pt-5">
      <!--begin::Title-->
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold text-gray-800">Quotations</span>
        <span class="text-gray-500 mt-1 fw-semibold fs-6">My Quotations</span>
      </h3>
      <!--end::Title-->
      <!--begin::Toolbar-->
      <div class="card-toolbar">
        <a href="#" class="btn btn-sm btn-primary">New Quotation</a>
      </div>
      <!--end::Toolbar-->
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-6">
      <!--begin::Nav-->
      <ul class="nav nav-pills nav-pills-custom mb-3">
        <template v-for="(item, i) in items" :key="i">
          <!--begin::Item-->
          <li class="nav-item mb-3 me-3 me-lg-6">
            <!--begin::Link-->
            <a
              class="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2"
              :class="[i === 0 && 'active']"
              :id="`kt_stats_widget_16_tab_link_${i}`"
              data-bs-toggle="pill"
              :href="`#kt_stats_widget_16_tab_${i}`"
            >
              <!--begin::Icon-->
              <div class="nav-icon mb-3">
                <KTIcon :icon-name="item.icon" icon-class="fs-1 p-0" />
              </div>
              <!--end::Icon-->
              <!--begin::Title-->
              <span class="nav-text text-gray-800 fw-bold fs-6 lh-1">
                {{ item.title }}
              </span>
              <!--end::Title-->
              <!--begin::Bullet-->
              <span
                class="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"
              ></span>
              <!--end::Bullet-->
            </a>
            <!--end::Link-->
          </li>
          <!--end::Item-->
        </template>
      </ul>
      <!--end::Nav-->
      <br />
      <!--begin::Tab Content-->
      <div class="tab-content">
        <template v-for="(item, i) in items" :key="i">
          <!--begin::Tab pane-->
          <div
            class="tab-pane fade"
            :class="[i === 0 && 'active show']"
            :id="`kt_stats_widget_16_tab_${i}`"
          >
            <!--begin::Table container-->
            <div class="table-responsive">
              <!--begin::Table-->
              <table class="table table-row-dashed align-middle gs-0 gy-3 my-0">
                <!--begin::Table head-->
                <thead>
                  <tr class="fs-7 fw-bold text-gray-500 border-bottom-0">
                    <th class="p-0 pb-3 min-w-100px text-start">Quote Name</th>
                    <th class="pb-3 min-w-100px text-start">Customer</th>
                    <th class="p-0 pb-3 min-w-100px text-end pe-13">Amount</th>
                    <th class="p-0 pb-3 w-50px text-end">VIEW</th>
                  </tr>
                </thead>
                <!--end::Table head-->

                <!--begin::Table body-->
                <tbody>
                  <template v-for="(row, j) in item.content" :key="j">
                    <tr>
                      <!--
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="d-flex justify-content-start flex-column">
                          </div>
                        </div>
                      </td>
                      -->

                      <td class="text-start">
                        <span
                          class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                        >
                          {{ row.name }}
                        </span>
                      </td>
                      <td class="text-start">
                        <span
                          class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                        >
                          {{ row.customer?.name }}
                        </span>
                      </td>
                      <td class="text-end pe-13">
                        <span class="text-gray-800 fw-bold fs-6">
                          $
                          <v-num
                            #="{ number }"
                            :value="row.totalAmount"
                            minimum-fraction-digits="2"
                            maximum-fraction-digits="2"
                            >{{ number }}</v-num
                          >
                        </span>
                      </td>
                      <td class="text-end">
                        <router-link
                          :to="`/quotations/${row.id}/view`"
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
                <!--end::Table body-->
              </table>
              <!--end::Table-->
            </div>
            <!--end::Table container-->
          </div>
          <!--end::Tab pane-->
        </template>
      </div>
      <!--end::Tab Content-->
    </div>
    <!--end: Card Body-->
  </div>
  <!--end::Main-->
</template>

<style scoped lang="scss"></style>
