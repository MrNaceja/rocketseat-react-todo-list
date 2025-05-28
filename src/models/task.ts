export const TASKS_STORAGE_KEY = '@todo-list::tasks';

export enum TaskState {
    UPDATING = 'updating',
    CREATED = 'created'
}

export class Task {
    id: string
    description: string
    done: boolean
    state: TaskState

    constructor(id: string, description: string, state: TaskState = TaskState.UPDATING) {
        this.id = id;
        this.description = description;
        this.done = false;
        this.state = state;
    }
}