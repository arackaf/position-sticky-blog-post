export const FlexInFlexStickyDemoVersion1 = () => {
  return (
    <div className="flex border-2 rounded-md">
      <div className="h-[500px] flex flex-1 gap-2 overflow-auto">
        <div className="grid grid-rows-1 grid-cols-[250px_1fr] flex-1">
          {/* Side Navigation Pane */}
          <div className="sticky top-0 flex flex-col gap-8">
            {Array.from({ length: 5 }).map((_, idx) => (
              <span>Side Navigation {idx + 1}</span>
            ))}
          </div>

          {/* Main Content Pane */}
          <div className="flex flex-1 gap-2">
            <div className="flex flex-col flex-1 gap-2">
              {Array.from({ length: 100 }).map((_, idx) => (
                <div className="flex gap-2">
                  <span>Main Content line {idx}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
