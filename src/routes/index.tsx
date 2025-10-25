import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="m-8 flex flex-col gap-8">
      <div className="h-[500px] gap-2 overflow-auto">
        <div className="flex flex-col gap-2 bg-gray-400 h-[400px]">
          <span>Top</span>
          <span className="mt-auto">Bottom</span>
        </div>
        <div className="sticky top-0 h-[200px] bg-red-300 flex flex-col gap-2 flex-1 mt-2">
          <span>Top</span>
          <span className="mt-auto">Bottom</span>
        </div>
        <div className="flex flex-col gap-2 bg-gray-400 h-[400px] mt-2">
          <span>Top</span>
          <span className="mt-auto">Bottom</span>
        </div>
      </div>

      <div className="h-[500px] gap-2 overflow-auto">
        <div className="flex flex-col gap-2 bg-gray-400 h-[400px]">
          <span>Top</span>
          <span className="mt-auto">Bottom</span>
        </div>
        <div className="sticky top-0 h-[600px] bg-red-300 flex flex-col gap-2 flex-1 mt-2">
          <span>Top</span>
          <span className="mt-auto">Bottom</span>
        </div>
        <div className="flex flex-col gap-2 bg-gray-400 h-[400px] mt-2">
          <span>Top</span>
          <span className="mt-auto">Bottom</span>
        </div>
      </div>

      <div className="h-[500px] flex gap-2 overflow-auto border-2">
        <div className="flex flex-col gap-2 bg-gray-400">
          {Array.from({ length: 100 }).map((_, idx) => (
            <span>Content line {idx}</span>
          ))}
        </div>
        <div className="sticky top-0 bg-red-300 flex flex-col gap-2 flex-1">
          {Array.from({ length: 100 }).map((_, idx) => (
            <span>Content line {idx}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
