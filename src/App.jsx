import { BrowserRouter } from "react-router-dom";
import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from "./components";
import { Outlet } from "react-router-dom";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const App = () => {
	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);
	return (
		//<BrowserRouter>
		<div className="relative z-0 bg-primary">
			<Particles
				id="tsparticles"
				className="absolute inset-0 z-[-10]"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					background: {
						color: {
							//value: "#ffffff",
							value: "transparent",
						},
						image: "url('./herobg.png')",
						position: "center",
						repeat: "no-repeat",
						size: "cover",
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
								quantity: 2,
							},
							grab: {
								distance: 140,
								links: {
									opacity: 1,
								},
							},
							connect: {
								distance: 250,
								radius: 60,
								links: {
									opacity: 1,
								},
							},
						},
					},
					particles: {
						color: {
							value: "rgb(199,210,254)",
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
							// color: "#c5b2ff",
							color: "rgb(167,139,250)",
							distance: 120,
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
							speed: 5,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 400,
							},
							value: 50,
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
			<div className=" bg-cover bg-no-repeat bg-center">
				<Navbar />
				<Hero />
			</div>
			<div className="bg-rest-background bg-cover bg-no-repeat bg-center">
				<About />
				<Experience />
				<Tech />
				<Works />
				<Outlet />
				<Feedbacks />
				<div className="relative z-10">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
			{/* <About />
			<Experience />
			<Tech />
			<Works />
			<Outlet />
			<Feedbacks />
			<div className="relative z-0">
				<Contact />
				<StarsCanvas />
			</div> */}
		</div>
		//</BrowserRouter>
	);
};

export default App;
