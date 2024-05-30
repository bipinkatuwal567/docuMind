import React from "react";
import UploadButton from "./UploadButton";

const Dashboard = () => {
  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="flex flex-col items-start justify-between gap-4 mt-8 border-b border-gray-200 pb-5 sm:flex-row sm:items-center">
        <h2 className="text-5xl mb-3 font-bold text-gray-900">My Files</h2>

        <UploadButton />
      </div>
    </main>
  );
};

export default Dashboard;
