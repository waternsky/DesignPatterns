class FmtDate extends Date {

    constructor() {
        super()
    }

    public get getFmtDate() {
        return `${this.leftPad(this.getUTCFullYear())}-${this.leftPad(this.getUTCMonth())}-${this.leftPad(this.getUTCDate())}`
    }

    public get getFmtTime() {
        return `${this.leftPad(this.getUTCHours())}:${this.leftPad(this.getUTCMinutes())}:${this.leftPad(this.getUTCSeconds())}`
    }

    public get getFmtTimestamp() {
        return this.getFmtDate + ' ' + this.getFmtTime
    }

    private leftPad = (num: number) => num < 10 ? '0' + num : num
}

export class Logger {

    private static instance: Logger
    private constructor() { }

    public log(message: string) {
        const date = new FmtDate()
        console.log(`${date.getFmtTimestamp} ${message}`)
    }

    public static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger()
        }
        return Logger.instance
    }
}
