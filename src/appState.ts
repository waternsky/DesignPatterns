export class AppState {
    private static instance: AppState
    private state: any
    private constructor() {
        this.state = {}
    }

    public static getInstance() {
        if (!AppState.instance) {
            AppState.instance = new AppState()
        }
        return AppState.instance
    }

    public setState(key: string, value: any) {
        this.state[key] = value
    }

    public getState(key: string) {
        return this.state[key]
    }
}
