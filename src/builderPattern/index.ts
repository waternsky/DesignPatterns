import { ComputerBuilder } from "./computerBuilder";
import { HouseBuilder } from "./houseBuilder";
import { PizzaBuilder, PizzaBuilder2 } from "./pizzaBuilder";
import { RobotBuilder } from "./robotBuilder";
import { UserProfileBuilder } from "./userProfileBuilder";
import { VacationPackageBuilder } from "./vacationPackageBuilder";

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

const villa = new HouseBuilder()
    .setRooms(5)
    .setGarage(true)
    .setGarden(true)
    .setSwimmingPool(true)
    .setFence(true)
    .build()

villa.showDetails()

const cottage = new HouseBuilder()
    .setRooms(2)
    .setFence(false)
    .setGarden(true)
    .setGarage(false)
    .setSwimmingPool(false)
    .build()

cottage.showDetails()


const allInclusive = new VacationPackageBuilder()
    .setHotel("5-start resort")
    .setDestination("Hawaii")
    .setMeals("All inclusive")
    .setTransportation("Flight")
    .setActivities(["snorkeling", "hiking"])
    .build()

allInclusive.showPackage()


const robot = new RobotBuilder()
    .setArms("Hydrallic arms")
    .setLegs("Heavy duty-legs")
    .setTools(["Weilding tool", "Drill"])
    .setSensors(["Proximity sensors", "Temperature sensors"])
    .build()

robot.showRobot()

const detailedProfile = new UserProfileBuilder()
    .setUsername("janedoe")
    .setEmail("janedoe@example.com")
    .setPhone("123-456-7890")
    .setAddress("123 Main St, Springfield")
    .setProfilePicture("janedoe.jpg")
    .build();

detailedProfile.showProfile()
