import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import livelink from "../assets/livelink.svg";
import { SectionWrapper } from "../hoc";
import { htmlCssProjects, tailwindProjects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

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
									alt="github"
									className=" w-7 h-7 object-contain"
								/>
							</div>
						</div>
					</div>
					<div className="mt-5 ml-1">
						<h3 className="tex-white font-bold text-[24px]">{name}</h3>
						<p className="mt-2 text-secondary text-[14px]">{description}</p>
					</div>
					<div className="mt-4 flex flex-wrap gap-2 ml-1">
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

const Works = () => {
	// const [active, setActive] = useState(false);

	// function toggleActive() {
	// 	setActive(!active);
	// }

	const [activeProjects, setActiveProjects] = useState(htmlCssProjects);

	return (
		<>
			<motion.div
				variants={textVariant()}
				className="flex flex-col justify-center items-center"
			>
				<p className={styles.sectionSubText}>My Work</p>
				<h2 className={styles.sectionHeadText}>Projects</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto flex justify-center text-center"
				>
					Following projects showcases my skills and experience through
					real-world examples of my work. Each project is briefly described with
					links to code repositories and live demos in it. It reflects my
					ability to solve complex problems, work with different technologies,
					and manage projects effectively.
				</motion.p>
			</div>
			<div>
				<ul
					className={`list-none flex justify-center items-center gap-10 mt-16 text-2xl font-medium `}
				>
					<Link to="/htmlcss">
						<li
							className={` text-secondary hover:text-white`}
							onClick={() => {
								setActiveProjects(htmlCssProjects);
							}}
							// onClick={toggleActive}
						>
							HTML & CSS
						</li>
					</Link>
					<Link to="/tailwindcss">
						<li
							className={` text-secondary hover:text-white`}
							onClick={() => {
								setActiveProjects(tailwindProjects);
							}}
							//onClick={toggleActive}
						>
							Tailwind CSS
						</li>
					</Link>
					<Link to="/javascript">
						<li
							className={` text-secondary hover:text-white`}
							//onClick={toggleActive}
						>
							JavaScript
						</li>
					</Link>
					<Link to="/react">
						<li
							className={` text-secondary hover:text-white`}
							//onClick={toggleActive}
						>
							React
						</li>
					</Link>
				</ul>
			</div>
			<div className="mt-20  flex flex-wrap gap-7  justify-center items-center">
				{activeProjects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "projects");
