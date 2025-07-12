function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
addTwo(5);
getUpper('hello');
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return '200 OK';
}
var getHello = function (s) {
    return '';
};
var heros = ['thor', 'spiderman', 'ironman'];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(err) {
    console.log(err);
}
function handleError(err) {
    throw new Error(err);
}
