import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';

  todos = [
    {
      label: 'Be present',
      done: true,
      priority: 5
    },
    {
      label: 'Do Todo-list',
      done: false,
      priority: 3
    },
    {
      label: 'Administrator',
      done: false,
      priority: 5
    },
    {
      label: 'Pacjent',
      done: false,
      priority: 5
    }
  ];

  addTodo(newTodoLabel: any) {
    var newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }

  deleteTodo(todo: any) {
    this.todos = this.todos.filter( t => t.label !== todo.label);
  }

}
