"use client";
import { useVirtualScroll } from "@/hooks/useVirtualScroll";

const List: React.FC = () => {
  const items = [...Array(50)].map((_, i) => i);
  const itemHeight = 50;
  const containerHeight = 400;

  return (
    <div className="flex-1 mx-2">
      <h2>normal</h2>
      <div
        style={{
          height: `${containerHeight}px`,
        }}
        className="overflow-y-scroll border border-gray-400 w-full"
      >
        <div
          style={{ height: `${items.length * itemHeight}px` }}
          className="w=80"
        >
          <ul className="m-0 p-0 list-none">
            {items.map((item) => (
              <li
                key={item}
                style={{ height: `${itemHeight}px` }}
                className="flex justify-center items-center text-white w-full"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default List;
