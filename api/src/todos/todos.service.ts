import { Injectable } from '@nestjs/common';
import { Todo } from 'src/types/todo';

@Injectable()
export class TodosService {
	todos: Todo[] = [
		{
			id: 1,
			description: "First Todo",
			completed: true
		},
		{
			id: 2,
			description: "Second Todo",
			completed: false
		},
		{
			id: 3,
			description: "Third Todo",
			completed: false
		}
 ];

	findAllTodos(): Todo[] {
		return this.todos;
	}

	createTodo(todo: Todo) {
		this.todos.push(todo);
	}

	toggleCompletion(id: number) {
		this.todos = this.todos.map(todo => {
			if(todo.id === id) todo.completed = !todo.completed;
			return todo;
		});
	}

	deleteTodo(id: number) {
		this.todos = this.todos.filter(todo => todo.id !== id);
	}
}
