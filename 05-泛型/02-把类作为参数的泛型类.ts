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
class Student {
  username: string | any;
  password: string | any;
}

class Database<T> {
  addStudent(student:T):boolean{
    console.log(student);
    return true;
  }
}

const student = new Student()
student.username = 'zhangsan'
student.password = '123123'

// 在初始化的时候进行一下校验,将类型传入泛型当中
const database = new Database<Student>()
database.addStudent(student)