import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo.service';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

const routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos',
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
  {
    path: 'todo-edit/:index',
    component: TodoEditComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    TodoEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule.forRoot()
  ],
  providers: [
    TodoService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
