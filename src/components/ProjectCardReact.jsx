import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import livelink from "../assets/livelink.svg";
import { fadeIn } from "../utils/motion";
import { reactProjects } from "../constants";
import { SectionWrapperPC } from "../hoc";

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	live_link,
}) => {
	return (
		<Tilt>
			<motion.div
				variants={fadeIn("right", "spring", index * 0.5, 0.75)}
				className=" shadow-card p-[1px] green-pink-gradient rounded-2xl"
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className=" bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
				>
					<div className=" relative w-full h-[230px]">
						<img
							src={image}
							alt={name}
							className="w-full h-full object-cover rounded-2xl"
						/>
						<div className=" absolute inset-0 flex gap-2 justify-end m-3 card-img_hover">
							<div
								className="cursor-pointer black-gradient  w-10  h-10  rounded-full flex justify-center items-center"
								onClick={() => window.open(source_code_link, "_blank")}
							>
								<img
									src={github}
									alt="github"
									className=" w-7 h-7 object-contain"
								/>
							</div>
							<div
								className="cursor-pointer black-gradient  w-10  h-10  rounded-full flex justify-center items-center"
								onClick={() => window.open(live_link, "_blank")}
							>
								<img
									src={livelink}
									alt="livelink"
									className=" w-7 h-7 object-contain"
								/>
							</div>
						</div>
					</div>
					<div className="mt-5 ml-1">
						<h3 className="tex-white text-center font-bold text-[24px]">
							{name}
						</h3>
						<p className="mt-2 text-secondary text-center text-[14px]">
							{description}
						</p>
					</div>
					<div className="mt-4 flex flex-wrap gap-2 ml-1 text-center justify-center">
						{tags.map((tag) => (
							<p key={tag.name} className={`${tag.color} text-[14px]`}>
								{`#${tag.name}`}
							</p>
						))}
					</div>
				</div>
			</motion.div>
		</Tilt>
	);
};

const ProjectCardReact = () => {
	return (
		<div className="mt-0  flex flex-wrap gap-7  justify-center items-center">
			{reactProjects.map((project, index) => (
				<ProjectCard key={`project-${index}`} index={index} {...project} />
			))}
		</div>
	);
};

export default SectionWrapperPC(ProjectCardReact, "");
