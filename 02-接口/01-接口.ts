/* 
  接口：接口就是用来为一些类型命名去做检查
    相当于是提前准备变量名和类型
*/

/* 
  这里不可以说传给 printLabel 的对象实现了这个接口 
  我们只关注值的外形，只要传入的对象满足接口所提到的必要条件，那么他就是被允许的
  这里类型检查器不回去检查属性的顺序
*/
interface LabelledValue {
  label: string;
}
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj);
}
let myObj = { size: 10, label: 'size is 10' };
printLabel(myObj);

/* 
  可选属性
  有时接口的属性不全都是必须的，可以通过以下这种方式只传入部分属性即可，我们称之为 options bags 模式

  带有可选属性的接口与普通的接口差不多，就是在可选属性后面加一个 ? 
*/
interface SquareConfig {
  color?: string
  width?: number
}
function createSquare(config: SquareConfig): { color: string, width: number } {
  let newSquare = { color: 'white', width: 200 }
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.width = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({ color: 'yellow', width: 100 })
let mySquare1 = createSquare({ width: 50 })
console.log(mySquare);
console.log(mySquare1);

/* 
  只读属性
  一些对象属性只能在对象刚刚创建的时候修改其值，可以在属性名前使用 readonly 来指定只读属性
*/
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 1, y: 2 }
// p1.x = 5 // error


/* 加密的函数接口--- 对方法传入的参数以及返回值进行约束 批量约束 */
interface secret {
  (key: number, value: string): string;
}
const md5: secret = (key: number, value: string) => {
  return key + '----' + value;
}
console.log(md5(111, '函数接口---'));

/* 类类型接口 */
interface Song {
  name: string;
  sing(str: string): void;
}
class Rap implements Song {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sing(): void {
    console.log(this.name + ' 唱歌！');
  }
}
const rap = new Rap('GALI')
rap.sing()

/* 接口继承接口 */
interface Life {
  breath(): void;
}
class Man {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat(): void {
    console.log(this.name + ' 吃饭！');
  }
}
// 继承+实现
class CoderMan extends Man implements Life {
  constructor(name: string) {
    super(name)
  }
  breath(): void {
    console.log(this.name + '这个人再呼吸!');
  }
  eat(): void {
    console.log(this.name + '这个人再吃饭!');
  }
}
const coderMan = new CoderMan('李白')
coderMan.breath()
coderMan.eat()


