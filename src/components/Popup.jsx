import React from "react";
import ReactDOM from "react-dom";

const Popup = () => {
	return ReactDOM.createPortal(
		<div className=" bg-black-200 w-[500px] h-[160px] border-[1.5px] border-emerald-600 flex flex-col justify-center items-center gap-4 mb-20 rounded-3xl">
			<div className="w-full flex justify-end mr-5 mt-[-24px]">
				<button className=" border-[1.5px] border-rose-400 px-2 py-0.5 rounded-lg">
					X
				</button>
			</div>
			<h2 className="text-white text-[17px] font-medium">
				Thank you for your message!
			</h2>
			<p className="text-white text-[17px] font-normal">
				I'll get back to you as soon as possible.
			</p>
		</div>,
		document.getElementById("popup")
	);
};

export default Popup;
