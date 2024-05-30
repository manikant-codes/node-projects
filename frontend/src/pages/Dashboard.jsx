import React from "react";

function Dashboard() {
  return (
    <div className="p-8">
      <h2 className="mb-4 text-2xl font-bold">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-red-200 rounded-md">
          <p>Tasks Pending</p>
          <p className="text-4xl text-red-700 mt-2 font-semibold">10</p>
        </div>
        <div className="p-4 bg-green-200 rounded-md">
          <p>Tasks Completed</p>
          <p className="text-4xl text-green-700 mt-2 font-semibold">10</p>
        </div>
        <div className="p-4 bg-blue-200 rounded-md">
          <p>Total Tasks</p>
          <p className="text-4xl text-blue-700 mt-2 font-semibold">10</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
