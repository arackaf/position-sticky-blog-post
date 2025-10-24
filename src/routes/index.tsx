import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="flex flex-col m-8">
      <span>Hello</span>
      <span>World</span>
    </div>
  );
}
