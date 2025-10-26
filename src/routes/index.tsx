import { useState } from "react";

import { FlexStickyDemoVersion1 } from "@/components/FlexStickyDemoVersion1";
import { FlexStickyDemoVersion2 } from "@/components/FlexStickyDemoVersion2";
import { SimpleStickyDemo } from "@/components/SimpleStickyDemo";
import { SimplyStickyDemoBreaking } from "@/components/SimplyStickyDemoBreaking";
import { createFileRoute } from "@tanstack/react-router";
import { FlexInFlexStickyDemoVersion1 } from "@/components/FlexInFlexStickyDemoVersion1";
import { Button } from "@/components/Button";
import { FlexInFlexStickyDemoVersion2 } from "@/components/FlexInFlexStickyDemoVersion2";
import { FlexInFlexStickyDemoVersion3 } from "@/components/FlexInFlexStickyDemoVersion3";
import { Detailed } from "@/components/Detailed";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const [version, setVersion] = useState(2);

  return (
    <div className="flex flex-col gap-4 m-8">
      <div className="flex gap-2">
        <Button onClick={() => setVersion(0)} active={version === 0}>
          Basic
        </Button>
        <Button onClick={() => setVersion(1)} active={version === 1}>
          Broken
        </Button>
        <Button onClick={() => setVersion(2)} active={version === 2}>
          Detailed
        </Button>
        <Button onClick={() => setVersion(2)} active={version === 3}>
          Flex
        </Button>
        <Button onClick={() => setVersion(3)} active={version === 4}>
          Flex Fixed
        </Button>
        <Button onClick={() => setVersion(4)} active={version === 5}>
          Flex in Flex
        </Button>
        <Button onClick={() => setVersion(5)} active={version === 6}>
          Flex in Flex v2
        </Button>
        <Button onClick={() => setVersion(6)} active={version === 7}>
          Flex in Flex v3
        </Button>
      </div>
      {version === 0 && <SimpleStickyDemo />}
      {version === 1 && <SimplyStickyDemoBreaking />}
      {version === 2 && <Detailed />}
      {version === 3 && <FlexStickyDemoVersion1 />}
      {version === 4 && <FlexStickyDemoVersion2 />}
      {version === 5 && <FlexInFlexStickyDemoVersion1 />}
      {version === 6 && <FlexInFlexStickyDemoVersion2 />}
      {version === 7 && <FlexInFlexStickyDemoVersion3 />}
    </div>
  );
}
