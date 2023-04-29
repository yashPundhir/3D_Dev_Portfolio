import { motion } from "framer-motion";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Hero = () => {
	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);
	return (
		<section className="relative w-full h-[800px] mx-auto">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915eff]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, I'm <span className="text-[#915eff]">Yash</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2.5 text-white-100`}>
						I develop User Interfaces,
					</p>
					<p className={`${styles.heroSubText} mt-1 text-white-100`}>
						APIs & Web Applications.
					</p>
				</div>
				{/* <ComputersCanvas /> */}
				<Particles
					id="tsparticles"
					className="absolute inset-0"
					init={particlesInit}
					loaded={particlesLoaded}
					options={{
						background: {
							color: {
								// value: "#101010",
								value: "transparent",
							},
						},
						fpsLimit: 1500,
						interactivity: {
							events: {
								onClick: {
									enable: true,
									mode: "push",
								},
								onHover: {
									enable: true,
									mode: ["grab", "connect"],
									// mode: "connect",
								},
								resize: true,
							},
							modes: {
								push: {
									quantity: 4,
								},
								grab: {
									distance: 140,
									links: {
										opacity: 0.5,
									},
								},
								connect: {
									distance: 250,
									radius: 60,
									links: {
										opacity: 0.9,
									},
								},
							},
						},
						particles: {
							color: {
								value: "#cab2ff",
								// value: [
								// 	"#234567",
								// 	"#909090",
								// 	"#220033",
								// 	"#E21717",
								// 	"#23C4ED",
								// 	"#3DBE29",
								// 	"#EDC126",
								// ],
							},
							links: {
								color: "#b593ff",
								// color: "#7499ac",
								distance: 100,
								enable: true,
								opacity: 1,
								width: 1,
							},
							collisions: {
								enable: true,
								mode: "bounce",
							},
							move: {
								directions: "none",
								enable: true,
								outModes: {
									default: "bounce",
								},
								random: true,
								speed: 3,
								straight: false,
							},
							number: {
								density: {
									enable: true,
									area: 400,
								},
								value: 70,
							},
							opacity: {
								value: 0.9,
							},
							// shadow: {
							// 	enable: true,
							// 	color: "#909090",
							// 	blur: 10,
							// 	offset: {
							// 		x: 1,
							// 		y: 1,
							// 	},
							// },
							shape: {
								// type: ["circle", "square", "triangle"],
								type: "circle",
							},
							size: {
								value: { min: 2, max: 3 },
							},
						},
						detectRetina: true,
					}}
				/>
			</div>
			<div className="absolute xs:bottom-0 bottom-32 w-full flex justify-center items-center ">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 27, 0],
							}}
							transition={{
								duration: 2.3,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary "
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
