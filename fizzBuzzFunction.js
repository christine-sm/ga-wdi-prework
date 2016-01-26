/*Your job this time will be to write a function called fizzbuzz that takes a parameter num; for every number from 1 to num, this function should print (using console.log()) one of the following values:
        'fizz' if the number is divisible by 3 (but not 5)
        'buzz' if the number is divisible by 5 (but not 3)
        'fizzbuzz' if the number is divisible by both 3 and 5
        the number itself if it isn't divisible by either 3 or 5
Test your code for several different input values. What do you get if num is 1? 10? 30?*/

var fizzBuzz = function(num) {
    var result;
    var max = num;
for (var i = 1; i <=max; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
    console.log(result = 'fizzbuzz');
} else if (i % 5 === 0) {
    console.log(result = 'buzz');
} else if (i % 3 === 0) {
    console.log(result = 'fizz');
} else {
    console.log(result = i);
}
}
}
fizzBuzz(100);
