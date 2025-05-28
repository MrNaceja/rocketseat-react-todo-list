import { Outlet } from "react-router";
import { Header } from "./header";
import { Footer } from "./footer";

export default function RootLayout() {
    return (
        <section className="flex flex-col min-h-screen overflow-hidden px-3 py-32">
            <Header />
            <main className="flex-1 container flex flex-col">
                <Outlet />
            </main>
            <Footer />
        </section>
    )
}