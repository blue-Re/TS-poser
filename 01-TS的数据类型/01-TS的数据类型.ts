/* TS的数据类型 */

/* 布尔值 */
let isShow: boolean = false
console.log(typeof isShow);

/* 数字 */
let num: number = 11
console.log(typeof num);

/* 字符串 */
let str: string = '哈哈哈'
console.log(typeof str);

/* 数组 */
let arr: number[] = [1, 2, 3];/* 第一种方式 */
let arr1: Array<number> = [1, 2, 3]/* 第二种方式 使用泛型 */
console.log(typeof arr);

/* 元组 */
/* 元组相当于是一个数组里边可以存放不同种类的元素，但是存放的元素要与后来定义的元素类型保持一致，达到一一对应的作用 */
let tup: [string, number] = ['hah', 1]
console.log(tup[0], tup[1]);

/* 枚举 */
/* 枚举类型：可以定义为一个类型的数据，里边包含了多个名字 */
/* 默认情况下，从0开始为元素编号，也可以自己手动编号 */
enum Color {
  yellow, blue, red
}
let color: Color = Color.yellow;
console.log(color); // 0

enum Food {
  correct = 1,
  fish = 2,
  tomato = 3
}
let food: Food = Food.fish
console.log(food); // 2
/* 我们也可以通过枚举值来找出对应的枚举名字 */
let foodName: string = Food[3];
console.log(foodName);// tomato

/* any类型 */
/* 当我们不希望指定变量的类型时，可以设置为any类型, 该类型可以是任意值，并且可以任意修改变量的类型 */
let freedom: any = 'hello'
freedom = 222
console.log(freedom);

/* void */
/* void没有任何类型，当一个函数没有返回值时，其返回值类型是void */
/* 当声明一个变量的值的类型为 void 时，只能赋予这个变量的值为 undefined || null */
let other: void = undefined
let other1: void = null
console.log(other, other1);

/* null和undefined */
/* null和undefined这是属于两个类型 */
/* 默认情况下，null和undefined时所有类型的字类型，就是可以把null和undefined赋值给number类型的变量 */
let n1: undefined = undefined
let n2: null = null

/* never类型 */
/* never类型表示的是永不存在的值的类型 */
/* 例如：never类型是那些总是会抛出异常或根本就不会有返回值的 函数表达式 或 箭头函数表达式 的返回值的类型 */
/* never类型是任何类型的字类型，也可以赋值给任何类型；never没有子类型 */
/* 变量也可以是never类型，当他们被永不为真的类型保护所约束时 */

// 返回的函数必须是永不存在
function test(params: string): never {
  throw new Error(params + '出错了！')
}
// console.log(test('name'));

// 返回值类型为 never
function add(params: string) {
  return Error(params + '出错了')
}
console.log(add('111'));

// 返回的never的函数存在无法到达的终点
function Loop(params: number): never {
  while (true) {
    console.log(params);
  }
}

/* Object */
const obj: object = {
  name: 'zhangsan',
  age: 20
}

/* 类型断言 */
/* 通过类型断言可以让编译器知道编码人员自己在做什么 */
/* 类型断言好比 类型转换 但是不可以进行特殊的数据检查和解构 没有运行时的影响，只在编译阶段起作用*/

/* 第一种写法 */
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length

/* 第二种写法 */
let value:any = 'this is a value'
let valueStrLength:number = (value as string).length

/* 当在TS中使用JSX时，只有 as 是被允许的 */











