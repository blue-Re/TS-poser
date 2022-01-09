/* T 表示泛型 可以支持不特定的数据类型 要求i传入的参数和返沪的参数类型一致 */
/* 使用泛型，不仅可以解决当前的数据类型，也可以解决未来的数据类型 */
function getData<T>(params: T): T {
  return params
}
const result = getData(123)
const result1 = getData('123')
console.log(result, result1);

/* 创建一个类的泛型，用于求出最小的数字，可以传入的参数类型为 数字和字符串 */
class MinNum<T>{
  list: Array<T> = [];
  add(num: T): void {
    this.list.push(num)
  }
  seekMinNum(): T {
    let minCount = this.list[0];
    this.list.forEach(element => {
      if (minCount > element) {
        minCount = element;
      }
    });
    return minCount
  }
}
const minNum = new MinNum()
minNum.add(1)
minNum.add('2')
minNum.add(3)
minNum.add('4')
minNum.add('0')
const minCount = minNum.seekMinNum()
console.log(minCount);

// 实例化类，并且制定了类的泛型代表的类型是 number
const minNum1 = new MinNum<number>();
minNum1.add(1)
minNum1.add(2)
minNum1.add(3)
console.log(minNum1.seekMinNum());

// 定义函数泛型接口
interface ConfigFunc {
  <T>(value1: T): T;
}

var func: ConfigFunc = function <T>(value1: T): T {
  return value1;
}
console.log(func<string>('11111111111'));

interface ConfigFunc2<T> {
  (value: T): T;
}
