import { FC, PropsWithChildren, useState } from "react";
import cn from "classnames";

import { FlexStickyDemoVersion1 } from "@/components/FlexStickyDemoVersion1";
import { FlexStickyDemoVersion2 } from "@/components/FlexStickyDemoVersion2";
import { SimpleStickyDemo } from "@/components/SimpleStickyDemo";
import { SimplyStickyDemoBreaking } from "@/components/SimplyStickyDemoBreaking";
import { createFileRoute } from "@tanstack/react-router";
import { FlexInFlexStickyDemoVersion1 } from "@/components/FlexInFlexStickyDemoVersion1";

export const Route = createFileRoute("/")({ component: App });

type ButtonProps = {
  onClick: () => void;
  active: boolean;
};
const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { onClick, children, active } = props;

  return (
    <button className={cn("border-2 border-gray-300 rounded-md p-2", active ? "bg-gray-400" : "")} onClick={onClick}>
      {children}
    </button>
  );
};

function App() {
  const [version, setVersion] = useState(4);

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
          Flex
        </Button>
        <Button onClick={() => setVersion(3)} active={version === 3}>
          Flex Fixed
        </Button>
        <Button onClick={() => setVersion(4)} active={version === 4}>
          Flex in Flex
        </Button>
      </div>
      {version === 0 && <SimpleStickyDemo />}
      {version === 1 && <SimplyStickyDemoBreaking />}
      {version === 2 && <FlexStickyDemoVersion1 />}
      {version === 3 && <FlexStickyDemoVersion2 />}
      {version === 4 && <FlexInFlexStickyDemoVersion1 />}
    </div>
  );
}
