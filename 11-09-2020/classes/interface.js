"use strict";
exports.__esModule = true;
var foo = /** @class */ (function () {
    function foo() {
    }
    foo.prototype.getfullname = function () {
        return this.firstname + this.lastname;
    };
    return foo;
}());
var aperson = new foo();
var aobj = {
    firstname: "aayush",
    lastname: "kumar",
    getfullname: function () { return 'test'; }
};
aperson = aobj;
console.log(aobj);
