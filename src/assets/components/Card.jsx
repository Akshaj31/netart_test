import React from "react";
import photo1 from "../../../public/1.png";
import photo2 from "../../../public/2.png";

const Card = () => {
	return (
		<div className="flex flex-row font-serif">
			<img className="hidden md:flex max-w-[30%] h-auto mx-8" src={photo1} alt="" />
			<div>
				<h1 className="py-3 font-black px-3 md:px-1">
					{" "}
					C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
					4th time.
				</h1>
				<div className="flex flex-col px-2 md:px-4">
					<ul className="list-disc pl-10 font-medium text-sm pb-4">
						<li className="">
							C.R.I.'s energy efficient products are well recognized by various
							Government Institutions, as trustworthy products for various
							projects across the globe to save energy.
						</li>
						<li>
							C.R.I. is the highest contributor in the country for the projects
							of EESL (Energy Efficiency Services Limited) to replace the old
							inefficient pumps with 5 Star rated energy efficient smart pumps
							with IoT enabled control panel.
						</li>
					</ul>
					<img src={photo2} alt="" />
				</div>
				<p className="font-serif font-medium text-sm py-3">
					Government of India has awarded the <span className="font-bold">"National Energy Conservation
					Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
					received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha &
					Shri. Raj Kumar Singh, Honorable Minister of State.
				</p>
			</div>
		</div>
	);
};

export default Card;
