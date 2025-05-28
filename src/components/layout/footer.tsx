import { NavLink } from "react-router"

export const Footer = () => {
    return (
        <footer className="flex items-center justify-center gap-2 container">
            <NavLink to="/">
                Tarefas
            </NavLink>
            <NavLink to="/components">
                Componentes
            </NavLink>
        </footer>
    )
}