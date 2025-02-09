"use client";

import { useState } from "react";
import AppInput from "../Search";
import dummyData from "@/components/data/dummy"; // Import the dummy data

export default function Table() {
	const [search, setSearch] = useState("");
	const [isGrid, setIsGrid] = useState(false);

	return (
		<div className="bg-slate-50 p-3">
			<AppInput
				type="search"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search by name or email address"
			/>
			<button
				onClick={() => setIsGrid(!isGrid)}
				className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
			>
				Switch to {isGrid ? "Table" : "Grid"}
			</button>

			<div className="overflow-x-auto">
				<table
					className={`table-auto border-collapse w-full text-sm  ${
						isGrid
							? "grid grid-cols-4 gap-4" // Grid layout
							: "table" // Table layout
					}`}
				>
					<thead
						className={`w-full border ${
							isGrid
								? "grid grid-cols-4 gap-4" // Grid layout
								: "table" // Table layout
						}`}
					>
						{!isGrid && (
							<tr>
								<th className="border-b border-gray-300 p-2"></th>
								<th className="border-b border-gray-300 p-2 text-left">
									<select>
										<option>Topic </option>
										<option>Topic 1</option>
									</select>
								</th>
								<th className="border-b border-gray-300 p-2 text-left">
									<select>
										<option>Status reason </option>
										<option>New</option>
									</select>
								</th>
								<th className="border-b border-gray-300 p-2 text-left">
									<select>
										<option>Created on </option>
										<option>Date </option>
									</select>
								</th>
							</tr>
						)}
					</thead>

					<tbody className="text-xs font-semibold text-slate-500">
						{dummyData.map((row) => (
							<div
								key={row.id}
								className={`${
									isGrid ? "border p-2" : "table-row border-b border-gray-300"
								}`}
							>
								<td className="  px-2 py-3">
									<input type="checkbox" />
								</td>
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
					</tbody>
				</table>
			</div>
		</div>
	);
}
