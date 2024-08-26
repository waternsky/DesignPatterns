class Computer {
    private CPU: string
    private GPU: string
    private RAM: string
    private storage: string
    private powerSupply: string
    
    public constructor(builder: ComputerBuilder) {
        this.CPU = builder.getCPU() 
        this.GPU = builder.getGPU()
        this.RAM = builder.getRAM()
        this.storage = builder.getStorage()
        this.powerSupply = builder.getPowerSupply()
    }

    public specs() {
        console.log(`
Specs:
CPU: ${this.CPU}
GPU: ${this.GPU}
RAM: ${this.RAM}
Storage: ${this.storage}
PowerSupply: ${this.powerSupply}`)
    }
}

export class ComputerBuilder {
    private CPU: string
    private GPU: string
    private RAM: string
    private storage: string
    private poweSupply: string

    public getCPU() {
        return this.CPU
    }
    
    public getGPU() {
        return this.GPU
    }

    public getRAM() {
        return this.RAM
    }

    public getStorage() {
        return this.storage
    }

    public getPowerSupply() {
        return this.poweSupply
    }

    public constructor() {
        this.CPU = "Intel i3" 
        this.GPU = "NVIDIA RTX 3090"
        this.RAM = "8GB"
        this.storage = "256GB SSD"
        this.poweSupply = "450W"
    }

    public setCPU(cpu: string) {
        this.CPU = cpu
        return this
    }

    public setGPU(gpu: string) {
        this.GPU = gpu
        return this
    }

    public setRAM(ram: string) {
        this.RAM = ram
        return this
    }

    public setStorage(storage: string) {
        this.storage = storage
        return this
    }

    public setPowerSupply(powerSupply: string) {
        this.poweSupply = powerSupply
        return this
    }

    public build(): Computer {
        return new Computer(this)
    }
}
