"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var person = /** @class */ (function () {
    function person() {
    }
    person.prototype.greet = function () {
        console.log("hey there ");
    };
    return person;
}());
var programmer = /** @class */ (function (_super) {
    __extends(programmer, _super);
    function programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    programmer.prototype.greet = function () {
        console.log("hello there how r u??");
    };
    programmer.prototype.greetnew = function () {
        _super.prototype.greet.call(this);
    };
    return programmer;
}(person));
var aprogrammer = new programmer();
aprogrammer.greet();
