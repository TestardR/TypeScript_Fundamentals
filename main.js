// compiling and variables
var n = 5;
var dec = 5.232;
var obj = {
    x: 5,
    y: 9.4
};
// explicit definitions
var a = 5.23;
var obj1 = {
    x: 22,
    y: 3.2
};
var obj2 = {
    x: 22,
    y: 33
};
var obj3 = {
    x: 101,
    y: 222
};
obj3.z = 22;
// functions
var add = function (x, y) { return x + y; };
var sum = function (x, y) { return x + y; };
var add1 = function (x, y) { return x + y; };
add1(123, obj3.z);
var add2 = function (nums) { return nums.a + nums.b; };
// unions
// number or string
var maybeNum = 5;
maybeNum = 'hello';
maybeNum = add;
var dogCat = {
    bark: 'bark',
    purr: 'purr'
};
if (typeof dogCat === 'string') {
    console.log('you are a string');
}
// casting
// force typescript
add(dogCat, dogCat);
// any
var doesAnything = function (x) {
    console.log(x);
};
doesAnything({});
doesAnything(function () { return 5; });
