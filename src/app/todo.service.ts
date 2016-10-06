import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  private todoItems: any[] = [
    {
      name: 'Code some stuff',
      done: true,
      active: false,
    },
    {
      name: 'Refactor some stuff',
      done: false,
      active: false,
    },
    {
      name: 'Deploy application',
      done: false,
      active: false,
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
