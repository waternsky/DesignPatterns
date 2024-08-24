export class ConfigurationManager {
    
    private static instance: ConfigurationManager
    private config: any

    private constructor() {
        this.config = {}
    }

    public static getInstance() {
        if (!ConfigurationManager.instance) {
            this.instance = new ConfigurationManager()
        }
        return this.instance
    }

    public get(key: string) {
        return this.config[key]
    }
    
    public set(key: string, value: any) {
        this.config[key] = value
    }
}
