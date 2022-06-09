import { EventHandlerInterface } from "../../event-handler-interface";
import { ProductCreatedEvent } from "../product-create.event";

export class SendEmailWhenProductIsCreatedHandler implements EventHandlerInterface<ProductCreatedEvent> {
    handle(event: ProductCreatedEvent): void {
        console.log(`Sending email to ...`);
    }
}