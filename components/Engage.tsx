"use client";

import React from "react";
import Image from "next/image";

import copilot from "@/public/assets/copilot.png";

function Engage() {
	return (
		<div>
			<div className="w-full flex items-center gap-3">
				<div className="flex gap-2 w-[26px] h-[26px]">
					<Image
						src={copilot}
						alt="COO"
						className="w-[26px] h-[26px] object-cover"
					/>
				</div>
				<h1 className="font-bold">Engage with Reyes</h1>
			</div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}

export default Engage;
