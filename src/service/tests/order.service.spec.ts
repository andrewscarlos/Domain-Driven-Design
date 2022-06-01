import { Order } from "../../entity/order";
import { OrderItem } from "../../entity/order-item"
import { OrderService } from "../order.service";

describe("Order Service unit tests", () => {
    it("should get total of orders", () => {
        const orderItem = new OrderItem("123", "item 1", 100, "p1", 1);
        const orderItem2 = new OrderItem("123", "item 1", 200, "p1", 2);

        const order1 = new Order("o1", "customer 1", [orderItem]);
        const order2 = new Order("o2", "customer 1", [orderItem2]);

        const total = OrderService.total([order1, order2]);

        expect(total).toBe(500)
    })
})