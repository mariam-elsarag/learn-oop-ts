"use strict";
class User1 {
    register(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    login(email, password) {
        if (this.email === email && this.password === password) {
            return "Successfully loged in";
        }
        else {
            return "Failed to logged in";
        }
    }
}
let u = new User1();
u.register("mariam", "mariam@gmail.com", "123");
console.log(u.login("mariam@gmail.com", "123"));
