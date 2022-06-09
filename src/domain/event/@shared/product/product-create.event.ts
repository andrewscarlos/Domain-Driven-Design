import { EventInterface } from "../../event-interface";

export class ProductCreatedEvent implements EventInterface {
    dataTimeOccured: Date;
    eventData: string;

    constructor(eventName: string) {
        this.eventData = eventName;
        this.dataTimeOccured = new Date();
    }

}