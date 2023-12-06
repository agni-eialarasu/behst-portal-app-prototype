import { BaseService } from "@/services/base-ervice";

class AppService extends BaseService {
  constructor() {
    super();
  }

  fetchUsers() {
    const path = "/users.json";
    return this.http.get(path);
  }

  fetchCustomers() {
    const path = "/customers.json";
    return this.http.get(path);
  }

  fetchProducts() {
    const path = "/products.json";
    return this.http.get(path);
  }

  fetchQuotations() {
    const path = "/quotations.json";
    return this.http.get(path);
  }
}

export const appService = new AppService();
