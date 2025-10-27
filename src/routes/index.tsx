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
import { SimplyStickyDemoBreaking2 } from "@/components/SimplyStickyDemoBreaking2";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const [version, setVersion] = useState(6);

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
          Broken 2
        </Button>
        <Button onClick={() => setVersion(3)} active={version === 3}>
          Detailed
        </Button>
        <Button onClick={() => setVersion(4)} active={version === 4}>
          Flex
        </Button>
        <Button onClick={() => setVersion(5)} active={version === 5}>
          Flex Fixed
        </Button>
        <Button onClick={() => setVersion(6)} active={version === 6}>
          Flex in Flex
        </Button>
        <Button onClick={() => setVersion(7)} active={version === 7}>
          Flex in Flex v2
        </Button>
        <Button onClick={() => setVersion(8)} active={version === 8}>
          Flex in Flex v3
        </Button>
      </div>
      {version === 0 && <SimpleStickyDemo />}
      {version === 1 && <SimplyStickyDemoBreaking />}
      {version === 2 && <SimplyStickyDemoBreaking2 />}
      {version === 3 && <Detailed />}
      {version === 4 && <FlexStickyDemoVersion1 />}
      {version === 5 && <FlexStickyDemoVersion2 />}
      {version === 6 && <FlexInFlexStickyDemoVersion1 />}
      {version === 7 && <FlexInFlexStickyDemoVersion2 />}
      {version === 8 && <FlexInFlexStickyDemoVersion3 />}
    </div>
  );
}
