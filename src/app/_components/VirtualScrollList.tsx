"use client";
import { useVirtualScroll } from "@/hooks/useVirtualScroll";

const VirtualScrollList: React.FC = () => {
  const items = [...Array(50)].map((_, i) => i);
  const itemHeight = 50;
  const containerHeight = 400;

  const { displayingItems, handleScroll, startIndex } = useVirtualScroll({
    containerHeight,
    itemHeight,
    items,
  });

  return (
    <div className="flex-1 mx-2">
      <h2>virtual</h2>
      <div
        style={{
          height: `${containerHeight}px`,
        }}
        className="overflow-y-scroll border border-gray-400 w-full"
        onScroll={handleScroll}
      >
        <div
          style={{ height: `${items.length * itemHeight}px` }}
          className="w=80"
        >
          <ul
            className="m-0 p-0 list-none relative"
            style={{ top: `${startIndex * itemHeight}px` }}
          >
            {displayingItems.map((item) => (
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

export default VirtualScrollList;
