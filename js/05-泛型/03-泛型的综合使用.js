"use strict";
/*
  定义一个操作数据库的库 支持Mysql\ Mssql Mongodb

  实现 insert update delete get 方法

  方案: 约束规范,定义接口,代码重用,用到泛型
    1. 接口 规范定义
    2. 泛型 解决类 和接口 方法的复用性
*/
// 定义一个操作 MySQL的类
// 注意: 要实现泛型接口.,定义的类也应该是一个泛型类
var MysqlDB = /** @class */ (function () {
    function MysqlDB() {
    }
    MysqlDB.prototype.insert = function (info) {
        console.log(info);
        return true;
        // throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDB;
}());
// 定义Mssql类
var MssqlDB = /** @class */ (function () {
    function MssqlDB() {
    }
    MssqlDB.prototype.insert = function (info) {
        console.log(info);
        return true;
        // throw new Error("Method not implemented.");
    };
    MssqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MssqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MssqlDB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MssqlDB;
}());
// 定义一个Mongodb的类
var MongoDB = /** @class */ (function () {
    function MongoDB() {
    }
    MongoDB.prototype.insert = function (info) {
        console.log(info);
        return true;
        // throw new Error("Method not implemented.");
    };
    MongoDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MongoDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MongoDB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MongoDB;
}());
// 操作用户表 定义一个User类和数据表做映射
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var user = new User();
user.username = 'wangqiang';
user.password = '12313';
var mysqlDB = new MysqlDB();
mysqlDB.insert(user);
var mssqlDB = new MssqlDB();
mssqlDB.insert(user);
var mongoDB = new MongoDB();
mongoDB.insert(user);
