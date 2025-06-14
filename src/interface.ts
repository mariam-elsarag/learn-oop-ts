interface Auth {
  register(username: string, email: string, password: string): void;
  login(email: string, password: string): void;
}

class User1 implements Auth {
  private username?: string;
  private password?: string;
  public email?: string;

  register(username: string, email: string, password: string): void {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  login(email: string, password: string): {} {
    if (this.email === email && this.password === password) {
      return "Successfully loged in";
    } else {
      return "Failed to logged in";
    }
  }
}
let u = new User1();
u.register("mariam", "mariam@gmail.com", "123");
console.log(u.login("mariam@gmail.com", "123"));
