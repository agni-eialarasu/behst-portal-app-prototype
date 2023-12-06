import { ref } from "vue";
import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import { UserModel, CustomerModel, ProductModel } from "@/models";
import { QuotationItem, QuotationModel } from "@/models/quotation-model";
import { appService } from "@/services/app-service";

export const userDataStore = defineStore("dataStore", () => {
  const users = ref([] as UserModel[]);
  const customers = ref([] as CustomerModel[]);
  const products = ref([] as ProductModel[]);
  const quotations = ref(new Array<QuotationModel>());

  function init() {
    getUsers();
    getCustomers();
    getProducts();
  }

  function getUsers() {
    appService.fetchUsers().then((res) => {
      const items = new Array<UserModel>();
      for (const data of res.data) {
        const item = new UserModel();
        item.id = nanoid(10);
        item.aliasId = data.aliasId;
        item.status = data.status;
        item.imageUri = data.imageUri;
        item.role = data.role;
        item.name = data.name;
        item.email = data.email;
        item.phone = data.phone;
        item.mobile = data.mobile;
        console.log(item);
        items.push(item);
      }
      users.value = items;
    });
  }

  function findUserById(id: string) {
    return users.value.find((item) => item.id == id);
  }

  function findUserByAliasId(aliasId: string) {
    return users.value.find((item) => item.aliasId == aliasId);
  }

  function getCustomers() {
    appService.fetchCustomers().then((res) => {
      const items = new Array<CustomerModel>();
      for (const data of res.data) {
        const item = new CustomerModel();
        item.id = nanoid(10);
        item.aliasId = data.aliasId;
        item.status = data.status;
        item.imageUri = data.imageUri;
        item.role = data.role;
        item.name = data.name;
        item.mainContactName = data.mainContactName;
        item.mainContactEmail = data.mainContactEmail;
        item.mainContactPhone = data.mainContactPhone;
        item.accountingContactName = data.accountingContactName;
        item.accountingContactEmail = data.accountingContactEmail;
        item.accountingContactPhone = data.accountingContactPhone;
        item.deliveryContactName = data.deliveryContactName;
        item.deliveryContactEmail = data.deliveryContactEmail;
        item.deliveryContactPhone = data.deliveryContactPhone;
        item.billingAddress = data.billingAddress;
        item.shippingAddress = data.shippingAddress;
        console.log(item);
        items.push(item);
      }
      customers.value = items;
    });
  }

  function findCustomerById(id: string) {
    return customers.value[0];
    //return customers.value.find((item) => item.id == id);
  }

  function findCustomerByAliasId(aliasId: string) {
    return customers.value.find((item) => item.aliasId == aliasId);
  }

  function getProducts() {
    appService.fetchProducts().then((res) => {
      const items = new Array<ProductModel>();
      for (const data of res.data) {
        const item = new ProductModel();
        item.id = nanoid(10);
        item.aliasId = data.aliasId;
        item.status = data.status;
        item.name = data.name;
        item.description = data.description;
        item.cost = data.cost;
        item.markupPercent = data.markupPercent;
        item.imageUri = data.imageUri;
        console.log(item);
        items.push(item);
      }
      products.value = items;
    });
  }

  function findProductById(id: string) {
    return products.value.find((item) => item.id == id);
  }

  function findProductByAliasId(aliasId: string) {
    return products.value.find((item) => item.aliasId == aliasId);
  }

  async function getQuotations() {
    const res = await appService.fetchQuotations();
    const quotes = [] as QuotationModel[];
    for (const data of res.data) {
      const quote = new QuotationModel();
      quote.id = nanoid(10);
      quote.aliasId = data.aliasId;
      quote.name = data.name;
      quote.status = data.status;
      quote.date = data.date;
      quote.expiryDate = data.expiryDate;
      quote.taxPercent = data.taxPercent;
      quote.customer = findCustomerByAliasId(data.customerId);
      quote.customerId = quote?.customer?.id;
      quote.salesman = findUserByAliasId(data.salesmanId);
      quote.salesmanId = quote?.salesman?.id;
      for (const item of data.items) {
        const quoteItem = new QuotationItem();
        quoteItem.id = nanoid(10);
        quoteItem.product = findProductByAliasId(item.productId);
        quoteItem.productId = quoteItem?.product?.id;
        quoteItem.itemLabel = item.itemLabel;
        quoteItem.quantity = item.quantity;
        quoteItem.cost = item.cost;
        quoteItem.markupPercent = item.markupPercent;
        quoteItem.compute();
        quote.items?.push(quoteItem);
      }
      quote.compute();
      console.log(quote);
      quotes.push(quote);
    }
    quotations.value = quotes;
  }

  function findQuotationById(id: string) {
    return quotations.value.find((item) => item.id === id);
  }

  function filterQuotationsForCustomer(customerId: string) {
    return quotations.value.filter((item) => item.customerId === customerId);
  }

  function filterQuotationsByStatusId(statusId: string) {
    return quotations.value.filter((item) => item.status === statusId);
  }

  function filterQuotationsByCustomerIdAndStatuId(
    customerId: string,
    status: string
  ) {
    return quotations.value.filter(
      (item) => item.status === status && item.customerId === customerId
    );
  }

  return {
    customers,
    products,
    quotations,
    getCustomers,
    findCustomerById,
    getProducts,
    findProductById,
    getQuotations,
    findQuotationById,
    filterQuotationsForCustomer,
    filterQuotationsByStatusId,
    filterQuotationsByCustomerIdAndStatuId,
    init,
  };
});
