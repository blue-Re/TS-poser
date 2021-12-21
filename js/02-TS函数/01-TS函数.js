"use strict";
// 定义函数的两种方式
function fun1() {
    console.log('第一种');
}
var fun2 = function () {
    return '第二种';
};
// 传参
function getParams(name, age) {
    return name + "=========" + age;
}
// 可选参数，只需要在可选参数的后边传入一个？即可 
// 注意：可选参数必须配置到参数的最后面
function getParams2(name, age) {
    if (age) {
        return name + "=========" + age;
    }
    else {
        return name + "======\u5E74\u9F84\u4FDD\u5BC6";
    }
}
console.log(getParams2('zhangsan'));
function getInfo(params) {
    if (typeof params === 'string') {
        return '我是' + params;
    }
    else {
        return params;
    }
}
console.log(getInfo(222));
