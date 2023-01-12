import { CardList } from "../components/cardList";
import { Sidebar } from "../components/sidebar";

export function Home() {
  return (
    <div className="bg-gray-100 flex">
      <Sidebar />
      <div>
        <CardList />
      </div>
    </div>
  );
}
