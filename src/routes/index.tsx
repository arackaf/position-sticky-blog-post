import { FlexStickyDemoVersion1 } from "@/components/FlexStickyDemoVersion1";
import { SimpleStickyDemo } from "@/components/SimpleStickyDemo";
import { SimplyStickyDemoBreaking } from "@/components/SimplyStickyDemoBreaking";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="m-8 flex flex-col gap-8">
      <SimpleStickyDemo />
      <SimplyStickyDemoBreaking />
      <FlexStickyDemoVersion1 />
    </div>
  );
}
