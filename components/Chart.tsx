import { Bar, Pie, Line, PolarArea, Radar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
	PointElement,
	LineElement,
	RadialLinearScale,
} from "chart.js";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
	PointElement,
	LineElement,
	RadialLinearScale
);

export default function ChartsPage() {
	const [chartData] = useState({
		labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		datasets: [
			{
				label: "Dataset 1",
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	});

	return (
		<div className="flex">
			<Sidebar />
			<div className="flex-1 p-6">
				<h1 className="text-2xl font-bold mb-6">Charts Dashboard</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="bg-white p-4 shadow rounded-xl">
						<h2 className="text-lg font-semibold mb-2">Pie Chart</h2>
						<Pie data={chartData} />
					</div>
					<div className="bg-white p-4 shadow rounded-xl">
						<h2 className="text-lg font-semibold mb-2">Bar Chart</h2>
						<Bar data={chartData} />
					</div>
					<div className="bg-white p-4 shadow rounded-xl">
						<h2 className="text-lg font-semibold mb-2">Floating Bar Chart</h2>
						<Bar
							data={{
								labels: ["A", "B", "C"],
								datasets: [
									{
										label: "Floating Bar",
										data: [
											{ x: "A", y: [2, 8] },
											{ x: "B", y: [4, 10] },
											{ x: "C", y: [6, 12] },
										],
										backgroundColor: "rgba(54, 162, 235, 0.5)",
									},
								],
							}}
							options={{
								scales: { x: { stacked: true }, y: { stacked: true } },
							}}
						/>
					</div>
					<div className="bg-white p-4 shadow rounded-xl">
						<h2 className="text-lg font-semibold mb-2">Line Chart</h2>
						<Line data={chartData} />
					</div>
					<div className="bg-white p-4 shadow rounded-xl">
						<h2 className="text-lg font-semibold mb-2">Polar Area Chart</h2>
						<PolarArea data={chartData} />
					</div>
					<div className="bg-white p-4 shadow rounded-xl">
						<h2 className="text-lg font-semibold mb-2">Radar Chart</h2>
						<Radar data={chartData} />
					</div>
				</div>
			</div>
		</div>
	);
}
