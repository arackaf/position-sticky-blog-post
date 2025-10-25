export const FlexDemo2 = () => {
  return (
    <div className="flex border-2 rounded-md">
      <div className="h-[600px] flex flex-col flex-1 gap-2 overflow-auto">
        <div className="h-[300px] bg-gray-400 overflow-auto">
          {Array.from({ length: 100 }).map((_, idx) => (
            <div className="flex gap-2">
              <span>TopContent line {idx}</span>
            </div>
          ))}
        </div>
        <div className="h-[300px] flex sticky top-0">
          <div className="flex-3">Some content here</div>
          <div className="flex-1 flex-col gap-2 overflow-auto">
            {Array.from({ length: 100 }).map((_, idx) => (
              <div className="flex gap-2">
                <span>Middle Content line {idx}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[300px] bg-gray-400 overflow-auto">
          {Array.from({ length: 100 }).map((_, idx) => (
            <div className="flex gap-2">
              <span>Bottom Content line {idx}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
