import { EventInterface } from "../event-interface";
import { EventDispatcherInterface } from "./event-dispatcher-interface";
import { EventHandlerInterface } from "./event-handler-interface";

export class EventDispatcher implements EventDispatcherInterface {

    private eventHandlers: { [eventName: string]: EventHandlerInterface<EventInterface>[] } = {};

    get getEventHandlers(): { [eventName: string]: EventHandlerInterface[] } {
        return this.eventHandlers;
    };

    notify(event: EventInterface): void {};

    register(eventName: string, eventHandler: EventHandlerInterface<EventInterface>): void {
        if(!this.eventHandlers[eventName]) {
            this.eventHandlers[eventName] = [];
        }
        this.eventHandlers[eventName].push(eventHandler);
     };

    unregister(eventName: string, eventHandler: EventHandlerInterface<EventInterface>): void {};

    unregisterAll(): void {};

}