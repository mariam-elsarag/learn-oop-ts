// learn abstraction
abstract class Notify {
  // shared method
  log(message: string) {
    console.log("Logging message:", message);
  }

  // abstract method – must be implemented by child
  abstract send(message: string): void;
}

class EmailNotification extends Notify {
  override send(message: string) {
    console.log("📧 Email sent:", message);
  }
}

class SMSNotification extends Notify {
  override send(message: string) {
    console.log("📱 SMS sent:", message);
  }
}
const n = new EmailNotification();
n.send("New message roma");
