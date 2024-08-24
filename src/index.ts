import { Logger } from "./logger"


const l1 = Logger.getInstance()
const l2 = Logger.getInstance()

l1.log("hi there")
setTimeout(() => {
    l2.log("noice")
    console.log(l1 === l2)
}, 3000)
