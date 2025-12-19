import React from 'react';

function Dashboard() {
  return (
    <div className="min-h-screen bg-white px-8 py-6 font-sans">
      {/* Header */}
      <div className="border-b pb-4 mb-6 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center">Demo Dashboard development for the book inventory</h1>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">member connected</span>
            <span className="flex items-center gap-1">
              <span className="bg-purple-700 text-white rounded-full px-3 py-1 text-sm font-semibold">JD</span>
              <span className="bg-purple-700 text-white rounded-full px-3 py-1 text-sm font-semibold">JD</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-gray-200 rounded-full p-2"><span role="img" aria-label="chat">💬</span></button>
            <button className="bg-black text-white rounded px-4 py-2 font-semibold">Open</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Stats Section */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-green-200 rounded-xl p-6 flex flex-col gap-2">
            <span className="text-lg font-semibold">Good day, Vihara</span>
            <button className="bg-white rounded-full px-4 py-2 font-semibold w-max">Start Tracking</button>
          </div>
          <div className="flex gap-4">
            <div className="bg-yellow-100 rounded-xl p-6 flex-1 flex flex-col items-center">
              <span className="text-2xl font-bold">20</span>
              <span className="text-sm">Task Finished</span>
            </div>
            <div className="bg-yellow-100 rounded-xl p-6 flex-1 flex flex-col items-center">
              <span className="text-2xl font-bold">20</span>
              <span className="text-sm">Track hours</span>
            </div>
          </div>
          <div className="bg-purple-200 rounded-xl p-6 flex flex-col items-center">
            <span className="text-xl font-bold">Your Planning</span>
            <span className="text-sm">5 of 8 Completed</span>
          </div>
        </div>

        {/* Task Today Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Your Task Today</h2>
          <div className="flex flex-col gap-4">
            {[1,2,3].map((_,i) => (
              <div key={i} className="border rounded-xl p-4 flex flex-col gap-1">
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Number 10</span>
                  <span>4h</span>
                </div>
                <span className="font-semibold">Block and Social posts</span>
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <span role="img" aria-label="deadline">🗓️</span> Deadline Time
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;