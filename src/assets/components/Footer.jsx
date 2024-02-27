import React from "react";
import call from "../../../public/icons8-call-64.png";
import facebook from "../../../public/icons8-facebook-30.png";
import web from "../../../public/icons8-web-50.png";

const Footer = () => {
	return (
		<div className="font-serif">
			<div className="font-serif flex flex-col items-center">
				<h1 className="font-extrabold p-4 ">
					C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
				</h1>
				<ul className="flex flex-wrap justify-center  text-sm font-semibold">
					<li className="separator">CHEMICALS & PROCESS</li>
					<li className="separator">POWER</li>
					<li className="separator">WATER & WASTE WATER</li>
					<li className="separator">OILS & GAS</li>
					<li className="separator">PHARMA</li>
					<li className="separator">SUGARS & DISTILLERIES</li>
					<li className="separator">PAPER & PULP</li>
					<li className="separator">MARINE & DEFENCE</li>
					<li className="separator">METAL & MINING</li>
					<li className="separator">FOOD & BEVERAGE</li>
					<li className="separator">PETROCHEMICAL & REFINERIES</li>
					<li className="separator">SOLAR</li>
					<li className="separator">BUILDING</li>
					<li className="separator">HVAC</li>
					<li className="separator">FIRE FIGHTING</li>
					<li className="separator">AGRICULTURE & RESIDENTIAL</li>
				</ul>
			</div>
			<div className=" bg-red-600 mt-8 py-4 mb-2">
				<div className="flex flex-row justify-between px-6 py-4 text-white items-center text-sm">
					<a
						href="tel:%1800 200 1234"
						className="flex flex-row gap-2 items-center "
					>
						<img className="h-[30px]" src={call} alt="" />
						<p className="hidden md:block ">
							Toll free {"     "}
							<span className="font-bold  ">1800 200 1234</span>
						</p>
					</a>
					<a
						className="flex flex-row gap-2 items-center"
						href="https://www.facebook.com/cripumps"
						target="_blank"
					>
						<img className="h-[30px]" src={facebook} alt="" />
						<p className="md:block hidden">www.facebook.com/cripumps</p>
					</a>
					<a
						className="flex flex-row gap-2 items-center"
						href="https://www.crigroups.com"
						target="_blank"
					>
						<img className="h-[30px]" src={web} alt="" />
						<p className="hidden md:block">www.crigroups.com</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
