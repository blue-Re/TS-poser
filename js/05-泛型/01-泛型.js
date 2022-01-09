"use strict";
/* T 表示泛型 可以支持不特定的数据类型 要求i传入的参数和返沪的参数类型一致 */
/* 使用泛型，不仅可以解决当前的数据类型，也可以解决未来的数据类型 */
function getData(params) {
    return params;
}
var result = getData(123);
var result1 = getData('123');
console.log(result, result1);
/* 创建一个类的泛型，用于求出最小的数字，可以传入的参数类型为 数字和字符串 */
var MinNum = /** @class */ (function () {
    function MinNum() {
        this.list = [];
    }
    MinNum.prototype.add = function (num) {
        this.list.push(num);
    };
    MinNum.prototype.seekMinNum = function () {
        var minCount = this.list[0];
        this.list.forEach(function (element) {
            if (minCount > element) {
                minCount = element;
            }
        });
        return minCount;
    };
    return MinNum;
}());
var minNum = new MinNum();
minNum.add(1);
minNum.add('2');
minNum.add(3);
minNum.add('4');
minNum.add('0');
var minCount = minNum.seekMinNum();
console.log(minCount);
// 实例化类，并且制定了类的泛型代表的类型是 number
var minNum1 = new MinNum();
minNum1.add(1);
minNum1.add(2);
minNum1.add(3);
console.log(minNum1.seekMinNum());
var func = function (value1) {
    return value1;
};
console.log(func('11111111111'));
