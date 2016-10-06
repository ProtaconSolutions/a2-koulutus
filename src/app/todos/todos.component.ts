import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  private title: string = 'Todo Application';

  private todoItems: any[] = [
    {
      name: 'Code some stuff',
      done: true,
    },
    {
      name: 'Refactor some stuff',
      done: false,
    },
    {
      name: 'Deploy application',
      done: false,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  getTodosByStatus(status) {
    return this.todoItems.filter(item => {
      return item.done === status;
    })
  }
}
