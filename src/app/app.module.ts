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

const routes = [
  {
    path: 'todos',
    component: TodosComponent
  }
];

/**
 path?: string;
 pathMatch?: string;
 component?: Type<any>;
 redirectTo?: string;
 outlet?: string;
 canActivate?: any[];
 canActivateChild?: any[];
 canDeactivate?: any[];
 canLoad?: any[];
 data?: Data;
 resolve?: ResolveData;
 children?: Route[];
 loadChildren?: LoadChildren;
 */

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent
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
