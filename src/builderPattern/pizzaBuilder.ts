class Pizza {
    private size: string
    private crust: string
    private toppings: string[]
    
    public constructor(builder: PizzaBuilder) {
        this.size = builder.size    
        this.crust = builder.crust
        this.toppings = builder.toppings
    }

    public showOrder() {
        console.log(`
Pizza size: ${this.size}
Crust: ${this.crust}
Toppings: ${this.toppings}`)
    }
}


export class PizzaBuilder {
    public size: string
    public crust: string
    public toppings: string[]

    public constructor() {
        this.size = "Medium"
        this.crust = "Thin Crust"
        this.toppings = ["Cheese"]
    }

    public setSize(size: string) {
        this.size = size
        return this
    }

    public setCrust(crust: string) {
        this.crust = crust
        return this
    }

    public addTopping(topping: string) {
        this.toppings.push(topping)
        return this
    }

    public prepare(): Pizza {
        return new Pizza(this)
    }
}

class Pizza2 {
    private size: string
    private crust: string
    private toppings: string[] 

    public constructor(builder: PizzaBuilder2) {
        this.size = builder.getSize()
        this.crust = builder.getCrust()
        this.toppings = builder.getToppings()
    }

    public showOrder() {
        console.log(`
Pizza size: ${this.size}
Crust: ${this.crust}
Toppings: ${this.toppings}`)
    }
}

export class PizzaBuilder2 {
    private size: string
    private crust: string
    private toppings: string[]

    public getSize() {
        return this.size
    }

    public getCrust() {
        return this.crust
    }

    public getToppings() {
        return this.toppings
    }

    public constructor() {
        this.size = "Medium"
        this.crust = "Thin Crust"
        this.toppings = ["Cheese"]
    }

    public setSize(size: string) {
        this.size = size
        return this
    }

    public setCrust(crust: string) {
        this.crust = crust
        return this
    }

    public addTopping(topping: string) {
        this.toppings.push(topping)
        return this
    }

    public prepare(): Pizza2 {
        return new Pizza2(this)
    }
}
