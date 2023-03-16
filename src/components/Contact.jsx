import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
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

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({ ...form, [name]: value });
	};

	const successBox = () => {
		Swal.fire({
			icon: "success",
			iconColor: "#10B981",
			titleText: "Thank you for your message!",
			text: "I will get back to you as soon as possible.",
			background: "#100d25",
			color: "#fff",
			width: "550px",
			confirmButtonColor: "#3B82F6",
			showCloseButton: true,
			padding: "20px",
		});
	};

	const errorBox = () => {
		Swal.fire({
			icon: "error",
			titleText: "Oops...",
			text: "Seems like something went wrong!",
			background: "#100d25",
			color: "#fff",
			width: "550px",
			confirmButtonColor: "#FB7185",
			confirmButtonText: "Close",
			showCloseButton: true,
			padding: "20px",
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.send(
				"service_pi8o545",
				"template_6pbekag",
				{
					from_name: form.name,
					to_name: "Yash",
					from_email: form.email,
					to_email: "yash.pundhir.prof@gmail.com",
					message: form.message,
				},
				"M7fE3XxQrzBMbPsB1"
			)
			.then(
				() => {
					setLoading(false);
					//alert("Thank You. I'll get back to you as soon as possible.");
					successBox();
					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.log(error);
					//alert("Something Went wrong");
					errorBox();
				}
			);
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-transparent p-8 rounded-3xl border border-red-500 "
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
							className="bg-transparent  py-4 px-6 placeholder:text-secondary text-white rounded-xl outlined-none border-green-400 border focus:outline-none  font-medium  "
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
							className="bg-transparent  py-4 px-6 placeholder:text-secondary text-white rounded-xl outlined-none   font-medium border-orange-300 border focus:outline-none  "
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
							className="bg-transparent  py-4 px-6 placeholder:text-secondary text-white rounded-xl outlined-none  font-medium border-sky-400 border focus:outline-none   "
						/>
					</label>
					<button
						type="submit"
						className="bg-transparent py-3 px-8 outline-none w-fit text-white font-normal shadow-xl text-lg shadow-primary rounded-xl border border-violet-400"
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
