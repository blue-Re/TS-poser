/* 
  命名空间:
    在编码过程中,尤其是团队多成员合作的情况下,有可能命名会冲突,所以就会有命名空间的问题

    使用语法: namespace 空间名称 {}
      如果想在空间外访问空间内部的方法和属性是,需要将其暴露出去
      如果在空间外想实例空间内部的类的话,需要在类名前 加上 空间名.类名 这种格式

      如果要用模块化的话,需要将命名空间暴露出来,然后引入对应的模块去使用
*/

namespace A {
  export class Dog{
    eat() {
      console.log('A狗仔吃东西');
    }
  }
}

namespace B {
  export class Dog{
    eat() {
      console.log('B狗仔吃东西');
    }
  }
}

const Adog = new A.Dog()
const Bdog = new B.Dog();
Adog.eat()
Bdog.eat()