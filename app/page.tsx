import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";

export default function Home() {
	return (
		<div className="flex h-screen font-inter divide-x-2 divide-[#e0e0e0]">
			<Sidebar />
			<div className="overflow-auto no-scrollbar">
				<MainContent />
			</div>
		</div>
	);
}
