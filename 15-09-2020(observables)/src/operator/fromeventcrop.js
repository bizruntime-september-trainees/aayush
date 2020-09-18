"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
function addClickHandler(handler) {
    document.addEventListener('click', handler);
}
function removeClickHandler(handler) {
    document.removeEventListener('click', handler);
}
var clicks = rxjs_1.fromEventPattern(addClickHandler, removeClickHandler);
clicks.subscribe(function (x) { return console.log(x); });
