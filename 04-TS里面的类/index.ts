// TS 中定义类
class Person {
  name: string;
  age: number;
  // 类实例化对象时调用该方法
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  run(): void {
    console.log(this.name + ' is running!');
  }
  getName(): string {
    return this.name;
  }
  setName(value: string): void {
    this.name = value
  }
}

const person = new Person('zhangsan', 145)
person.run()

console.log(person.getName());
person.setName('lisi')
console.log(person.getName());



// TS 实现继承
class Son extends Person {
  constructor(name: string, age: number) {
    super(name, age);
  }
}
const son = new Son('儿子', 5)
son.run()
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
class Animal {
  name: string;
  age: number;
  static sex: string = '女'
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  run(): void {
    console.log(`${this.name} is running`);
  }
  static breath(): void {
    // 想要在静态方法中使用 自身的属性的话 需要专门定义出一个静态的属性
    console.log(`${this.name} 在呼吸`, this.name); // Animal 在呼吸 Animal
  }
  static saySex(): void {
    console.log(`它是个${this.sex}的！`);
  }
  eat(): void {
    console.log('动物在吃');
  }
}
const animal = new Animal('cat', 22)
animal.run()
Animal.breath() //Animal 在呼吸 Animal
Animal.saySex() // 它是个女的！

/* 
  多态
  不同的子类去继承父类，然后去表现出不同的形式
*/
class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age)
  }
  eat(): void {
    console.log('狗在吃肉！');
  }
}
const dog = new Dog('旺财', 22)
dog.eat()

class Cat extends Animal {
  constructor(name: string, age: number) {
    super(name, age)
  }
  eat(): void {
    console.log('猫在吃鱼')
  }
}
const cat = new Cat('cat', 22)
cat.eat()

/* 
  抽象类 不可以直接实例化
  抽象类是提供给其他继承的子类的基类，得靠子类继承这个基类去实现内部的抽象方法
  抽象类中可以没有抽象方法，但是抽象方法必须定义在抽象类中，抽象类中的方法必须在派生活类中去实现

  继承抽象类的子类 必须去实现抽象类中的方法
*/

abstract class Foods {
  name: string
  constructor(name: string) {
    this.name = name
  }
  abstract sayName(): any;
}

class Rice extends Foods {
  constructor(name: string) {
    super(name)
  }
  sayName(): void {
    console.log(`食物的名称是${this.name}`);
  }
}
const rice = new Rice('大米')
rice.sayName()

class Milk extends Foods {
  constructor(name: string) {
    super(name)
  }
  sayName(): void {
    console.log(`食物的名称是${this.name}`);
  }
}
const milk = new Milk('牛奶')
milk.sayName()