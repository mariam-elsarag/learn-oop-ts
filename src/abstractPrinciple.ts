// learn abstraction principle
class SendEmail {
  constructor(
    public from: string,
    public to: string,
    public subject: string,
    public message: string
  ) {}
  send() {
    this.validateEmailAddress();
    this.validateEmailSubject();
    this.validateEmailMessage();
    console.log("Send email successfully ");
  }
  private validateEmailAddress() {
    if (!this.from.includes("@") || !this.to.includes("@")) {
      throw new Error("Invalid email address");
    }
  }
  private validateEmailSubject() {
    if (this.subject?.length < 2) {
      throw new Error("subject can't be 2 character");
    }
  }
  private validateEmailMessage() {
    if (this.subject?.length < 10) {
      throw new Error("Message can't be less than 10 characters");
    }
  }
}
