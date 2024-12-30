"use client";

import { useState } from "react";

import Select from "../Select/Select";
import AppInput from "../Search";

export default function Table() {
	const [search, setSearch] = useState("");

	return (
		<div className="bg-slate-50 p-3">
			<AppInput
				type="search"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search by name or email address"
			/>

			<div className="overflow-x-auto">
				<table className="table-auto border-collapse w-full text-sm">
					<thead>
						<tr>
							<th className="border-b border-gray-300 p-2"></th>
							<th className="border-b border-gray-300 p-2 text-left">
								<Select
									options={[
										{ label: "Exchange", value: "Exchange" },
										{ label: "Transfer", value: "Transfer" },
										{ label: "MoneyNow", value: "MoneyNow" },
									]}
								/>
							</th>
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
					</thead>

					<tbody className="text-xs font-semibold text-slate-500">
						<tr>
							<td className="border-b border-gray-300  px-2 py-3">
								<input type="checkbox" />
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								name
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								topic
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								statusReason
							</td>

							<td className="border-b border-gray-300 px-2 py-3 text-left">
								createdOn
							</td>
						</tr>

						<tr>
							<td className="border-b border-gray-300  px-2 py-3">
								<input type="checkbox" />
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								Winson Asher
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								Cafe A100 for commercial use
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								New
							</td>

							<td className="border-b border-gray-300 px-2 py-3 text-left">
								date 1
							</td>
						</tr>
						<tr>
							<td className="border-b border-gray-300  px-2 py-3">
								<input type="checkbox" />
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								Winson Asher
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								Cafe A100 for commercial use
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								New
							</td>

							<td className="border-b border-gray-300 px-2 py-3 text-left">
								date 1
							</td>
						</tr>
						<tr>
							<td className="border-b border-gray-300  px-2 py-3">
								<input type="checkbox" />
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								Winson Asher
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								Cafe A100 for commercial use
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								New
							</td>

							<td className="border-b border-gray-300 px-2 py-3 text-left">
								date 1
							</td>
						</tr>
						<tr>
							<td className="border-b border-gray-300  px-2 py-3">
								<input type="checkbox" />
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								Winson Asher
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								Cafe A100 for commercial use
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								New
							</td>

							<td className="border-b border-gray-300 px-2 py-3 text-left">
								date 1
							</td>
						</tr>
						<tr>
							<td className="border-b border-gray-300  px-2 py-3">
								<input type="checkbox" />
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								Winson Asher
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								Cafe A100 for commercial use
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								New
							</td>

							<td className="border-b border-gray-300 px-2 py-3 text-left">
								date 1
							</td>
						</tr>
						<tr>
							<td className="border-b border-gray-300  px-2 py-3">
								<input type="checkbox" />
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								Winson Asher
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								Cafe A100 for commercial use
							</td>
							<td className="border-b border-gray-300 px-2 py-3 text-left">
								New
							</td>

							<td className="border-b border-gray-300 px-2 py-3 text-left">
								date 1
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
