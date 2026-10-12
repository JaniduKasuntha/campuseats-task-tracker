import { Routes, Route, NavLink } from "react-router-dom";
import { Menu, CirclePlus } from "lucide-react";
import MenuPage from "./features/menu/pages/MenuPage";
import DishDetailPage from "./features/menu/pages/DishDetailPage";
import OrderPage from "./features/menu/pages/OrderPage";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 flex flex-col items-center">
      <nav className="mb-8">
        <div className="flex items-center gap-100 rounded-full bg-card border border-border px-3 py-2 shadow-lg">
          <NavLink
            to="/"
            className="flex rounded-full bg-primary/80 px-6 py-2 font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Menu className="mt-1 mr-1" />
            Menu
          </NavLink>

          <NavLink
            to="/order"
            className="flex rounded-full border border-border bg-secondary px-6 py-2 font-medium text-secondary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
          >
            Place Order
            <CirclePlus className="mt-1 ml-1" />
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/dish/:id" element={<DishDetailPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="*" element={<p>404 - Page not found</p>} />
      </Routes>
    </div>
  );
}
