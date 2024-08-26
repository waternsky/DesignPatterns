class Pizza {
    public size: string
    public crust: string
    public toppings: string[]
    
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
