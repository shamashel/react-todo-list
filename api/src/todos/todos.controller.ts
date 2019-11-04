import { Controller, Get, Post, Body, HttpException, Put, Delete, Param} from '@nestjs/common';
import { ApiCreatedResponse, ApiUseTags, ApiOkResponse } from '@nestjs/swagger';
import { Todo } from 'src/types/todo';
import { TodosService } from './todos.service';

@ApiUseTags('todos')
@Controller('todos')
export class TodosController {
	constructor(private readonly todosService: TodosService) {}

	// Get all todos
	@Get()
	async findAll(): Promise<Todo[]> {
		return this.todosService.findAllTodos();
	}

	// Add a todo
	@Post()
	@ApiCreatedResponse({description: 'The todo has been created successfully', type: Todo})
	async create(@Body() todo: Todo): Promise<void> {
		try {
			this.todosService.createTodo(todo);
		} catch(err) {
			throw new HttpException({
				status: 500,
				description: err
			}, 500);
		}
	}

	// Toggle completion of a todo
	@Put(':id')
	@ApiOkResponse({description: 'The todo has been updated successfully'})
	async update(@Param('id') id: string): Promise<void> {
		try {
			this.todosService.toggleCompletion(+id);
		} catch(err) {
			throw new HttpException({
				status: 500,
				description: err
			}, 500);
		}
	}

	// Delete a todo
	@Delete(':id')
	@ApiOkResponse({description: 'The todo has been removed successfully'})
	async delete(@Param('id') id: string): Promise<void> {
		try {
			this.todosService.deleteTodo(+id);
		} catch(err) {
			throw new HttpException({
				status: 500,
				description: err
			}, 500);
		}
	}
}
