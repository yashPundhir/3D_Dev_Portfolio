import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectCardTailwindCSS from "./components/ProjectCardTailwindCSS";
import ProjectCardHTMLCSS from "./components/ProjectCardHTMLCSS";
import ProjectCardJS from "./components/ProjectCardJS";
import ProjectCardReact from "./components/ProjectCardReact";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <ProjectCardHTMLCSS />,
			},
			{
				path: "/htmlcss",
				element: <ProjectCardHTMLCSS />,
			},
			{
				path: "/tailwindcss",
				element: <ProjectCardTailwindCSS />,
			},
			{
				path: "/javascript",
				element: <ProjectCardJS />,
			},
			{
				path: "/react",
				element: <ProjectCardReact />,
			},
			// {
			// 	path: "/contact",
			// 	element: (
			// 		<HeroHome
			// 			title="Contact Us"
			// 			link="https://pixlr.com/e/"
			// 			btnText="Awesome & Free Photo Editing Resource"
			// 		/>
			// 	),
			// },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={appRouter} />
	</React.StrictMode>
);
