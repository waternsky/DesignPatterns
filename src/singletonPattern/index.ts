import { AppState } from "./appState"
import { ConfigurationManager } from "./configManager"
import { Counter } from "./counter"
import { DatabaseConnection } from "./dbConnection"
import { EventBus } from "./eventBus"
import { Logger } from "./logger"


const logger = Logger.getInstance()

// ConfigurationManager
const c1 = ConfigurationManager.getInstance()
logger.log("c1 is created")
const c2 = ConfigurationManager.getInstance()
logger.log("c2 is created")
c2.set("apikey", "123jiqwod")
logger.log("API key: "+c1.get("apikey"))
logger.log("Instance check: c1 === c2 "+(c1 === c2))

// dbConnection
const con1 = DatabaseConnection.getInstance()
logger.log("con1 is created")
const con2 = DatabaseConnection.getInstance()
logger.log("con2 is created")
logger.log("DB Instance check: "+(con1 === con2))

con1.connect()
con2.connect()

// Event bus
const eventBus1 = EventBus.getInstance()
eventBus1.publish("userLoggedIn", { username: "Kushal" })

const eventBus2 = EventBus.getInstance()
eventBus2.subscribe("userLoggedIn", (data) => {
    console.log(`User ${data.username} logged in succesfully`)
})
logger.log("EventBus Instance check: "+(eventBus1 === eventBus2))

// Counter
const counter1 = Counter.getInstance()
counter1.increment()
counter1.increment()
const counter2 = Counter.getInstance()
logger.log("Counter: "+counter2.getValue())
logger.log("Counter Instance check: "+(counter1 === counter2))
// Still runs but use ts rules, so that it doesn't compile to begin with
// const counter3 = new Counter();
// counter3.increment()
// logger.log("Counter: "+counter3.getValue())

// App state
const appState1 = AppState.getInstance()
appState1.setState("isLoggedIn", true)
const appState2 = AppState.getInstance()
logger.log("Appstate: "+appState2.getState("isLoggedIn"))
logger.log("AppState Instance check: "+(appState2 === appState1))
