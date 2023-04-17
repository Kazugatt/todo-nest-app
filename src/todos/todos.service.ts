import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  todo = [
    { id: 1, name: 'Brush teeth' },
    { id: 2, name: 'Make a bed' },
  ];

  getTodos() {
    return this.todo;
  }
}
