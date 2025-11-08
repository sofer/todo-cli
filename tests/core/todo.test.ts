import { createTodo } from '../../src/core/todo';

describe('createTodo', () => {
  it('should create a new todo with provided text', () => {
    const text = 'Buy groceries';
    const todo = createTodo(text);

    expect(todo.text).toBe(text);
  });

  it('should generate a unique id for each todo', () => {
    const todo1 = createTodo('First task');
    const todo2 = createTodo('Second task');

    expect(todo1.id).toBeDefined();
    expect(todo2.id).toBeDefined();
    expect(todo1.id).not.toBe(todo2.id);
  });

  it('should set completed to false by default', () => {
    const todo = createTodo('New task');

    expect(todo.completed).toBe(false);
  });

  it('should set priority to medium by default', () => {
    const todo = createTodo('New task');

    expect(todo.priority).toBe('medium');
  });

  it('should initialize with empty tags array', () => {
    const todo = createTodo('New task');

    expect(todo.tags).toEqual([]);
  });

  it('should set createdAt to current date', () => {
    const beforeCreation = new Date();
    const todo = createTodo('New task');
    const afterCreation = new Date();

    expect(todo.createdAt).toBeInstanceOf(Date);
    expect(todo.createdAt.getTime()).toBeGreaterThanOrEqual(
      beforeCreation.getTime()
    );
    expect(todo.createdAt.getTime()).toBeLessThanOrEqual(
      afterCreation.getTime()
    );
  });

  it('should not set completedAt for new todos', () => {
    const todo = createTodo('New task');

    expect(todo.completedAt).toBeUndefined();
  });

  it('should not set dueDate by default', () => {
    const todo = createTodo('New task');

    expect(todo.dueDate).toBeUndefined();
  });

  it('should accept optional priority parameter', () => {
    const todo = createTodo('Urgent task', { priority: 'high' });

    expect(todo.priority).toBe('high');
  });

  it('should accept optional tags parameter', () => {
    const todo = createTodo('Work task', { tags: ['work', 'urgent'] });

    expect(todo.tags).toEqual(['work', 'urgent']);
  });

  it('should accept optional dueDate parameter', () => {
    const dueDate = new Date('2024-12-31');
    const todo = createTodo('Year-end task', { dueDate });

    expect(todo.dueDate).toBe(dueDate);
  });
});
