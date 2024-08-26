import { ComputerBuilder } from "./computerBuilder";
import { PizzaBuilder, PizzaBuilder2 } from "./pizzaBuilder";

const pizza = new PizzaBuilder()
    .setSize("Large")
    .setCrust("Thin Crust")
    .addTopping("Olive")
    .addTopping("Jalapeno")
    .prepare()

pizza.showOrder()

// If you want to disallow below behaviour, make instance variable private
const pizza2 = new PizzaBuilder()
pizza2.size = "Small"
pizza2.crust = "Thick Crust"
pizza2.toppings = ["Chilli", "Olives"]
pizza2.prepare().showOrder()


const pizza3 = new PizzaBuilder2()
const pz = pizza3.setSize("Small")
    .addTopping("Pineapple")
    .setCrust("Thin Crust")
    .addTopping("Olives")
    .prepare()

pz.showOrder()

const gamingPC = new ComputerBuilder()
    .setCPU("Intel i9")
    .setGPU("NVIDIA RTX 3090")
    .setRAM("16 GB")
    .setStorage("1TB SSD")
    .setPowerSupply("750W")
    .build()
gamingPC.specs()
