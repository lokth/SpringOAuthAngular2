import {IUser} from './IUser';

export class User implements IUser {

  id: number;
  name: string;
  age: number;
  salary: number;

  constructor(id: number, name: string, age: number, salary: number) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

}
