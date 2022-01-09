"use strict";
/* class Student {
  username: string | any;
  password: string | any;
}

class Database {
  addStudent(student:Student):boolean{
    console.log(student);
    return true;
  }
}

const student = new Student()
student.username = 'zhangsan'
student.password = '123123'

const database = new Database()
database.addStudent(student) */
/* 如果传入的数据需要不同的类型,那么database对应的参数就需要来回的改变,我们需要database只封装一次 */
/* 使用泛型去实现 */
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.addStudent = function (student) {
        console.log(student);
        return true;
    };
    return Database;
}());
var student = new Student();
student.username = 'zhangsan';
student.password = '123123';
// 在初始化的时候进行一下校验,将类型传入泛型当中
var database = new Database();
database.addStudent(student);
