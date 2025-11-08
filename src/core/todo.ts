import { randomUUID } from 'crypto';
import { Todo, Priority } from '../types/Todo';

export interface CreateTodoOptions {
  priority?: Priority;
  tags?: string[];
  dueDate?: Date;
}

export const createTodo = (
  text: string,
  options: CreateTodoOptions = {}
): Todo => {
  const { priority = 'medium', tags = [], dueDate } = options;

  return {
    id: randomUUID(),
    text,
    completed: false,
    priority,
    dueDate,
    tags,
    createdAt: new Date(),
    completedAt: undefined,
  };
};
