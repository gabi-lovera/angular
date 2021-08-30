import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  todos: any[] = [];

  addTodo(item: string) {
    this.todos.push({ id: this.todos.length, name: item });
  }
  removeTodo(id: number) {
    this.todos = this.todos.filter((item) => item.id !== id);
  }
}
