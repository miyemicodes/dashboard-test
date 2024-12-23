"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

import Modal from "./Modal";
import AgentSkills from "./AgentSkills";

import { useState } from "react";
import { VscHome } from "react-icons/vsc";
import { CiClock2 } from "react-icons/ci";
import { BsPinAngle } from "react-icons/bs";
import {
	MdDashboardCustomize,
	MdOutlineCampaign,
	MdOutlineNoteAlt,
	MdOutlineRocketLaunch,
} from "react-icons/md";
import {
	LiaFileInvoiceDollarSolid,
	LiaFileInvoiceSolid,
} from "react-icons/lia";
import { TfiLayoutTab } from "react-icons/tfi";
import { RiFileList3Line } from "react-icons/ri";
import { LuFileChartPie, LuPackage } from "react-icons/lu";
import { HiOutlineDocumentCurrencyEuro } from "react-icons/hi2";
import { AiOutlineUser } from "react-icons/ai";
import { TbInvoice, TbUserQuestion } from "react-icons/tb";
import { PiPhoneListBold } from "react-icons/pi";

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isModalOpen, setModalOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<div className="w-max bg-[#efefef] h-screen">
				<button
					onClick={toggleSidebar}
					className="md:hidden fixed top-4 left-1 z-50 p-2 text-lg text-black"
				>
					{isOpen ? <FaTimes /> : <FaBars />}
				</button>
				<div
					className={`fixed top-0 left-0 text-black transition-transform duration-300 w-max h-screen overflow-y-scroll no-scrollbar ${
						isOpen ? "translate-x-0" : "-translate-x-full"
					} md:translate-x-0 md:static w-[210px] z-40 `}
				>
					<nav className="mt-12 text-xs w-full">
						<ul className="flex flex-col gap-0 w-full transition-all duration-300 ease-in-out">
							<li className="w-full flex items-center justify-start gap-2 px-4 py-2 cursor-pointer font-normal hover:bg-white hover:border-blue-500 hover:border-l-4 transition duration-300 ">
								<VscHome className="text-base" />
								<Link href="/">Home</Link>
							</li>
							<li className="flex items-center justify-start gap-2  px-4 py-2 cursor-pointer font-normal hover:bg-white hover:border-blue-500 hover:border-l-4 transition duration-300 ">
								<CiClock2 className="text-base" />
								<Link href="/">Recent</Link>
							</li>
							<li className="flex items-center justify-start gap-2  px-4 py-2 cursor-pointer font-normal hover:bg-white hover:border-blue-500 hover:border-l-4 transition duration-300 ">
								<BsPinAngle className="text-base" />
								<Link href="/">Pinned</Link>
							</li>
						</ul>

						<ul className="flex flex-col gap-0 w-full">
							<li className="px-4 py-2 font-bold">My work</li>
							<li className="w-full flex items-center justify-start gap-2 px-4 py-2 cursor-pointer font-normal hover:bg-white hover:border-blue-500 hover:border-l-4 transition duration-300">
								<MdOutlineRocketLaunch className="text-base" />
								<span> Sales accelerator</span>
							</li>
							<li className="flex items-center justify-start gap-2 px-4 py-2 cursor-pointer font-normal hover:bg-white hover:border-blue-500 hover:border-l-4 transition duration-300 ">
								<MdDashboardCustomize className="text-base" />
								<span>Dashboards</span>
							</li>
							<li className="flex items-center justify-start gap-2 px-4 py-2 cursor-pointer font-normal hover:bg-white hover:border-blue-500 hover:border-l-4 transition duration-300 ">
								<MdOutlineNoteAlt className="text-base" />
								<span>Activities</span>
							</li>
						</ul>

						<ul className="flex flex-col gap-0 w-full">
							<li className="px-4 py-1 font-bold"> Customers</li>
							<li className="flex items-center justify-start gap-2 px-4 py-2 cursor-pointer font-normal hover:bg-white hover:border-blue-500 hover:border-l-4 transition duration-300 ">
								<TfiLayoutTab className="text-base" />
								<span>Accounts</span>
							</li>
							<li className=" flex items-center justify-start gap-2 px-4 py-2 cursor-pointer font-normal hover:bg-white hover:border-blue-500 hover:border-l-4 transition duration-300 ">
								<AiOutlineUser className="text-base" />
								<span>Contact</span>
							</li>
						</ul>

						<ul className="flex flex-col gap-0 w-full">
							<li className="px-4 py-1 font-bold"> Sales</li>
							<li className="flex items-center justify-start gap-2 px-4 py-2 cursor-pointer font-normal hover:bg-white hover:border-blue-500 hover:border-l-4 transition duration-300 ">
								<PiPhoneListBold className="text-base" />
								<span>Leads</span>
							</li>
							<li className="flex items-center justify-start gap-2 px-4 py-2 cursor-pointer font-normal hover:bg-white hover:border-blue-500 hover:border-l-4 transition duration-300 ">
								<TbInvoice className="text-base" />
								<span>Opportunities</span>
							</li>
							<li className="flex items-center justify-start gap-2 px-4 py-2 cursor-pointer font-normal hover:bg-white hover:border-blue-500 hover:border-l-4 transition duration-300 ">
								<TbUserQuestion className="text-base" />
								<span>Competitors</span>
							</li>
							<li
								onClick={() => setModalOpen(true)}
								className="flex items-center justify-start gap-2 px-4 py-2 cursor-pointer font-normal hover:bg-white hover:border-blue-500 hover:border-l-4 transition duration-300 "
							>
								<TbUserQuestion className="text-base" />
								<span>Agent Skill</span>
							</li>
						</ul>

						<ul className="flex flex-col gap-0 w-full">
							<li className="px-4 py-1 font-bold"> Collateral</li>
							<li className="flex items-center justify-start gap-2 px-4 py-2 cursor-pointer font-normal hover:bg-white hover:border-blue-500 hover:border-l-4 transition duration-300 ">
								<LuFileChartPie className="text-base" />
								<span>Quotes</span>
							</li>
							<li className="flex items-center justify-start gap-2 px-4 py-2 cursor-pointer font-normal hover:bg-white hover:border-blue-500 hover:border-l-4 transition duration-300 ">
								<LiaFileInvoiceSolid className="text-base" />
								<span>Orders</span>
							</li>
							<li className="flex items-center justify-start gap-2 px-4 py-2 cursor-pointer font-normal hover:bg-white hover:border-blue-500 hover:border-l-4 transition duration-300 ">
								<LiaFileInvoiceDollarSolid className="text-base" />
								<span>Invoices</span>
							</li>
							<li className="flex items-center justify-start gap-2 px-4 py-2 cursor-pointer font-normal hover:bg-white hover:border-blue-500 hover:border-l-4 transition duration-300 ">
								<LuPackage className="text-base" />
								<span>Products</span>
							</li>
							<li className="flex items-center justify-start gap-2 px-4 py-2 cursor-pointer font-normal hover:bg-white hover:border-blue-500 hover:border-l-4 transition duration-300 ">
								<HiOutlineDocumentCurrencyEuro className="text-base" />
								<span>Sales Literature</span>
							</li>
						</ul>

						<ul className="flex flex-col gap-0 w-full">
							<li className="px-4 py-1 font-bold">Marketing</li>
							<li className="flex items-center justify-start gap-2 px-4 py-2 cursor-pointer font-normal hover:bg-white hover:border-blue-500 hover:border-l-4 transition duration-300 ">
								<RiFileList3Line className="text-base" />
								<span>Marketing lists</span>
							</li>
							<li className="flex items-center justify-start gap-2 px-4 py-2 cursor-pointer font-normal hover:bg-white hover:border-blue-500 hover:border-l-4 transition duration-300 ">
								<MdOutlineCampaign className="text-base" />
								<span>Quick Campaigns</span>
							</li>
						</ul>

						<ul className="flex flex-col gap-0 w-full">
							<li className="font-bold">Performance</li>
							<li>Sales</li>
						</ul>
					</nav>
				</div>
			</div>

			{isModalOpen && (
				<Modal
					open={isModalOpen}
					onClose={() => setModalOpen(false)}
				>
					<AgentSkills />
				</Modal>
			)}
		</>
	);
}
