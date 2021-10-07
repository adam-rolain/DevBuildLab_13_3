import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    { task: 'Clean the bathroom', completed: false },
    { task: 'Cook dinner', completed: false },
    { task: 'Do laundry', completed: true },
    { task: 'Workout', completed: false },
    { task: 'Take dog for a walk', completed: true },
    { task: 'Schedule appointment', completed: false },
    { task: 'Mow the lawn', completed: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
