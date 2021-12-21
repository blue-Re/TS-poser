"use strict";
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
// TS 中定义类
var Person = /** @class */ (function () {
    // 类实例化对象时调用该方法
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.run = function () {
        console.log(this.name + ' is running!');
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (value) {
        this.name = value;
    };
    return Person;
}());
var person = new Person('zhangsan', 145);
person.run();
console.log(person.getName());
person.setName('lisi');
console.log(person.getName());
// TS 实现继承
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(name, age) {
        return _super.call(this, name, age) || this;
    }
    return Son;
}(Person));
var son = new Son('儿子', 5);
son.run();
console.log(son.getName());
/*
  类里面的修饰符
    public    公开的（默认） 在类 里面、外面、子类都可以访问
    protected 保护的         在类 里面、子类里面可以访问，在类外部不可以访问
    private   私有的         在类 里面可以访问 类外和子类都不可以访问
*/
/*
  静态方法
  
*/
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.run = function () {
        console.log(this.name + " is running");
    };
    Animal.breath = function () {
        // 想要在静态方法中使用 自身的属性的话 需要专门定义出一个静态的属性
        console.log(this.name + " \u5728\u547C\u5438", this.name); // Animal 在呼吸 Animal
    };
    Animal.saySex = function () {
        console.log("\u5B83\u662F\u4E2A" + this.sex + "\u7684\uFF01");
    };
    Animal.prototype.eat = function () {
        console.log('动物在吃');
    };
    Animal.sex = '女';
    return Animal;
}());
var animal = new Animal('cat', 22);
animal.run();
Animal.breath(); //Animal 在呼吸 Animal
Animal.saySex(); // 它是个女的！
/*
  多态
  不同的子类去继承父类，然后去表现出不同的形式
*/
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age) {
        return _super.call(this, name, age) || this;
    }
    Dog.prototype.eat = function () {
        console.log('狗在吃肉！');
    };
    return Dog;
}(Animal));
var dog = new Dog('旺财', 22);
dog.eat();
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age) {
        return _super.call(this, name, age) || this;
    }
    Cat.prototype.eat = function () {
        console.log('猫在吃鱼');
    };
    return Cat;
}(Animal));
var cat = new Cat('cat', 22);
cat.eat();
/*
  抽象类 不可以直接实例化
  抽象类是提供给其他继承的子类的基类，得靠子类继承这个基类去实现内部的抽象方法
  抽象类中可以没有抽象方法，但是抽象方法必须定义在抽象类中，抽象类中的方法必须在派生活类中去实现

  继承抽象类的子类 必须去实现抽象类中的方法
*/
var Foods = /** @class */ (function () {
    function Foods(name) {
        this.name = name;
    }
    return Foods;
}());
var Rice = /** @class */ (function (_super) {
    __extends(Rice, _super);
    function Rice(name) {
        return _super.call(this, name) || this;
    }
    Rice.prototype.sayName = function () {
        console.log("\u98DF\u7269\u7684\u540D\u79F0\u662F" + this.name);
    };
    return Rice;
}(Foods));
var rice = new Rice('大米');
rice.sayName();
var Milk = /** @class */ (function (_super) {
    __extends(Milk, _super);
    function Milk(name) {
        return _super.call(this, name) || this;
    }
    Milk.prototype.sayName = function () {
        console.log("\u98DF\u7269\u7684\u540D\u79F0\u662F" + this.name);
    };
    return Milk;
}(Foods));
var milk = new Milk('牛奶');
milk.sayName();
