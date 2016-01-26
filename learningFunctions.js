/*
sayHello, which accepts one parameter, called name; it should return a greeting to a person with that name, i.e. "Hello, name".
areBothEven, which accepts two parameters, a and b; it should return true if a and b are both even, but false otherwise.
hotOrNot, which accepts one parameter, temp; it should return "hot" if temp is above 75, but should return "not hot" otherwise.
threeIfNull, which accepts one parameter,num. If num is null, it should return 3, but otherwise, it should return the value of num.
greatest, which accepts three parameters (x, y, and z), and returns the one with the greatest value. For example, greatest(5, 10, 1) would evaluate to 10.
*/

var sayHello = function(name) {
  return "Hello, " + name;
}
sayHello("Christine");

var areBothEven = function(a,b) {
    if (a % 2 === 0 && b % 2 === 0) {
        return "true"
    }
    else {
        return "false"
    }
}
areBothEven(2,3);

var hotOrNot = function(temp) {
    if (temp > 75) {
        return "hot";
    }
    else {
        return "not hot";
    }
}
hotOrNot(76);

var threeIfNull = function(num) {
    if (num === null) {
        return 3;
    } else {
        return num;
    }
}
threeIfNull(null);

var greatest = function(x,y,z) {
    if (x > y && x > z) {
        return x;
    } else if (y > x && y > z) {
        return y;
    } else if (z > x && z > y) {
        return z;
    } else {
        return "none";
    }
}
greatest(10,12,13);
