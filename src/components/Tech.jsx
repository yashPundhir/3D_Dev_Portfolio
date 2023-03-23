import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
	return (
		//styling left: do it afterwards
		<div>
			<div
				className={`${styles.sectionHeadText} mb-16 flex justify-center items-center`}
			>
				<h2>Tech &nbsp;Stack</h2>
			</div>
			<div className="flex flex-row flex-wrap justify-center gap-10">
				{technologies.map((technology) => (
					<div className=" w-28  h-28" key={technology.name}>
						<BallCanvas icon={technology.icon} />
					</div>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
