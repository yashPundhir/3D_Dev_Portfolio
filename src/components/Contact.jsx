import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
	const formRef = useRef();

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {};

	const handleSubmit = (e) => {};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-3xl "
			>
				<div className="justify-center items-center flex flex-col">
					<p className={styles.sectionSubText}>Get in touch</p>
					<h3 className={styles.sectionHeadText}>Contact</h3>
				</div>
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					{/* Label for name */}
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4 ml-6">Your Name</span>

						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's Your Name?"
							className="bg-tertiary  py-4 px-6 placeholder:text-secondary text-white rounded-xl outlined-none border-green-400 border focus:outline-none  font-medium  "
						/>
					</label>

					{/* Label for email */}
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4 ml-6">Your Email</span>

						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's Your Email?"
							className="bg-tertiary  py-4 px-6 placeholder:text-secondary text-white rounded-xl outlined-none   font-medium border-orange-300 border focus:outline-none  "
						/>
					</label>

					{/* Label for message */}
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4 ml-6">
							Your Message
						</span>

						<textarea
							rows="7"
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What do you want to say?"
							className="bg-tertiary  py-4 px-6 placeholder:text-secondary text-white rounded-xl outlined-none  font-medium border-sky-400 border focus:outline-none   "
						/>
					</label>
					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-normal shadow-xl text-lg shadow-primary rounded-xl border border-fuchsia-400"
					>
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>
			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
