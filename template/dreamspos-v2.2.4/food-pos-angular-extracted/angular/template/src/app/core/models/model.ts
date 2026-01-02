export interface apiResultFormat {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  totalData: number;
}

export interface url {
  url: string;
}

export interface SideBar {
  tittle: string;
  icon?: string;
  menu: SideBarMenu[];
  SideBarMenu?:SideBarMenu[];
  ids:string; 
  base?:string;
}

export interface SideBarMenu {
  menuValue: string;
  route: string;
  hasSubRoute: boolean,
  showSubRoute: boolean,
  icon: string,
  base: string;
  subMenus:subMenus[]
}

export interface subMenus {}

export interface addons{
    sNo: number;
    id:number
    Item: string,
    Addon: string,
    Price: string,
    Status: string
}

export interface categories {
  sNo:number;
  id:number;
  image: string;
  category: string;
  noOfItems: string;
  createdOn: string;
  status: string;
}

export interface coupons {
  sNo:number;
  id:number;
  couponCode: string;
  validCategory: string;
  discountType: string;
  discountAmount: string;
  duration: string;
  status: string;
}

export interface invoice {
  sNo:number;
  id:number;
  InvoiceId: string;
  Customer: string;
  Date: string;
  OrderType: string;
  Amount: string;
  Status: string;
  Img: string;
}

export interface payment {
  sNo:number;
  id:number;
  TransactionId: string;
  OrderId: string;
  TokenNo: string;
  Customer: string;
  Type: string;
  Menus: string;
  GrandTotal: string;
  img?:string;
}

export interface users {
  sNo:number;
  id:number;
  Image: string;
  Name: string;
  Role: string;
  PhoneNumber: string;
  Status: string;
}

export interface reports {
  sNo: number;
  id: number;
  Ids: string;
  Date: string;
  Ids2: string;
  Customer: string;
  Type: string;
  PaymentMethod: string;
  GrandTotal: string;
  Status: string;
  Menus:string;
  TokenNo:string;
  Image:string;
  Category:string;
  ItemsSold:string;
  TotalOrders:string;
}