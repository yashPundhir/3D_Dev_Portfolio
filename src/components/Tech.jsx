import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
	return (
		//styling left: do it afterwards
		<div>
			<motion.div
				variants={textVariant()}
				className={`${styles.sectionHeadText} mb-16 flex justify-center items-center`}
			>
				<h2>Tech &nbsp;Stack</h2>
			</motion.div>
			<div className="flex flex-row flex-wrap justify-center gap-10 pb-8">
				{technologies.map((technology) => (
					<div className=" w-36  h-28" key={technology.name}>
						<BallCanvas icon={technology.icon} />
					</div>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
