import type { QuotationModel } from "@/models/quotation-model";

export class UserModel {
  id?: string;
  aliasId?: string;
  status?: string;
  imageUri?: string;
  role?: string;
  name?: string;
  email?: string;
  phone?: string;
  mobile?: string;
  address?: string;
}

export class CustomerModel extends UserModel {
  mainContactName?: string;
  mainContactEmail?: string;
  mainContactPhone?: string;
  accountingContactName?: string;
  accountingContactEmail?: string;
  accountingContactPhone?: string;
  deliveryContactName?: string;
  deliveryContactEmail?: string;
  deliveryContactPhone?: string;
  billingAddress?: string;
  shippingAddress?: string;

  quotations?: Array<QuotationModel>;
}

export class ProductModel {
  id?: string;
  aliasId?: string;
  status?: string;
  name?: string;
  description?: string;
  cost?: number;
  markupPercent?: number;
  imageUri?: string;
}
