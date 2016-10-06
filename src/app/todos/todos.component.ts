import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  private title: string = 'Todo Application';

  private todoItems: any[] = [
    {name: 'Code some stuff'},
    {name: 'Refactor some stuff'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
