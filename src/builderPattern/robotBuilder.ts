class Robot {
    private arms: string
    private legs: string
    private sensors: string[]
    private tools: string[]

    public constructor(builder: RobotBuilder) {
        this.arms = builder.arms
        this.legs = builder.legs
        this.sensors = builder.sensors
        this.tools = builder.tools
    }

    public showRobot() {
        console.log(`Robot has ${this.arms} arms & ${this.legs} legs
having ${this.sensors} sensors & ${this.tools} tools`)
    }
}

export class RobotBuilder {
    public arms: string
    public legs: string
    public sensors: string[]
    public tools: string[]

    public constructor() {
        this.arms = ""
        this.legs = ""
        this.sensors = []
        this.tools = []
    }

    public setArms(arm: string) {
        this.arms = arm
        return this
    }

    public setLegs(legs: string) {
        this.legs = legs
        return this
    }

    public setSensors(sensors: string[]) {
        this.sensors = sensors
        return this
    }

    public setTools(tools: string[]) {
        this.tools = tools
        return this
    }

    public build(): Robot {
        return new Robot(this)
    }
}
