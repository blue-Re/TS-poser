"use strict";
/*
  接口：接口就是用来为一些类型命名去做检查
    相当于是提前准备变量名和类型
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var md5 = function (key, value) {
    return key + '----' + value;
};
console.log(md5(111, '函数接口---'));
var Rap = /** @class */ (function () {
    function Rap(name) {
        this.name = name;
    }
    Rap.prototype.sing = function () {
        console.log(this.name + ' 唱歌！');
    };
    return Rap;
}());
var rap = new Rap('GALI');
rap.sing();
var Man = /** @class */ (function () {
    function Man(name) {
        this.name = name;
    }
    Man.prototype.eat = function () {
        console.log(this.name + ' 吃饭！');
    };
    return Man;
}());
// 继承+实现
var CoderMan = /** @class */ (function (_super) {
    __extends(CoderMan, _super);
    function CoderMan(name) {
        return _super.call(this, name) || this;
    }
    CoderMan.prototype.breath = function () {
        console.log(this.name + '这个人再呼吸!');
    };
    CoderMan.prototype.eat = function () {
        console.log(this.name + '这个人再吃饭!');
    };
    return CoderMan;
}(Man));
var coderMan = new CoderMan('李白');
coderMan.breath();
coderMan.eat();
