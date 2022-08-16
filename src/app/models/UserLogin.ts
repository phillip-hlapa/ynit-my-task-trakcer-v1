export class UserLogin {
    login = {
        email: String,
        password: String
    }
    logForm() {
      console.log(this.login)
    }
}