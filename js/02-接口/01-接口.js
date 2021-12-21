"use strict";
/*
  接口：接口就是用来为一些类型命名去做检查
    相当于是提前准备变量名和类型
*/
function printLabel(labelledObj) {
    console.log(labelledObj);
}
var myObj = { size: 10, label: 'size is 10' };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: 'white', width: 200 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.width = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'yellow', width: 100 });
var mySquare1 = createSquare({ width: 50 });
console.log(mySquare);
console.log(mySquare1);
var p1 = { x: 1, y: 2 };
// p1.x = 5 // error
