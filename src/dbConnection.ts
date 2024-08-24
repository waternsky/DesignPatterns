export class DatabaseConnection {
    private static instance: DatabaseConnection
    private static count: number = 0
    private constructor() { }

    public static getInstance() {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection()
        }
        return DatabaseConnection.instance
    }

    public connect() {
        if (DatabaseConnection.count >= 1) return
        DatabaseConnection.count++
        console.log("Database connect")
    }

    public disconnect() {
        console.log("Database disconnected")
        DatabaseConnection.count--
    }
}
