import type { CustomerModel } from "@/models/index";
import type { UserModel } from "@/models/index";
import type { ProductModel } from "@/models/index";

export class QuotationItem {
  id?: string;
  productId?: string;
  product?: ProductModel;
  itemLabel?: string;
  quantity?: number;
  cost?: number;
  markupPercent?: number;
  markupAmount?: number;
  price?: number;

  constructor() {
    this.quantity = 0;
    this.cost = 0;
    this.markupPercent = 0;
    this.markupAmount = 0;
    this.price = 0;
  }

  public compute() {
    if (this.quantity && this.cost && this.markupPercent) {
      this.price = this.quantity * this.cost;
      this.markupAmount = (this.price * this.markupPercent) / 100;
      this.price = this.price + this.markupAmount;
    }
  }
}

export class QuotationModel {
  id?: string;
  aliasId?: number;
  name?: string;
  desc?: string;
  status?: string;
  date?: string;
  expiryDate?: string;
  totalPrice?: number;
  taxPercent?: number;
  taxAmount?: number;
  totalAmount?: number;
  depositAmount?: number;
  balanceAmount?: number;

  customerId?: string;
  customer?: CustomerModel;
  salesmanId?: string;
  salesman?: UserModel;

  items?: Array<QuotationItem>;

  constructor() {
    this.totalPrice = 0;
    this.taxPercent = 0;
    this.taxAmount = 0;
    this.totalAmount = 0;
    this.depositAmount = 0;
    this.balanceAmount = 0;
    this.items = new Array<QuotationItem>();
  }

  public compute() {
    this.totalPrice = 0;
    this.items?.forEach((item) => {
      item.compute();
      console.log(item);
      // @ts-ignore
      this.totalPrice += item.price;
    });
    // @ts-ignore
    this.taxAmount = (this.totalPrice * this.taxPercent) / 100;
    this.totalAmount = this.totalPrice + this.taxAmount;
    // @ts-ignore
    this.balanceAmount = this.totalAmount - this.depositAmount;
  }
}
