"use strict";
exports.__esModule = true;
var numeric;
(function (numeric) {
    numeric[numeric["Up"] = 10] = "Up";
    numeric[numeric["Down"] = 2] = "Down";
    numeric[numeric["Left"] = 5] = "Left";
    numeric[numeric["Right"] = 6] = "Right";
})(numeric || (numeric = {}));
console.log(numeric);
var astring;
(function (astring) {
    astring["active"] = "act";
    astring["inactive"] = "inact";
    astring["hold"] = "hld";
    astring["stop"] = "stp";
})(astring || (astring = {}));
function status(status) {
    console.log(status);
}
status(astring.stop);
var hetro;
(function (hetro) {
    hetro[hetro["active"] = 1] = "active";
    hetro["inactive"] = "inact";
    hetro["hold"] = "2";
    hetro["stop"] = "stp";
})(hetro || (hetro = {}));
console.log(hetro.active + hetro.inactive);
