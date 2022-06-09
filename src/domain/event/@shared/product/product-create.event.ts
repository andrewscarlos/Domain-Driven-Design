import { EventInterface } from "../../event-interface";

export class ProductCreatedEvent implements EventInterface {
    dataTimeOccured: Date;
    eventData: any;

    constructor(eventName: any) {
        this.eventData = eventName;
        this.dataTimeOccured = new Date();
    }

}