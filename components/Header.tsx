import { BsPlusLg } from "react-icons/bs";
import { CiCircleList, CiImageOn } from "react-icons/ci";
import { FaRegShareSquare } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import { LuColumns3, LuDatabaseZap } from "react-icons/lu";
import { PiArrowClockwiseFill, PiMicrosoftTeamsLogoFill } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Header() {
	return (
		<header className="bg-slate-100 fixed top-0 left-0 w-screen  md:static ">
			<div className=" flex items-center justify-between gap-3 px-6 py-2 shadow-xl rounded-md overflow-x-auto no-scrollbar md:overflow-visible ml-[80px] md:ml-0">
				<div className="flex items-center justify-center gap-2 whitespace-nowrap">
					<p className="font-sans text-xs">My open leads</p>
					<IoIosArrowDown className="text-base" />
				</div>

				<div className="flex items-center justify-center gap-3">
					<div className="flex items-center justify-center gap-3">
						<ul className="flex items-center justify-center gap-4 text-xs whitespace-nowrap">
							<li className="flex flex-row items-center justify-start gap-1 hover:text-slate-100 p-1 hover:bg-blue-500 rounded-md transition duration-300">
								<CiImageOn className="text-base" />
								<span>Show chart</span>
							</li>
							<li className="flex flex-row items-center justify-start gap-1 hover:text-slate-100 p-1 hover:bg-blue-500 rounded-md transition duration-300">
								<CiCircleList className="text-base" />
								<span>Focused view</span>
							</li>
							<li className="flex flex-row items-center justify-start gap-1 hover:text-slate-100 p-1 hover:bg-blue-500 rounded-md transition duration-300">
								<BsPlusLg className="text-base" />
								<span>New</span>
							</li>
							<li className="flex flex-row items-center justify-start gap-1 hover:text-slate-100 p-1 hover:bg-blue-500 rounded-md transition duration-300">
								<PiArrowClockwiseFill className="text-base" />
								<span> Refresh</span>
							</li>
							<li className="flex flex-row items-center justify-start gap-1 hover:text-slate-100 p-1 hover:bg-blue-500 rounded-md transition duration-300">
								<PiMicrosoftTeamsLogoFill className="text-base" />
								<span>Collaborate</span>
							</li>
							<li className="flex flex-row items-center justify-start gap-1 divide-x divide-slate-300 hover:text-slate-100 p-1 hover:bg-blue-500 rounded-md transition duration-300">
								<div className="w-max flex flex-row gap-1 p-1">
									<RiDeleteBinLine className="text-base" />
									<span>Delete</span>
								</div>
								<div className="p-1">
									<IoIosArrowDown className="text-base text-slate-400" />
								</div>
							</li>
						</ul>
					</div>

					<button>
						<HiOutlineDotsVertical />
					</button>

					<ul className="flex items-center justify-center gap-2 text-xs whitespace-nowrap">
						<li className="flex flex-row items-center justify-start gap-1 p-2 border  hover:text-slate-100  hover:bg-blue-500 rounded-md transition duration-300">
							<LuDatabaseZap className="text-base" />
							<span>Smart data</span>
						</li>
						<li className="flex flex-row items-center justify-start gap-1 p-2 border  hover:text-slate-100  hover:bg-blue-500 rounded-md transition duration-300">
							<IoFilterOutline className="text-base" />
							<span>Edit filters</span>
						</li>
						<li className="flex flex-row items-center justify-start gap-1 p-2 border  hover:text-slate-100  hover:bg-blue-500 rounded-md transition duration-300">
							<LuColumns3 className="text-base" />
							<span>Edit columns</span>
						</li>
					</ul>

					<button className="flex flex-row items-center justify-center border rounded bg-blue-700 text-slate-100 py-2">
						<div className="flex divide-x divide-white">
							<div className="px-4">
								<FaRegShareSquare className="text-base" />
							</div>
							<div className="px-2">
								<IoIosArrowDown className="text-base" />
							</div>
						</div>
					</button>
				</div>
			</div>
		</header>
	);
}
