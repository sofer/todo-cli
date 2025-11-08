export type Priority = 'low' | 'medium' | 'high';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
  dueDate?: Date;
  tags: string[];
  createdAt: Date;
  completedAt?: Date;
}
