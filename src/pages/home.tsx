import { ListTodo } from "lucide-react";
import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { TaskItem } from "../components/task-item";
import { useTasks } from "../hooks/use-tasks";

export default function HomePage() {
    const { tasks, total: totalTasks, totalDone: totalDoneTasks, prepareTask, hasTaskUpdating } = useTasks()
    
    return (
        <section className="flex flex-col gap-6 flex-1">
            {/* Summary */}
            <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-300 text-body-sm-normal gap-1">
                    <span>Tarefas criadas</span>
                    <Badge variant="secondary">{ totalTasks }</Badge>
                </div>
                <div className="flex items-center text-gray-300 text-body-sm-normal gap-1">
                    <span>Tarefas concluídas</span>
                    <Badge variant="primary">{ totalDoneTasks } de { totalTasks }</Badge>
                </div>
            </div>

            {/* Tasks list */}
            <article className="flex-1 flex flex-col gap-2">
                <Button icon="plus" className="w-full" onClick={prepareTask} disabled={hasTaskUpdating}>Nova Tarefa</Button>
                {
                    totalTasks > 0
                    ? (
                        <ul className="space-y-2">
                            {tasks.map(task => <TaskItem key={task.id} task={task} />)}
                        </ul>
                        )
                    : (
                        <div className="w-full flex flex-col gap-3 items-center flex-1 justify-center">
                            <ListTodo size={64} className="text-gray-300/25"/>
                            <h3 className="text-body-md-normal text-gray-300">Você ainda não possui tarefas.</h3>
                        </div>
                    )
                }
            </article>
        </section>
    )
}