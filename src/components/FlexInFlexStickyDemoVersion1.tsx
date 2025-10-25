import { useState } from "react";
import cn from "classnames";
import { Button } from "./Button";

export const FlexInFlexStickyDemoVersion1 = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  return (
    <div className="h-[500px] flex gap-2 border-2 overflow-auto">
      <div className="grid grid-rows-1 grid-cols-[250px_1fr]">
        {/* Side Navigation Pane */}
        <div className="sticky top-0 flex flex-col gap-8">
          {Array.from({ length: 20 }).map((_, idx) => (
            <span>SIDE NAVIGATION {idx + 1}</span>
          ))}
        </div>

        {/* Main Content Pane */}
        <div className="flex flex-1 gap-2">
          <div className="flex flex-col flex-1 gap-2">
            {Array.from({ length: 100 }).map((_, idx) => (
              <div className="flex gap-2">
                <span>Main Content line {idx}</span>
                <Button onClick={() => setShowSideDrawer(true)}>Show Side Drawer</Button>
              </div>
            ))}
          </div>
          {/* Side drawer */}
          <div className={cn("sticky top-0 bg-red-300 flex flex-col gap-8 overflow-auto", showSideDrawer ? "w-[300px]" : "w-0")}>
            <Button onClick={() => setShowSideDrawer(false)} className="self-start m-2">
              Close Side Drawer
            </Button>
            <span>This is some additional content</span>
            <span>that the user</span>
            <span>can show or hide</span>
            <span>which provides</span>
            <span>some additional context</span>
            <span>to what's in the main content pane</span>
            <span>etc</span>
            <span>etc</span>
            <span>etc</span>
            <span>etc</span>
            <span>etc</span>
            <span>etc</span>
          </div>
        </div>
      </div>
    </div>
  );
};
