"use strict";
// learn abstraction
class Notify {
    // shared method
    log(message) {
        console.log("Logging message:", message);
    }
}
class EmailNotification extends Notify {
    send(message) {
        console.log("📧 Email sent:", message);
    }
}
class SMSNotification extends Notify {
    send(message) {
        console.log("📱 SMS sent:", message);
    }
}
const n = new EmailNotification();
n.send("New message roma");
