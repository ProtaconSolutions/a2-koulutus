import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})

export class TodoEditComponent implements OnInit {
  private index: number;
  private todoItem: any;
  private name: string = '';
  private assignee: string = '';

  constructor(private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    this.route.params.subscribe((parameters: any) => {
      this.index = parameters.index;

      this.todoItem = this.todoService.getTodoItemByIndex(this.index);

      this.name = this.todoItem.name;
      this.assignee = this.todoItem.assignee;
    });
  }

  save() {
    this.todoItem.name = this.name;
    this.todoItem.assignee = this.assignee;
  }
}
