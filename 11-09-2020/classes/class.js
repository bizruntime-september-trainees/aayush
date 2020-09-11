"use strict";
exports.__esModule = true;
var person = /** @class */ (function () {
    function person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    person.prototype.getfullname = function () {
        return this.firstname + " " + this.lastname;
    };
    return person;
}());
var aperson = new person("aayush", "kumar");
console.log(aperson.getfullname());
