import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import livelink from "../assets/livelink.svg";

import React from "react";

const FeedbackCard = ({ index, testimonial }) => {
	return (
		<motion.div
			className="bg-black-200 p-6 flex justify-center  rounded-3xl xs:w-[350px] w-full border border-lime-400"
			variants={fadeIn("left", "spring", index * 0.5, 0.75)}
		>
			{/* <div className=" mt-1">
				<p className=" text-white font-black text-[35px]">❝</p>
				<p className="text-white tracking-wider text-[18px] mb-3.5">
					{testimonial}
				</p>
				<p className=" text-white font-black text-[35px] ">❞</p>

				<div className="mt-7 flex justify-between items-center gap-1">
					<div className="flex-1 flex flex-col">
						<p className="text-white font-normal text-[16px]">
							<span className="blue-text-gradient">@</span>
							{name}
						</p>
						<p className="mt-1  text-secondary text-[12px]">
							{designation} of {company}
						</p>
					</div>
					<img
						className="w-10 h-10 rounded-full object-cover"
						src={image}
						alt={`feedback-by-${name}`}
					/>
				</div>
			</div> */}
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="   rounded-2xl sm:w-[300px] w-full"
			>
				<div className=" relative w-full h-[230px]">
					<img
						src={testimonial.image}
						alt="blogCoverImage"
						className="w-full h-full object-cover rounded-2xl"
					/>
					<div className=" absolute inset-0 flex gap-2 justify-end m-3 card-img_hover">
						<div
							className="cursor-pointer black-gradient  w-10  h-10  rounded-full flex justify-center items-center"
							onClick={() => window.open(testimonial.live_link, "_blank")}
						>
							<img
								src={livelink}
								alt="github"
								className=" w-7 h-7 object-contain"
							/>
						</div>
					</div>
				</div>
				<div className="mb-2 mt-8 ml-1">
					<h3 className="tex-white text-center font-bold text-[24px]">
						{testimonial.name}
					</h3>
				</div>
			</div>
		</motion.div>
	);
};

const Feedbacks = () => {
	return (
		<div className="mt-12 bg-black-100 rounded-[25px] border border-amber-300">
			<div
				className={`${styles.padding} bg-tertiary rounded-t-[25px] min-h-[300px]`}
			>
				<motion.div
					variants={textVariant()}
					className="flex flex-col justify-center items-center "
				>
					{/* <p className={styles.sectionSubText}>What Others say</p> */}
					{/* <h2 className={styles.sectionHeadText}>Testimonials</h2> */}
					<h2 className={styles.sectionHeadText}>Technical Blogs</h2>
				</motion.div>
			</div>
			<div
				className={`${styles.paddingX} -mt-20 pb-20 flex flex-wrap gap-7 justify-center items-center`}
			>
				{/* {testimonials.map((testimonial, index) => (
					<FeedbackCard key={testimonial.name} index={index} {...testimonial}  */}
				{testimonials.map((testimonial, index) => (
					<FeedbackCard key={index} index={index} testimonial={testimonial} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Feedbacks, "blogs");
