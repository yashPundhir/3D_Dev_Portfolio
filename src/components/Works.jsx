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
// import ProjectCardHTMLCSS from "./ProjectCardHTMLCSS";
import ProjectCardTailwindCSS from "./ProjectCardTailwindCSS";
import { Outlet } from "react-router-dom";

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
			{/* Project's categories toggle bar */}
			<div>
				<ul
					className={`list-none flex justify-center items-center gap-10 mt-16 text-2xl font-medium`}
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
		</>
	);
};

export default SectionWrapper(Works, "projects");
