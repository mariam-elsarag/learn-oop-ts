"use strict";
// learn abstraction principle
class SendEmail {
    constructor(from, to, subject, message) {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.message = message;
    }
    send() {
        this.validateEmailAddress();
        this.validateEmailSubject();
        this.validateEmailMessage();
        console.log("Send email successfully ");
    }
    validateEmailAddress() {
        if (!this.from.includes("@") || !this.to.includes("@")) {
            throw new Error("Invalid email address");
        }
    }
    validateEmailSubject() {
        var _a;
        if (((_a = this.subject) === null || _a === void 0 ? void 0 : _a.length) < 2) {
            throw new Error("subject can't be 2 character");
        }
    }
    validateEmailMessage() {
        var _a;
        if (((_a = this.subject) === null || _a === void 0 ? void 0 : _a.length) < 10) {
            throw new Error("Message can't be less than 10 characters");
        }
    }
}
