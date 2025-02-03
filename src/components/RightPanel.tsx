const RightPanel = () => {
  return (
    <div className="bg-[#121212] border-l border-gray-800 p-4 h-screen">
      <h2 className="text-white text-xl font-medium mb-4">Market Overview</h2>
      {/* Add your right panel content here */}
      <div className="space-y-4">
        {/* Placeholder content */}
        <div className="bg-gray-900 p-4 rounded-lg">
          <h3 className="text-white mb-2">Market Stats</h3>
          <div className="text-gray-400">Content goes here</div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
