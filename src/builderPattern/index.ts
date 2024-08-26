import { PizzaBuilder } from "./pizzaBuilder";

const pizza = new PizzaBuilder()
    .setSize("Large")
    .setCrust("Thin Crust")
    .addTopping("Olive")
    .addTopping("Jalapeno")
    .prepare()

pizza.showOrder()
