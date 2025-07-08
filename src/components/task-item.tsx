import { useState, type FormEvent } from "react"
import { ButtonIcon } from "./button-icon"
import { Card } from "./card"
import { Checkbox } from "./checkbox"
import { Input } from "./input"
import { TaskState, type Task } from "../models/task"
import { cx } from "class-variance-authority"
import { useTasks } from "../hooks/use-tasks"

interface TaskItemProps {
    task: Task
}
export const TaskItem = ({ task }: TaskItemProps) => {
    const [isUpdateMode, setIsUpdateMode] = useState(task.state == TaskState.UPDATING)
    const { updateTask, removeTask } = useTasks()

    const handleStartUpdateMode = () => {
        setIsUpdateMode(true)
    }
    const handleEndUpdateMode = () => {
        if ( isUpdateMode ) {
            removeTask(task.id)
        }
        setIsUpdateMode(false)
    }

    const handleFinishEditionMode = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        updateTask(task.id, { done: task.done, description: (new FormData(form)).get('description')?.toString() || '' })
        setIsUpdateMode(false)
    }

    const handleToggleDoneTask = () => {
        updateTask(task.id, {
            ...task,
            done: !task.done
        })
    }

    return (
        <Card className="w-full">
            {
                !isUpdateMode
                    ? (
                        <div className="flex items-center gap-3">
                            <Checkbox defaultChecked={task.done} value={task.done.toString()} onChange={handleToggleDoneTask}/>
                            <span className={cx('flex-1 text-body-sm-normal', { 'line-through': task.done })}>{ task.description }</span>

                            <aside className="flex items-center gap-1">
                                <ButtonIcon icon="trash" variant="tertiary" onClick={removeTask.bind(null, task.id)} />
                                <ButtonIcon icon="pencil" variant="tertiary" onClick={handleStartUpdateMode}/>
                            </aside>
                        </div>
                    )
                    : (
                        <form className="flex items-center gap-3" onSubmit={handleFinishEditionMode}>
                            <Input className="flex-1" defaultValue={task.description} name="description" required autoFocus />
                            <aside className="flex items-center gap-1">
                                <ButtonIcon icon="x" variant="secondary" onClick={handleEndUpdateMode} />
                                <ButtonIcon type="submit" icon="check" variant="primary" />
                            </aside>
                        </form>
                    )
            }
        </Card >
    )
}