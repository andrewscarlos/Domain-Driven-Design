import { Address } from "./entity/address";
import { Customer } from "./entity/customer";
import { Order } from "./entity/order";
import { OrderItem } from "./entity/order-item";

let customer = new Customer('123', 'John');
const address = new Address("123", 1, "123456-789", "State");
customer.Address = address;
customer.activate();

const item1 = new OrderItem('1', 'Item 1', 10)
const item2 = new OrderItem('2', 'Item 2', 15)
const item3 = new OrderItem('3', 'Item 3', 20)
const order = new Order('1', '123', [item1, item2, item3])