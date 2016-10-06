import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  private todoItems: any[] = [
    {
      name: 'Code some stuff',
      done: true,
      active: false,
      assignee: 'John Doe',
    },
    {
      name: 'Refactor some stuff',
      done: false,
      active: false,
      assignee: 'Arnold Administrator',
    },
    {
      name: 'Deploy application',
      done: false,
      active: false,
      assignee: '',
    },
  ];

  constructor() { }

  getTodoItems() {
    return this.todoItems;
  }

  getTodoItemByIndex(index: number) {
    return this.todoItems[index];
  }
}
