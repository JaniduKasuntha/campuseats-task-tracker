import { useState } from "react";
import { Search } from "lucide-react";
import MenuList from "../components/MenuList";
import { useDebounce } from "../hooks/useDebounce";
import { useFetch } from "../hooks/useFetch";

function MenuPage() {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 400);
  const { data: dishes, isLoading, error } = useFetch("/menu.json");
  if (isLoading) {
    return <p>Loading menu…</p>;
  }

  if (error) {
    return <p>Could not load menu: {error}</p>;
  }

  const filtered = dishes.filter((d) =>
    d.name.toLowerCase().includes(debounced.toLowerCase()),
  );

  return (
    <div>
      <div className="relative w-[600px]">
        <input
          className="w-full border rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-white"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search dishes..."
        />

        <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>
      <MenuList dishes={filtered} />
    </div>
  );
}

export default MenuPage;
