"use strict";
/*
  属性装饰器
    属性装饰器会在运行时当作函数被调用,传入下列2个参数
      1. 对于静态成员来说是类的构造函数, 对于实例成员是类的原型对象
      2. 成员的属性名称
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var propertyAbout;
(function (propertyAbout) {
    // 类装饰器
    function decoratorFactory(params) {
        return function (currentClass) {
            // 此时的params是要传入的参数
            console.log(params);
            // 返回的函数内部的参数,才代表的是当前类
            console.log(currentClass);
            // 在返回的函数内部 去扩展类的属性和方法
        };
    }
    // 属性装饰器
    function propertyDecorator(params) {
        return function (target, property) {
            console.log(target);
            console.log(property);
            target[property] = params;
        };
    }
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.prototype.getData = function () {
            console.log(this.name);
        };
        __decorate([
            propertyDecorator('属性装饰器新传入的参数')
        ], Test.prototype, "name", void 0);
        Test = __decorate([
            decoratorFactory('111111111')
        ], Test);
        return Test;
    }());
    var t = new Test();
    t.getData();
})(propertyAbout || (propertyAbout = {}));
