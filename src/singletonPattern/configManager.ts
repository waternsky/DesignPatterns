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

export class ConfigurationManager2 {
    
    private static instance: ConfigurationManager2
    private static config: any

    private constructor() {}

    public static getInstance() {
        if (!ConfigurationManager2.instance) {
            ConfigurationManager2.instance = new ConfigurationManager2()
        }
        return ConfigurationManager2.instance
    }

    public get(key: string) {
        return ConfigurationManager2.config[key]
    }

    public set(key: string, value: any) {
        ConfigurationManager2.config[key] = value
    }
}
