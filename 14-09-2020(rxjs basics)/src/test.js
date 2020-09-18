"use strict";
exports.__esModule = true;
var Subject_1 = require("rxjs/Subject");
var subject = new Subject_1.Subject();
subject.subscribe(function (data) { return addItem('observer 1:' + data); }, function (err) { return addItem(err); }, function () { return addItem('observer 1 completed'); });
subject.next('First thing is sent congrats');
function addItem(val) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
