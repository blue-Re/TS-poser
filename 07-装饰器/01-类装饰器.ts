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

// 传入一个参数
// 类装饰器 普通装饰器,无法传参
function classDecorator(params: any) {
  // params 指代的就是当前类
  // 对 Fish这个类的属性或者方法进行扩展
  params.prototype.age = 22;
  params.prototype.run = function () {
    console.log(`${this.name}在运动`);
  }
}
@classDecorator
class Fish {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  breath(): void {
    console.log(`${this.name}在呼吸!`);
  }
}
const fish: any = new Fish('小齐鱼');
fish.breath();
console.log(fish.age)
fish.run()



// 装饰器工厂 可传参
function decoratorFactory(params: object) {
  return function (currentClass: any) {
    // 此时的params是要传入的参数
    console.log(params);
    // 返回的函数内部的参数,才代表的是当前类
    console.log(currentClass);

    // 在返回的函数内部 去扩展类的属性和方法
    currentClass.prototype.age = 242
    currentClass.prototype.run = function () {
      console.log(`${this.name}在运动`);
    }
  }
}
@decoratorFactory({ name: '我是参数', count: 1 })
class Elephant {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  breath(): void {
    console.log(`${this.name}在呼吸!`);
  }
}

const elephant: any = new Elephant('长鼻子');
elephant.breath()
console.log(elephant.age)
elephant.run()



/* 类装饰器重载构造函数 */
function reloadConstructorDecorator(currentClass: any) {

  return class extends currentClass {
    oldInfo:any = '我是修改后的构造函数的信息!'

    breath(): void {
      console.log(`修改后的在呼吸!`);
      console.log(this.oldInfo);
    }
  }
  
}
@reloadConstructorDecorator
class Cow {
  oldInfo: string;
  constructor() {
    this.oldInfo = '我是原来构造函数的信息!'
  }
  breath(): void {
    console.log(`在呼吸!`);
  }
}
const cow:any = new Cow()
cow.breath()
