import { BrowserRouter, Route, Routes } from "react-router";
import ComponentsPage from "./pages/components";
import HomePage from "./pages/home";
import RootLayout from "./components/layout/root-layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/components" element={<ComponentsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}