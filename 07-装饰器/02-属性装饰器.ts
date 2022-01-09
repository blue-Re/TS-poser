/* 
  属性装饰器
    属性装饰器会在运行时当作函数被调用,传入下列2个参数
      1. 对于静态成员来说是类的构造函数, 对于实例成员是类的原型对象
      2. 成员的属性名称
*/

namespace propertyAbout {
  // 类装饰器
  function decoratorFactory(params: string) {
    return function (currentClass: any) {
      // 此时的params是要传入的参数
      console.log(params);
      // 返回的函数内部的参数,才代表的是当前类
      console.log(currentClass);
  
      // 在返回的函数内部 去扩展类的属性和方法
    }
  }

  // 属性装饰器
  function propertyDecorator(params: string) {
    return function (target: any, property: any) {
      console.log(target);
      console.log(property);

      target[property] = params;
    }
  }
  @decoratorFactory('111111111')
  class Test {
    @propertyDecorator('属性装饰器新传入的参数')
    name: string | undefined;
    constructor() { }

    getData(): void {
      console.log(this.name);
    }
  }
  const t: any = new Test();
  t.getData();
}
