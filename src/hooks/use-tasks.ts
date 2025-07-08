import useLocalStorage from "use-local-storage-state"
import { Task, TaskState, TASKS_STORAGE_KEY } from "../models/task"

export const useTasks = () => {
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_STORAGE_KEY, {
        defaultValue: []
    })
    const total = tasks.length
    const totalDone = tasks.filter(task => task.done).length
    const hasTaskUpdating = tasks.some(task => task.state == TaskState.UPDATING)

    const prepareTask = () => {
        setTasks(prev => [
            ...prev,
            new Task(
                Math.random().toString(36).slice(2),
                '',
                TaskState.UPDATING
            )
        ])
    }

    const updateTask = (id: Task['id'], payload: Omit<Task, 'id' | 'state'>) => {
        setTasks(prev => prev.map(task => {
            if (task.id == id) {
                return {
                    ...payload,
                    id,
                    state: TaskState.CREATED
                }
            }
            return task
        }))
    }

    const removeTask = (id: Task['id']) => {
        setTasks(tasks.filter(task => task.id != id))
    }

    return {
        tasks,
        total,
        totalDone,
        hasTaskUpdating,
        prepareTask,
        updateTask,
        removeTask
    }
}