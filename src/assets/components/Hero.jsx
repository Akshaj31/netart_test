import React from "react";
import Card from "./Card";
import photo3 from "../../../public/3.png";

const Hero = () => {
	return (
		<div>
			<div>
				<Card />
			</div>
			<div>
				<p className="p-2 font-serif font-semibold text-sm">
					INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
					RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
					POWER FOR THE NATION.
				</p>
				<div className=" flex items-center flex-col">
					<img className="px-2 sm:px-0 sm:w-[75%] py-2" src={photo3} alt="" />
					<p className="px-2 py-3 font-serif font-semibold text-sm">
						Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
						Solar Systems - Motors
					</p>
				</div>
			</div>
			<hr className="mt-2 h-0.5 border-0 rounded bg-red-600" />
		</div>
	);
};

export default Hero;
