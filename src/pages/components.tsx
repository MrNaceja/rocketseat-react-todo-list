import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { ButtonIcon } from "../components/button-icon";
import { Card } from "../components/card";
import { Checkbox } from "../components/checkbox";
import { Input } from "../components/input";

export default function ComponentsPage() {
    return (
        <main className="flex flex-col gap-3 items-start container">
            <h1>Hello Todo</h1>
            <Badge variant="primary">
                5
            </Badge>
            <Badge variant="secondary" loading>
                1 e 2
            </Badge>
            <Button icon="plus">Nova Tarefa</Button>
            <div className="flex item-center gap-1">
                <ButtonIcon icon="trash" variant="primary" />
                <ButtonIcon icon="trash" variant="secondary" />
                <ButtonIcon icon="trash" variant="tertiary" />
            </div>

            <Input placeholder="Digite a tarefa..." />
            <Checkbox />

            <Card>A banana nunca falha hein.</Card>
        </main>
    )
}