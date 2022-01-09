"use strict";
/*
  装饰器:
    装饰器是一种特殊的类型声明,它能够附加到类声明,方法,属性或者参数上,可以修改类的行为
    装饰器就是一个方法,可以注入到类\方法\属性参数上来扩展 类 属性 方法 参数 的功能
    
    常见的装饰器有 类装饰器 属性装饰器 方法装饰器 参数装饰器

    装饰器的写法 普通装饰器(无法传参)  装饰器工厂(可传参)
    
  类装饰器:(可以对被装饰的类进行扩展)
    类装饰器在类声明之前被声明(紧靠着类声明)
    类装饰器应用于类构造函数,可以用来监视,修改或或替换类定义

    类装饰器表达式会在运行时当作函数被调用,类的构造函数作为其唯一的参数
    如果类装饰器返回一个值,他会使用提供的构造函数来替换类的声明
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 传入一个参数
// 类装饰器 普通装饰器,无法传参
function classDecorator(params) {
    // params 指代的就是当前类
    // 对 Fish这个类的属性或者方法进行扩展
    params.prototype.age = 22;
    params.prototype.run = function () {
        console.log(this.name + "\u5728\u8FD0\u52A8");
    };
}
var Fish = /** @class */ (function () {
    function Fish(name) {
        this.name = name;
    }
    Fish.prototype.breath = function () {
        console.log(this.name + "\u5728\u547C\u5438!");
    };
    Fish = __decorate([
        classDecorator
    ], Fish);
    return Fish;
}());
var fish = new Fish('小齐鱼');
fish.breath();
console.log(fish.age);
fish.run();
// 装饰器工厂 可传参
function decoratorFactory(params) {
    return function (currentClass) {
        // 此时的params是要传入的参数
        console.log(params);
        // 返回的函数内部的参数,才代表的是当前类
        console.log(currentClass);
        // 在返回的函数内部 去扩展类的属性和方法
        currentClass.prototype.age = 242;
        currentClass.prototype.run = function () {
            console.log(this.name + "\u5728\u8FD0\u52A8");
        };
    };
}
var Elephant = /** @class */ (function () {
    function Elephant(name) {
        this.name = name;
    }
    Elephant.prototype.breath = function () {
        console.log(this.name + "\u5728\u547C\u5438!");
    };
    Elephant = __decorate([
        decoratorFactory({ name: '我是参数', count: 1 })
    ], Elephant);
    return Elephant;
}());
var elephant = new Elephant('长鼻子');
elephant.breath();
console.log(elephant.age);
elephant.run();
/* 类装饰器重载构造函数 */
function reloadConstructorDecorator(currentClass) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.oldInfo = '我是修改后的构造函数的信息!';
            return _this;
        }
        class_1.prototype.breath = function () {
            console.log("\u4FEE\u6539\u540E\u7684\u5728\u547C\u5438!");
            console.log(this.oldInfo);
        };
        return class_1;
    }(currentClass));
}
var Cow = /** @class */ (function () {
    function Cow() {
        this.oldInfo = '我是原来构造函数的信息!';
    }
    Cow.prototype.breath = function () {
        console.log("\u5728\u547C\u5438!");
    };
    Cow = __decorate([
        reloadConstructorDecorator
    ], Cow);
    return Cow;
}());
var cow = new Cow();
cow.breath();
