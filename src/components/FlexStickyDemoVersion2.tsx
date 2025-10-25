export const FlexStickyDemoVersion2 = () => {
  return (
    <div className="h-[500px] flex gap-2 overflow-auto border-2">
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
      <div className="sticky top-0 bg-red-300 flex flex-col gap-2 flex-1 overflow-auto">
        {Array.from({ length: 150 }).map((_, idx) => (
          <span>Content line {idx}</span>
        ))}
      </div>
    </div>
  );
};
