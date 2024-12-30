"use client";

import { useState } from "react";
import dummyData from "./data/dummy"; // Import the dummy data

export default function ToggleTableGrid() {
	const [isGrid, setIsGrid] = useState(false);

	return (
		<div className="p-4">
			{/* Toggle Button */}
			<button
				onClick={() => setIsGrid(!isGrid)}
				className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
			>
				Switch to {isGrid ? "Table" : "Grid"}
			</button>

			{/* Table/Grid Container */}
			<div
				className={`w-full border ${
					isGrid
						? "grid grid-cols-4 gap-4" // Grid layout
						: "table" // Table layout
				}`}
			>
				{/* Table Header */}
				{!isGrid && (
					<div className="table-header-group bg-gray-200">
						<div className="table-row">
							<div className="table-cell p-2 font-bold">Name</div>
							<div className="table-cell p-2 font-bold">Topic</div>
							<div className="table-cell p-2 font-bold">Status Reason</div>
							<div className="table-cell p-2 font-bold">Created On</div>
						</div>
					</div>
				)}

				{/* Rows */}
				<div className={isGrid ? "" : "table-row-group"}>
					{dummyData.map((row) => (
						<div
							key={row.id}
							className={`${isGrid ? "border p-2" : "table-row"}`}
						>
							{/* Name */}
							<div className={`p-2 ${isGrid ? "" : "table-cell"}`}>
								{row.name}
							</div>
							{/* Topic */}
							<div className={`p-2 ${isGrid ? "" : "table-cell"}`}>
								{row.topic}
							</div>
							{/* Status Reason */}
							<div className={`p-2 ${isGrid ? "" : "table-cell"}`}>
								{row.statusReason}
							</div>
							{/* Created On */}
							<div className={`p-2 ${isGrid ? "" : "table-cell"}`}>
								{row.createdOn}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
