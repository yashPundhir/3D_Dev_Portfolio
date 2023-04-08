import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapperReRender = (Component, idName) =>
	function HOC() {
		const [key, setKey] = useState(0);

		function handleResize() {
			setKey((prevKey) => prevKey + 1);
		}

		useEffect(() => {
			window.addEventListener("resize", handleResize);
			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}, []);

		return (
			<motion.section
				key={key}
				variants={staggerContainer()}
				initial="hidden"
				animate="show"
				// whileInView={"show"}
				// viewport={{
				// 	once: true,
				// 	amount: 0.25,
				// }}
				className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
			>
				<span className="hash-span" id={idName}>
					&nbsp;
				</span>
				<Component />
			</motion.section>
		);
	};

export default SectionWrapperReRender;
