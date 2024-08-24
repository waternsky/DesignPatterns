import { ConfigurationManager } from "./configManager"
import { DatabaseConnection } from "./dbConnection"
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
