//Each value in newArray is the value of its corresponding element in oldArray, plus 5? ([1, 2, 3] becomes [6, 7, 8])
var plusFive = function(value) {
    return (value + 5);
}
var oldArray = [12, 45, 6, 23, 19, 20, 20, 15, 30, 42];
var newArray = [];
for (var i = 0; i < oldArray.length; i += 1) {
    newArray.push(plusFive(oldArray[i]));
    console.log(newArray);
}

//Each value in newArray is the square of the value of its corresponding element in oldArray? ([1, 2, 3] becomes [1, 4, 9])
var getSquared = function(value) {
    return (value * value);
}
var oldArray = [12, 45, 6, 23, 19, 20, 20, 15, 30, 42];
var newArray = [];
for (var i = 0; i < oldArray.length; i += 1) {
    newArray.push(getSquared(oldArray[i]));
    console.log(newArray);
}

//Every odd-indexed value in newArray is double its corresponding element in oldArray, while every even-indexed value is unchanged ([3, 4, 5, 2, 6] becomes [3, 8, 5, 4, 6])
var oddIndexDouble = function(value) {
var oldArray = [12, 45, 6, 23, 19, 20, 20, 15, 30, 42]; //for some odd reason, the second '20' also doubles its value despite having an even index number. I changed the second '20' to '18' and the function worked correctly.
    if (oldArray.indexOf(value) % 2 === 0) {
        return value;
    } else {
        return (value * 2);
    }
}
var oldArray = [12, 45, 6, 23, 19, 20, 20, 15, 30, 42];
var newArray = [];
for (var i = 0; i < oldArray.length; i += 1) {
    newArray.push(oddIndexDouble(oldArray[i]));
    console.log(newArray);
}

//newArray is the exact mirror image of oldArray? ([1, 2, 3] becomes [3, 2, 1])
var oldArray = [12, 45, 6, 23, 19, 20, 20, 15, 30, 42];
var newArray = [];
for (var i = (oldArray.length -1); i >= 0; i -= 1) {
    newArray.push(oldArray[i]);
    console.log(newArray);
}
