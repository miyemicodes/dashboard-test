"use client";

import { useState, useEffect } from "react";
import AppInput from "../Search";
import dummyData from "@/components/data/dummy"; // Import the dummy data
import { IoGridOutline } from "react-icons/io5";
import { FaTable } from "react-icons/fa";

export default function Table() {
	const [search, setSearch] = useState("");
	const [isGrid, setIsGrid] = useState(false);
	const [mounted, setMounted] = useState(false);

	// Prevent hydration mismatch by setting mounted state
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		// Prevent rendering before hydration
		return null;
	}

	return (
		<div className="bg-slate-50 p-5">
			<div className="flex flex-row-reverse items-center justify-between gap-5 px-4 py-2 mb-4">
				<AppInput
					type="search"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search by name or email address"
				/>
				<button
					onClick={() => setIsGrid(!isGrid)}
					className="px-4 py-2 bg-blue-500 text-white rounded"
				>
					{isGrid ? <FaTable /> : <IoGridOutline />}
				</button>
			</div>

			<table
				className={`overflow-x-auto table-auto border-collapse w-full text-sm  ${
					isGrid
						? "grid grid-cols-4 gap-4 w-full" // Grid layout
						: "table" // Table layout
				}`}
			>
				{!isGrid && (
					<thead>
						<tr>
							<th className="border-b border-gray-300 p-2"></th>
							<th className="border-b border-gray-300 p-2 text-left">
								<select>
									<option>Name</option>
									<option>Name 1 1</option>
								</select>
							</th>
							<th className="border-b border-gray-300 p-2 text-left">
								<select>
									<option>Status reason</option>
									<option>New</option>
								</select>
							</th>
							<th className="border-b border-gray-300 p-2 text-left">
								<select className="px-3 py-2">
									<option>Status</option>
									<option>New</option>
									<option>In Progress</option>
									<option>Pending</option>
									<option>Completed</option>
								</select>
							</th>
							<th className="border-b border-gray-300 p-2 text-left">
								<select>
									<option>Created on</option>
									<option>Date</option>
								</select>
							</th>
						</tr>
					</thead>
				)}

				<tbody>
					{dummyData.map((row) => (
						<tr
							key={row.id}
							className={`text-xs font-semibold text-slate-500 ${
								isGrid
									? "border p-2 grid grid-cols-4"
									: "table-row border-b border-gray-300"
							}`}
						>
							<td className="px-2 py-3">
								<input type="checkbox" />
							</td>
							{/* Name */}
							<td className="p-2">{row.name}</td>
							{/* Topic */}
							<td className="p-2">{row.topic}</td>
							{/* Status Reason */}
							<td className="p-2">{row.statusReason}</td>
							{/* Created On */}
							<td className="p-2">{row.createdOn}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
