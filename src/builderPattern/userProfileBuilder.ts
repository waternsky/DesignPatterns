class UserProfile {
    private username: string
    private email: string
    private phone: string
    private address: string
    private profilePicture: string

    public constructor(builder: UserProfileBuilder) {
        this.profilePicture = builder.profilePicture
        this.address = builder.address
        this.email = builder.email
        this.username = builder.username
        this.phone = builder.phone
    }

    public showProfile() {
        console.log(`
${this.username} <${this.email}>
Address: ${this.address} - ${this.phone}
Profile Picture: ${this.profilePicture}
`)
    }
}

export class UserProfileBuilder {
    public username: string
    public email: string
    public phone: string
    public address: string
    public profilePicture: string

    public constructor() {
        this.username = ""
        this.email = ""
        this.phone = ""
        this.address = ""
        this.profilePicture = ""
    }

    setUsername(username: string) {
        this.username = username
        return this
    }

    setEmail(email: string) {
        this.email = email
        return this
    }

    setPhone(phone: string) {
        this.phone = phone
        return this
    }

    setAddress(address: string) {
        this.address = address
        return this
    }

    setProfilePicture(profilePicture: string) {
        this.profilePicture = profilePicture
        return this
    }

    build() {
        return new UserProfile(this)
    }
}
