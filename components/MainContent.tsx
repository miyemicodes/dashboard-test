import Header from "./Header";
import LeadsAccordion from "./Leads";
import Table from "./Table/Table";

export default function MainContent() {
	return (
		<div className="flex-1 flex flex-col gap-4 h-screen w-screen overflow-auto  bg-gray-200 md:px-4 pt-4">
			<Header />
			<LeadsAccordion />
			<Table />
		</div>
	);
}
