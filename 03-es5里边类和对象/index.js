function Person(name, age) {
  this.name = name;
  this.age = age
  this.run = function () {
    console.log(`${this.name} is running!`);
  }
}
Person.prototype.eat = function () {
  console.log(this.name + '在吃东西');
}

const person = new Person('张三', 18)
person.run()
person.eat()

// 实现 冒充继承
// 冒充继承 可以继承构造函数里面的属性和方法
// 但是不可以继承原型链上面的属性和方法！
function Son() {
  // 改变this指向实现冒充继承
  Person.call(this)
}
const son = new Son('儿子',19)
son.run()
// son.eat() // 报错

// 实现原型链继承
// 既可以实现构造函数里面的方法，又可以实现原型链上的方法
// 问题？ 原型链继承时，实例化子类时，无法给父类传参
function Child(name, age) {
  
}

Child.prototype = new Person() // 原型链实现继承 将父类身上的属性和方法挂载到字类上
const child = new Child('wangwu', 11)
child.run()
child.eat()


/* 
  原型链 + 构造函数的组合继承模式
*/
function People(name, age) {
  // 对象冒充继承，实例化子类可以给父类传参
  Person.call(this, name, age)
}
People.prototype = new Person()
// 以下这种方式也可以
// People.prototype = Person.prototype
const people = new People('aka', 22)
people.run()
people.eat()