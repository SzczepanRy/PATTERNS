"trict mode";
//create object by using methods rather then passing arguments to a constructor
var Order = /** @class */ (function () {
    function Order(addres, item, price) {
        this.addres = addres;
        this.item = item;
        this.price = price;
    }
    Order.prototype.addAddress = function (ad) {
        this.addres = ad;
        return this;
    };
    Order.prototype.addItem = function (it) {
        this.item = it;
        return this;
    };
    Order.prototype.addPrice = function (pr) {
        this.price = pr;
        return this;
    };
    return Order;
}());
var order = new Order();
order.addAddress("address").addItem("item1").addPrice(20);
console.log(order);
