import { ConfigurationManager } from "./configManager"
import { Logger } from "./logger"


const l1 = Logger.getInstance()
const l2 = Logger.getInstance()

// logging
l1.log("hi there")
setTimeout(() => {
    l2.log("noice")
    console.log(l1 === l2)
}, 3000)

// ConfigurationManager
const c1 = ConfigurationManager.getInstance()
const c2 = ConfigurationManager.getInstance()
c2.set("apikey", 123)
console.log(c1.get("apikey"))
console.log(c1 === c2)
