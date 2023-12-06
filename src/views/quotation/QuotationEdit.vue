<script lang="ts" setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { UserModel, CustomerModel } from "@/models";
import { QuotationItem, QuotationModel } from "@/models/quotation-model";
import { userDataStore } from "@/stores/data-store";

let dataStore = userDataStore();
const { customers } = storeToRefs(dataStore);

const quote = ref<QuotationModel>(new QuotationModel());
dataStore.getQuotations().then((res) => {
  //quote.value = dataStore.findQuotationById("-");
  console.log(quote.value);
});

const formRef = ref<null | HTMLFormElement>(null);
const formData = ref(quote);

const submit = () => {
  console.log("coming soon...");
};
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
              #{{ quote.aliasId }}</span
            >
          </div>
          <div class="my-1 me-5">
            <span class="fw-bold fs-3 text-gray-600">Status: </span>
            <span class="fw-bold fs-2 text-gray-800 text-uppercase">
              {{ quote.status }}</span
            >
          </div>
          <div class="my-1 me-5">
            <router-link to="/quotations/-/view">
              <button class="btn btn-primary my-1">Save</button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <el-form @submit.prevent="submit()" :model="formData" ref="formRef">
            <div class="row">
              <div class="col">
                <label class="required fs-6 fw-semibold mb-2">Name</label>
                <el-form-item prop="name">
                  <el-input
                    v-model="formData.name"
                    type="text"
                    placeholder="Name"
                  />
                </el-form-item>
              </div>
              <div class="col">
                <label class="required fs-6 fw-semibold mb-2">Customer</label>
                <el-form-item prop="customerId">
                  <el-select
                    v-model="formData.customerId"
                    placeholder="Customer"
                  >
                    <el-option
                      key="-"
                      value="-"
                      label="<Select Customer>"
                    />
                    <el-option
                      v-for="item in customers"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    />
                  </el-select>
                </el-form-item>
              </div>
              <div class="col">
                <label class="required fs-6 fw-semibold mb-2">Date</label>
                <el-form-item prop="date">
                  <el-date-picker
                    v-model="formData.date"
                    type="date"
                    placeholder="Date"
                  />
                </el-form-item>
              </div>
              <div class="col">
                <label class="required fs-6 fw-semibold mb-2">Exp. Date</label>
                <el-form-item prop="expiryDate">
                  <el-date-picker
                    v-model="formData.expiryDate"
                    type="date"
                    placeholder="Expiry Date"
                  />
                </el-form-item>
              </div>
            </div>
          </el-form>
        </div>
      </div>
      <div>
        <div class="d-flex flex-stack flex-wrap mt-3">
          <div class="my-1 me-5">
            <button class="btn btn-secondary my-1" onclick="history.back()">
              <i class="bi bi-arrow-left fs-3"></i>
              Back
            </button>
          </div>
          <div class="my-1 me-5">
            <router-link to="/quotations/-/view">
              <button class="btn btn-primary my-1">Save</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
