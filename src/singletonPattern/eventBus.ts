type Event = {
    eventName: string,
    data: any
}


export class EventBus {

    private static instance: EventBus
    private constructor() {}
    private static events: Event[] = []
    
    public static getInstance() {
        if (!EventBus.instance) {
            EventBus.instance = new EventBus()
        }
        return EventBus.instance
    }

    public publish(event: string, data: any) {
        let e: Event = { eventName: event, data}
        EventBus.events.push(e)
    }

    public subscribe(event: string, callback: (data: any) => void) {
        for (let i = 0; i < EventBus.events.length; ++i) {
            const ev = EventBus.events[i]
            if (ev.eventName === event) {
                callback(ev.data)
                return
            }
        } 
    }
}
