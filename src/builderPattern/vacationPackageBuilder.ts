class VacationPackage {
    private destination: string
    private hotel: string
    private transportation: string
    private meals: string
    private activities: string[]

    public constructor(builder: VacationPackageBuilder) {
        this.destination = builder.destination
        this.meals = builder.meals
        this.transportation = builder.transportation
        this.hotel = builder.hotel
        this.activities = builder.activities
    }

    public showPackage() {
        console.log(`
Hotel:          ${this.hotel}
Destination:    ${this.destination}
Transportation: ${this.transportation}
Meals:          ${this.meals}
Activities:     ${this.activities}
`)
    }
}

export class VacationPackageBuilder {
    public destination: string
    public hotel: string
    public transportation: string
    public meals: string
    public activities: string[]

    public constructor() {
        this.hotel = ""
        this.destination = ""
        this.transportation = ""
        this.meals = ""
        this.activities = []
    }

    public setHotel(hotel: string) {
        this.hotel = hotel
        return this
    }

    public setDestination(destination: string) {
        this.destination = destination
        return this
    }

    public setTransportation(transportation: string) {
        this.transportation = transportation
        return this
    }

    public setMeals(meals: string) {
        this.meals = meals
        return this
    }

    public setActivities(activities: string[]) {
        this.activities = activities
        return this
    }

    public build(): VacationPackage {
        return new VacationPackage(this)
    }

}
