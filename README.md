# Todo List CLI

A feature-rich terminal-based todo list application built with TypeScript.

## Project Specification

A command-line todo list manager that supports both quick command-line operations and an interactive menu interface. The application persists todos to a file, allowing users to manage tasks with priorities, due dates, and categories.

### Goals
- Provide a fast, terminal-native todo list experience
- Support both quick CLI commands and interactive browsing
- Persist data reliably between sessions
- Enable organisation through priorities, dates, and tags
- Follow functional programming principles and maintain high code quality

## User Stories

- [ ] As a user, I want to add a new todo with a simple command so that I can quickly capture tasks
- [ ] As a user, I want to list all my todos so that I can see what needs to be done
- [ ] As a user, I want to mark todos as complete so that I can track my progress
- [ ] As a user, I want to remove todos so that I can keep my list clean
- [ ] As a user, I want my todos to persist to a file so that they're saved between sessions
- [ ] As a user, I want to assign priorities to todos so that I can focus on important tasks
- [ ] As a user, I want to set due dates on todos so that I can manage deadlines
- [ ] As a user, I want to categorise todos with tags so that I can organise related tasks
- [ ] As a user, I want an interactive menu interface so that I can browse and manage todos easily
- [ ] As a user, I want to filter todos by status, priority, or tag so that I can find specific tasks

## Architecture & Technical Notes

### Technology Stack
- **Language**: TypeScript (targeting Node.js)
- **Testing**: Jest with ts-jest
- **CLI Framework**: Commander.js for argument parsing
- **Interactive UI**: Inquirer.js for interactive menus
- **Data Storage**: JSON file in user's home directory (~/.todos.json)

### Project Structure
```
src/
  cli/           # Command-line interface handlers
  interactive/   # Interactive menu interface
  core/          # Core todo logic (add, remove, update, etc.)
  storage/       # File persistence layer
  types/         # TypeScript type definitions
  utils/         # Shared utilities
tests/           # Test files mirroring src/ structure
```

### Key Design Decisions
- **Functional core**: Pure functions for todo operations
- **Immutable data**: Todos are immutable; operations return new state
- **Separation of concerns**: CLI, interactive UI, and core logic are separate
- **Type safety**: Strict TypeScript with full type coverage
- **Test-first**: TDD approach for all features

### Data Model
```typescript
interface Todo {
  id: string;           // UUID
  text: string;         // Description
  completed: boolean;   // Completion status
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;       // Optional due date
  tags: string[];       // Category tags
  createdAt: Date;      // Creation timestamp
  completedAt?: Date;   // Completion timestamp
}
```

## Commands

### Development
```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test -- path/to/test

# Type checking
npm run type-check

# Lint
npm run lint

# Build
npm run build

# Run in development
npm run dev
```

### Usage (once built)
```bash
# Quick commands
todo add "Buy groceries"
todo add "Review PR" --priority high --due tomorrow --tag work
todo list
todo list --tag work --priority high
todo complete <id>
todo remove <id>

# Interactive mode
todo
```

## Development Workflow

Following TDD and the slash command workflow:
1. `/story` - Start next user story
2. `/test` - Write failing tests
3. `/implement` - Write minimal code
4. `/refactor` - Clean up
5. `/check` - Run quality checks
6. `/commit` - Review and commit
7. `/pr` - Create pull request when story is complete
