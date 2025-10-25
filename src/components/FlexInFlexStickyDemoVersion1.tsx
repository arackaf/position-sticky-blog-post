export const FlexInFlexStickyDemoVersion1 = () => {
  return (
    <div className="h-[500px] flex gap-2 border-2 overflow-hidden">
      {/* Side Navigation Pane */}
      <div className="flex flex-col gap-8 w-56">
        <span>SIDE NAVIGATION</span>
      </div>

      {/* Main Content Pane */}
      <div className="flex flex-1 gap-2">
        <div className="flex flex-col flex-1 gap-2">
          {Array.from({ length: 100 }).map((_, idx) => (
            <span>Content line {idx}</span>
          ))}
        </div>
        <div className="flex flex-col flex-1 gap-2">
          {Array.from({ length: 100 }).map((_, idx) => (
            <span>Content line {idx}</span>
          ))}
        </div>
        {/* Side drawer */}
        <div className="sticky top-0 bg-red-300 flex flex-col gap-8 flex-1 overflow-auto">
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
  );
};
