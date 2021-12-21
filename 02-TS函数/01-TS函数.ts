// 定义函数的两种方式
function fun1(): void {
  console.log('第一种');
}

var fun2 = function (): string {
  return '第二种'
}

// 传参
function getParams(name: string, age: number): string {
  return `${name}=========${age}`
}
// 可选参数，只需要在可选参数的后边传入一个？即可 
// 注意：可选参数必须配置到参数的最后面
function getParams2(name: string, age?: number): string {
  if (age) {
    return `${name}=========${age}`
  } else {
    return `${name}======年龄保密`
  }
}
console.log(getParams2('zhangsan'));

// TS里面  方法的重载
function getInfo(name: string): string;
function getInfo(age: number): string;

function getInfo(params: any): any {
  if (typeof params === 'string') {
    return '我是' + params;
  } else {
    return params
  }
}
console.log(getInfo(222));
