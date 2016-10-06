import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
  private title: string = 'Todo Application';
  private todoItems: any[] = [];
  private name: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoItems = this.todoService.getTodoItems();
  }

  getTodosByStatus(status: boolean) {
    return this.todoItems.filter(item => {
      return item.done === status;
    })
  }

  addNewTodoItem() : void {
    this.todoItems.push({
      name: this.name,
      done: false,
      active: false,
    });

    this.name = '';
  }
}
