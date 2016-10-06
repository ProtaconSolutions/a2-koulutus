import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
  private title: string = 'Todo Application';

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

  ngOnInit() { }

  getTodosByStatus(status) {
    return this.todoItems.filter(item => {
      return item.done === status;
    })
  }
}
