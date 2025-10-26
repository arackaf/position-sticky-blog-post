export const Detailed = () => {
  return (
    <div className="h-[500px] flex flex-col gap-2 overflow-auto">
      <div className="flex flex-col gap-2 bg-gray-400 min-h-[600px]">
        <span>Top</span>
        <span className="mt-auto">Bottom</span>
      </div>
      <div className="justify-self-start border-red-500 border-2 mt-2">
        <div className="sticky top-0 h-[200px] bg-red-300 flex flex-col gap-2 flex-1">
          <span>Top</span>
          <span className="mt-auto">Bottom</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-gray-400 min-h-[600px] mt-2">
        <span>Top</span>
        <span className="mt-auto">Bottom</span>
      </div>
    </div>
  );
};
