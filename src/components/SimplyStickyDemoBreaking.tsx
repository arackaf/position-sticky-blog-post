export const SimplyStickyDemoBreaking = () => {
  return (
    <div className="h-[500px] gap-2 overflow-auto">
      <div className="flex flex-col gap-2 bg-gray-400 h-[400px]">
        <span>Top</span>
        <span className="mt-auto">Bottom</span>
      </div>
      <div className="sticky top-0 h-[600px] bg-red-300 flex flex-col gap-2 flex-1 mt-2">
        <span>Top</span>
        <span className="mt-auto">Bottom</span>
      </div>
      <div className="flex flex-col gap-2 bg-gray-400 h-[400px] mt-2">
        <span>Top</span>
        <span className="mt-auto">Bottom</span>
      </div>
    </div>
  );
};
