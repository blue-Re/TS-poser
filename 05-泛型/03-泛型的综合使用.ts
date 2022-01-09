/* 
  定义一个操作数据库的库 支持Mysql\ Mssql Mongodb

  实现 insert update delete get 方法

  方案: 约束规范,定义接口,代码重用,用到泛型
    1. 接口 规范定义
    2. 泛型 解决类 和接口 方法的复用性
*/

interface DBInterface<T> {
  insert(info: T): boolean;
  update(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(id: number): [];
}

// 定义一个操作 MySQL的类
// 注意: 要实现泛型接口.,定义的类也应该是一个泛型类
class MysqlDB<T> implements DBInterface<T>{
  insert(info: T): boolean {
    console.log(info);
    return true;
    // throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): [] {
    throw new Error("Method not implemented.");
  }
}

// 定义Mssql类
class MssqlDB<T> implements DBInterface<T>{
  insert(info: T): boolean {
    console.log(info);
    return true;
    // throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): [] {
    throw new Error("Method not implemented.");
  }
}

// 定义一个Mongodb的类
class MongoDB<T> implements DBInterface<T> {
  insert(info: T): boolean {
    console.log(info);
    return true;
    // throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): [] {
    throw new Error("Method not implemented.");
  }
}

// 操作用户表 定义一个User类和数据表做映射
class User {
  username: string | any;
  password: string | any;
}
const user = new User();
user.username = 'wangqiang'
user.password = '12313'

const mysqlDB = new MysqlDB<User>();
mysqlDB.insert(user)

const mssqlDB = new MssqlDB<User>();
mssqlDB.insert(user)

const mongoDB = new MongoDB<User>();
mongoDB.insert(user);