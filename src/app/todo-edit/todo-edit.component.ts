import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})

export class TodoEditComponent implements OnInit {
  private index: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((parameters: any) => {
      this.index = parameters.index;
    });
  }
}
