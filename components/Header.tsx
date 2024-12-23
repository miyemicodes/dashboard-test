import { CiCircleList, CiImageOn } from "react-icons/ci";
import { FaPlus, FaRegShareSquare } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import { LuColumns3, LuDatabaseZap } from "react-icons/lu";
import { PiArrowClockwiseFill, PiMicrosoftTeamsLogoFill } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Header() {
	return (
		<header className="bg-slate-100 fixed top-0 left-0 md:static overflow-x-auto">
			<div className=" flex items-center justify-between px-6 py-3 shadow-xl rounded-md overflow-x-auto no-scrollbar ml-10 md:ml-0 ">
				<div className="flex items-center justify-center gap-1 whitespace-nowrap">
					<p className="text-xs">My open leads</p>
					<IoIosArrowDown className="text-base" />
				</div>

				<div className="flex items-center justify-center gap-3">
					<div className="flex items-center justify-center gap-3 divide-x divide-slate-300">
						<ul className="flex items-center justify-center gap-3 text-xs whitespace-nowrap">
							<li className="flex flex-row items-center justify-start gap-1">
								<CiImageOn className="text-base" />
								<span>Show chart</span>
							</li>
							<li className="flex flex-row items-center justify-start gap-1">
								<CiCircleList className="text-base" />
								<span>Focused view</span>
							</li>
							<li className="flex flex-row items-center justify-start gap-1">
								<FaPlus className="text-base" />
								<span>New</span>
							</li>
							<li className="flex flex-row items-center justify-start gap-1">
								<PiArrowClockwiseFill className="text-base" />
								<span> Refresh</span>
							</li>
							<li className="flex flex-row items-center justify-start gap-1">
								<PiMicrosoftTeamsLogoFill className="text-base" />
								<span>Collaborate</span>
							</li>
							<li className="flex flex-row items-center justify-start gap-1">
								<RiDeleteBinLine className="text-base" />
								<span>Delete</span>
							</li>
						</ul>

						<IoIosArrowDown className="text-base text-slate-400" />
					</div>

					<button>
						<HiOutlineDotsVertical />
					</button>

					<ul className="flex items-center justify-center gap-2 text-xs whitespace-nowrap">
						<li className="flex flex-row items-center justify-start gap-1 p-2 border rounded">
							<LuDatabaseZap className="text-base" />
							<span>Smart data</span>
						</li>
						<li className="flex flex-row items-center justify-start gap-1 p-2 border rounded">
							<IoFilterOutline className="text-base" />
							<span>Edit filters</span>
						</li>
						<li className="flex flex-row items-center justify-start gap-1 p-2 border rounded">
							<LuColumns3 className="text-base" />
							<span>Edit columns</span>
						</li>
					</ul>

					<button className="flex items-center justify-center gap-4 p-2 border rounded bg-blue-700 text-slate-100 divide-x divide-white">
						<FaRegShareSquare className="text-base" />

						<IoIosArrowDown className="text-base" />
					</button>
				</div>
			</div>
		</header>
	);
}
