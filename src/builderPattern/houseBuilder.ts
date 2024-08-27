class House {
    private garage: boolean
    private pool: boolean
    private fence: boolean
    private garden: boolean
    private rooms: number

    public constructor(builder: HouseBuilder) {
        this.pool = builder.pool
        this.fence = builder.fence
        this.garage = builder.garage
        this.garden = builder.garden
        this.rooms = builder.rooms
    }

    showDetails() {
        console.log(`
House has ${this.rooms} rooms,
with ${this.fence ? "fence" : "no fence"},
with ${this.garden ? "garden": "no garden"},
with ${this.garage ? "garage": "no garage"},
with ${this.pool ? "Swimming Pool": "No Swimming Pool"}`)
    }
}

export class HouseBuilder {
    public rooms: number
    public garage: boolean
    public pool: boolean
    public fence: boolean
    public garden: boolean

    constructor() {
        this.pool = false
        this.fence = true
        this.garage = false
        this.garden = false
        this.rooms = 2
    }

    setRooms(rooms: number) {
        this.rooms = rooms
        return this
    }

    setGarage(bl: boolean) {
        this.garage = bl
        return this
    }

    setSwimmingPool(bl: boolean) {
        this.pool = bl
        return this
    }

    setGarden(bl: boolean) {
        this.garden = bl
        return this
    }

    setFence(bl: boolean) {
        this.fence = bl
        return this
    }

    build(): House {
        return new House(this) 
    }
}
