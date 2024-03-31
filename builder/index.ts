"trict mode";
//create object by using methods rather then passing arguments to a constructor
class Order {
  constructor(
    public addres?: string,
    public item?: string,
    public price?: number
  ) {}
  addAddress(ad: string) {
    this.addres = ad;
    return this;
  }
  addItem(it: string) {
    this.item = it;
    return this;
  }
  addPrice(pr: number) {
    this.price = pr;
    return this;
  }
}

const order = new Order();
order.addAddress("address").addItem("item1").addPrice(20);
console.log(order);
