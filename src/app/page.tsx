import Image from "next/image";
import List from "./_components/List";
import VirtualScrollList from "./_components/VirtualScrollList";

export default function Home() {
  return (
    <main className="flex m-12">
      <VirtualScrollList />
      <List />
    </main>
  );
}
