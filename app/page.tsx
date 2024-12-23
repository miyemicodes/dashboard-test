import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";

export default function Home() {
	return (
		<div className="flex h-screen font-inter">
			<Sidebar />
			<div className="overflow-auto no-scrollbar">
				<MainContent />
			</div>
		</div>
	);
}
