import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="m-8">
      <div className="h-[500px] flex flex-col gap-2 overflow-auto">
        <div className="flex flex-col gap-2 bg-blue-400 h-[400px] min-h-[400px]">
          <span>Top</span>
          <span className="mt-auto">Bottom</span>
        </div>
        <div className="flex flex-col gap-2 flex-1 bg-red-400 sticky top-0 h-[200px] min-h-[200px]">
          <span>Top</span>
          <span className="mt-auto">Bottom</span>
        </div>
        <div className="flex flex-col gap-2 bg-green-400 h-[400px] min-h-[400px]">
          <span>Top</span>
          <span className="mt-auto">Bottom</span>
        </div>
      </div>
    </div>
  );
}
