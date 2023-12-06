<script setup lang="ts">
import { ref } from "vue";
import { momentDateFormatter } from "@/core/helpers/util";
import type { QuotationModel } from "@/models/quotation-model";

const props = defineProps<{
  quote: QuotationModel;
}>();

const amountDue = ref(0);

if (props.quote.status === "invoice" || props.quote.status === "won") {
  if (props.quote.balanceAmount !== undefined)
    amountDue.value = props.quote.balanceAmount;
} else {
  if (props.quote.totalAmount !== undefined)
    amountDue.value = props.quote.totalAmount;
}
</script>

<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex flex-column flex-xl-row">
        <div class="flex-lg-row-fluid me-xl-18 mb-10 mb-xl-0">
          <div class="mt-n1">
            <div class="d-flex flex-stack">
              <a href="#">
                <img alt="Logo" src="/logo-with-name-b.jpg" width="50%" />
              </a>
              <div class="text-sm-end fw-semibold fs-4 text-muted mt-7">
                <div>(800) 888 8989</div>
                <div>consultme@behstco.com</div>
                <div>https://behstco.com</div>
                <div>7459 Gulf Lane Raeford, NC 28376</div>
              </div>
            </div>
          </div>

          <div class="m-0">
            <div class="separator border-dark my-5"></div>
            <div class="fw-bold fs-3 text-gray-800 mb-4">
              Invoice Id: #{{ quote.aliasId }}
            </div>
            <div class="row g-5 mb-6">
              <div class="col-sm-6">
                <div class="fw-semibold fs-6 text-gray-600 mb-1">
                  Customer Info:
                </div>
                <div class="fw-bold fs-6 text-gray-800 mb-1">
                  {{ quote.customer?.mainContactName }}
                </div>
                <div class="fw-bold fs-6 text-gray-800">
                  <div class="mb-1">
                    <i class="bi bi-telephone-fill mx-2"></i>
                    {{ quote.customer?.mainContactPhone }}
                  </div>
                  <div class="mb-1">
                    <i class="bi bi-envelope-at-fill mx-2"></i>
                    {{ quote.customer?.mainContactEmail }}
                  </div>
                  <div class="mb-1">
                    <i class="bi bi-geo-alt-fill mx-2"></i>
                    {{ quote.customer?.billingAddress }}
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="fw-semibold fs-7 text-gray-600 mb-1">Date:</div>
                <div class="fw-bold fs-6 text-gray-800">
                  {{ momentDateFormatter(quote.date) }}
                </div>
                <br />
                <div class="fw-semibold fs-7 text-gray-600 mb-1">
                  Expiry Date:
                </div>
                <div class="fw-bold fs-6 text-gray-800">
                  {{ momentDateFormatter(quote.expiryDate) }}
                </div>
              </div>
              <div class="col-sm-3">
                <div class="fw-semibold fs-7 text-gray-600 mb-1">Amount:</div>
                <div class="fw-bold fs-1">
                  $
                  <v-num
                    #="{ number }"
                    :value="amountDue"
                    minimum-fraction-digits="2"
                    maximum-fraction-digits="2"
                    >{{ number }}</v-num
                  >
                </div>
              </div>
            </div>
            <div class="separator border-dark my-3"></div>
          </div>

          <div class="mw-lg-950px mx-auto w-100">
            <div class="pb-2">
              <div class="d-flex flex-column gap-7 gap-md-10">
                <div class="d-flex justify-content-between flex-column">
                  <div class="table-responsive border-bottom mb-9">
                    <table
                      class="table align-middle table-row-dashed fs-6 gy-3 mb-0"
                    >
                      <thead>
                        <tr class="border-bottom fs-6 fw-bold text-muted">
                          <th class="min-w-40px pb-2">Item</th>
                          <th class="min-w-250px pb-2">Name</th>
                          <th class="min-w-40px text-end pb-2">Quantity</th>
                          <th class="min-w-80px text-end pb-2">Cost</th>
                          <th class="min-w-80px text-end pb-2">Markup</th>
                          <th class="min-w-160px text-end pb-2">Price</th>
                        </tr>
                      </thead>
                      <tbody class="fw-semibold text-gray-700">
                        <tr v-for="item in quote.items">
                          <td class="text-end">{{ item.itemLabel }}</td>
                          <td class="text-start">
                            {{ item.product?.name }}
                          </td>
                          <td class="text-end">{{ item.quantity }}</td>
                          <td class="text-end">
                            $
                            <v-num
                              #="{ number }"
                              :value="item.cost"
                              minimum-fraction-digits="2"
                              maximum-fraction-digits="2"
                              >{{ number }}</v-num
                            >
                          </td>
                          <td class="text-end">{{ item.markupPercent }} %</td>
                          <td class="text-end">
                            $
                            <v-num
                              #="{ number }"
                              :value="item.price"
                              minimum-fraction-digits="2"
                              maximum-fraction-digits="2"
                              >{{ number }}</v-num
                            >
                          </td>
                        </tr>
                        <tr>
                          <td colspan="5" class="text-end">
                            <span class="fs-6 fw-bold text-muted"
                              >Subtotal</span
                            >
                          </td>
                          <td class="text-end">
                            $
                            <v-num
                              #="{ number }"
                              :value="quote.totalPrice"
                              minimum-fraction-digits="2"
                              maximum-fraction-digits="2"
                              >{{ number }}</v-num
                            >
                          </td>
                        </tr>
                        <tr>
                          <td colspan="5" class="text-end">
                            <span class="fs-6 fw-bold text-muted"
                              >Tax ({{ quote.taxPercent }}%)</span
                            >
                          </td>
                          <td class="text-end">
                            $
                            <v-num
                              #="{ number }"
                              :value="quote.taxAmount"
                              minimum-fraction-digits="2"
                              maximum-fraction-digits="2"
                              >{{ number }}</v-num
                            >
                          </td>
                        </tr>
                        <tr>
                          <td colspan="5" class="text-end">
                            <span class="fs-6 fw-bold text-muted"
                              >Total Amount</span
                            >
                          </td>
                          <td class="text-end">
                            $
                            <v-num
                              #="{ number }"
                              :value="quote.totalAmount"
                              minimum-fraction-digits="2"
                              maximum-fraction-digits="2"
                              >{{ number }}</v-num
                            >
                          </td>
                        </tr>
                        <tr>
                          <td colspan="5" class="text-end">
                            <span class="fs-6 fw-bold text-muted"
                              >Deposit Amount</span
                            >
                          </td>
                          <td class="text-end">
                            $
                            <v-num
                              #="{ number }"
                              :value="quote.depositAmount"
                              minimum-fraction-digits="2"
                              maximum-fraction-digits="2"
                              >{{ number }}</v-num
                            >
                          </td>
                        </tr>
                        <tr>
                          <td colspan="5" class="text-end">
                            <span class="fs-6 fw-bold text-muted"
                              >Balance Amount</span
                            >
                          </td>
                          <td class="text-end">
                            $
                            <v-num
                              #="{ number }"
                              :value="quote.balanceAmount"
                              minimum-fraction-digits="2"
                              maximum-fraction-digits="2"
                              >{{ number }}</v-num
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="m-0">
            <div class="row g-5 mb-6">
              <div class="col-sm-6">
                <div class="fw-semibold fs-6 text-gray-600 mb-1">
                  Salesman Info:
                </div>
                <div class="fw-bold fs-6 text-gray-800 mb-1">
                  {{ quote.salesman?.name }}
                </div>
                <div class="fw-bold fs-6 text-gray-800 mb-1">
                  {{ quote.salesman?.email }}
                </div>
              </div>
              <div class="col-sm-6"><br /><br /></div>
            </div>
          </div>

          <div class="separator border-dark my-5"></div>

          <div class="m-0">
            <div class="fw-semibold fs-6 text-gray-600 mb-1">
              Terms &amp; Conditions:
            </div>
            <div class="fw-semibold fs-6 text-gray-700 mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
