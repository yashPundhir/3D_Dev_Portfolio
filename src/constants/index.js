import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	zustand,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	cognizant,
	carrent,
	shadeUp,
	binary,
	music,
	video,
	stop,
	theme,
	joke,
	quote,
	clip,
	fit,
	todo,
	expense,
	githubb,
	ecomm,
	jobit,
	tripguide,
	shopify,
	paytm,
	rode,
	street,
	food,
	law,
	digital,
	crypto,
	plant,
	product,
	webdesign,
	developer,
	interior,
	hosting,
	business,
	saas,
	dance,
	productdesign,
	threejs,
	express,
	expressimg,
	arrayimg,
	restimg,
} from "../assets";

// import expressimg from "../assets/blogs/express.avif";
// import arrayimg from "../assets/blogs/array.avif";
// import restimg from "../assets/blogs/rest-and-spread.avif";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "experience",
		title: "Experience",
	},
	{
		id: "tech",
		title: "Tech Stack",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "UI Developer",
		icon: web,
	},
	{
		title: "Frontend Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	// {
	// 	name: "TypeScript",
	// 	icon: typescript,
	// },
	{
		name: "React JS",
		icon: reactjs,
	},
	// {
	// 	name: "Redux Toolkit",
	// 	icon: redux,
	// },
	{
		name: "Zustand",
		icon: zustand,
	},

	// {
	// 	name: "MongoDB",
	// 	icon: mongodb,
	// },
	// {
	// 	name: "Express JS",
	// 	icon: express,
	// },
	// {
	// 	name: "Node JS",
	// 	icon: nodejs,
	// },
	// {
	// 	name: "Three JS",
	// 	icon: threejs,
	// },

	{
		name: "git",
		icon: git,
	},
	// {
	// 	name: "figma",
	// 	icon: figma,
	// },
	// {
	// 	name: "docker",
	// 	icon: docker,
	// },
];

const experiences = [
	{
		title: "Jr. Software Developer",
		company_name: "Cognizant",
		icon: cognizant,
		iconBg: "#080e28",
		date: "August 2021 - November 2022",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	// {
	// 	title: "React Native Developer",
	// 	company_name: "Tesla",
	// 	icon: tesla,
	// 	iconBg: "#E6DEDD",
	// 	date: "Jan 2021 - Feb 2022",
	// 	points: [
	// 		"Developing and maintaining web applications using React.js and other related technologies.",
	// 		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 		"Implementing responsive design and ensuring cross-browser compatibility.",
	// 		"Participating in code reviews and providing constructive feedback to other developers.",
	// 	],
	// },
	// {
	// 	title: "Web Developer",
	// 	company_name: "Shopify",
	// 	icon: shopify,
	// 	iconBg: "#383E56",
	// 	date: "Jan 2022 - Jan 2023",
	// 	points: [
	// 		"Developing and maintaining web applications using React.js and other related technologies.",
	// 		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 		"Implementing responsive design and ensuring cross-browser compatibility.",
	// 		"Participating in code reviews and providing constructive feedback to other developers.",
	// 	],
	// },
	// {
	// 	title: "Full stack Developer",
	// 	company_name: "Meta",
	// 	icon: meta,
	// 	iconBg: "#E6DEDD",
	// 	date: "Jan 2023 - Present",
	// 	points: [
	// 		"Developing and maintaining web applications using React.js and other related technologies.",
	// 		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 		"Implementing responsive design and ensuring cross-browser compatibility.",
	// 		"Participating in code reviews and providing constructive feedback to other developers.",
	// 	],
	// },
];

// const testimonials = [
// 	{
// 		testimonial:
// 			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
// 		name: "Sara Lee",
// 		designation: "CFO",
// 		company: "Acme Co",
// 		image: "https://randomuser.me/api/portraits/women/4.jpg",
// 	},
// 	{
// 		testimonial:
// 			"I've never met a web developer who truly cares about their clients' success like Rick does.",
// 		name: "Chris Brown",
// 		designation: "COO",
// 		company: "DEF Corp",
// 		image: "https://randomuser.me/api/portraits/men/5.jpg",
// 	},
// 	{
// 		testimonial:
// 			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
// 		name: "Lisa Wang",
// 		designation: "CTO",
// 		company: "456 Enterprises",
// 		image: "https://randomuser.me/api/portraits/women/6.jpg",
// 	},
// ];

const testimonials = [
	{
		name: "JavaScript Array & It's Methods",
		image: arrayimg,
		live_link:
			"https://yashpundhir.hashnode.dev/javascript-array-and-its-methods",
	},
	{
		name: "REST & SPREAD Operators in JavaScript",
		image: restimg,
		live_link:
			"https://yashpundhir.hashnode.dev/rest-spread-operators-in-javascript",
	},
	{
		name: "Getting Started with ExpressJS",
		image: expressimg,
		live_link:
			"https://yashpundhir.hashnode.dev/getting-started-with-expressjs",
	},
];

// const projects = [
// 	{
// 		name: "Car Rent",
// 		description:
// 			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
// 		tags: [
// 			{
// 				name: "react",
// 				color: "blue-text-gradient",
// 			},
// 			{
// 				name: "mongodb",
// 				color: "green-text-gradient",
// 			},
// 			{
// 				name: "tailwind",
// 				color: "pink-text-gradient",
// 			},
// 		],
// 		image: carrent,
// 		source_code_link: "https://github.com/",
// 		live_link: "https://google.com/",
// 	},
// 	{
// 		name: "Job IT",
// 		description:
// 			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
// 		tags: [
// 			{
// 				name: "react",
// 				color: "blue-text-gradient",
// 			},
// 			{
// 				name: "restapi",
// 				color: "green-text-gradient",
// 			},
// 			{
// 				name: "scss",
// 				color: "pink-text-gradient",
// 			},
// 		],
// 		image: jobit,
// 		source_code_link: "https://github.com/",
// 		live_link: "https://google.com/",
// 	},
// 	{
// 		name: "Trip Guide",
// 		description:
// 			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
// 		tags: [
// 			{
// 				name: "nextjs",
// 				color: "blue-text-gradient",
// 			},
// 			{
// 				name: "supabase",
// 				color: "green-text-gradient",
// 			},
// 			{
// 				name: "css",
// 				color: "pink-text-gradient",
// 			},
// 		],
// 		image: tripguide,
// 		source_code_link: "https://github.com/",
// 		live_link: "https://google.com/",
// 	},
// ];

const htmlCssProjects = [
	// {
	// 	name: "Street Style Landing Page",
	// 	description:
	// 		"A Single Webpage which is made exactly same as the template image provided by the UI Designer using core HTML & CSS without any functionalities involved in it.",
	// 	tags: [
	// 		{
	// 			name: "html",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "css",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: street,
	// 	source_code_link:
	// 		"https://github.com/yashPundhir/Street_Style_Landing_Page",
	// 	live_link: "https://street-style-landing-page-sj.netlify.app/",
	// },
	// {
	// 	name: "Food Restaurant HomePage",
	// 	description:
	// 		"A Single Webpage which is made exactly same as the template image provided by the UI Designer using core HTML & CSS without any functionalities involved in it.",
	// 	tags: [
	// 		{
	// 			name: "html",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "css",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: food,
	// 	source_code_link: "https://github.com/yashPundhir/Food_Restaurant_HomePage",
	// 	live_link: "https://food-restaurant-homepage-sj.netlify.app/",
	// },
	// {
	// 	name: "Law HomePage",
	// 	description:
	// 		"A Single Webpage which is made exactly same as the template image provided by the UI Designer using core HTML & CSS without any functionalities involved in it.",
	// 	tags: [
	// 		{
	// 			name: "html",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "css",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: law,
	// 	source_code_link: "https://github.com/yashPundhir/Law_HomePage",
	// 	live_link: "https://law-homepage-sj.netlify.app/",
	// },
	// {
	// 	name: "Digital Marketing HomePage",
	// 	description:
	// 		"A Single Webpage which is made exactly same as the template image provided by the UI Designer using core HTML & CSS without any functionalities involved in it.",
	// 	tags: [
	// 		{
	// 			name: "html",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "css",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: digital,
	// 	source_code_link:
	// 		"https://github.com/yashPundhir/Digital_Marketing_HomePage",
	// 	live_link: "https://digital-marketing-homepage-sj.netlify.app/",
	// },
	// {
	// 	name: "Crypto Landing Page",
	// 	description:
	// 		"A Single Webpage which is made exactly same as the template image provided by the UI Designer using core HTML & CSS without any functionalities involved in it.",
	// 	tags: [
	// 		{
	// 			name: "html",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "css",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: crypto,
	// 	source_code_link: "https://github.com/yashPundhir/Crypto_Landing_Page",
	// 	live_link: "https://crypto-landing-page-sj.netlify.app/",
	// },
	// {
	// 	name: "Plant HomePage",
	// 	description:
	// 		"A Single Webpage which is made exactly same as the template image provided by the UI Designer using core HTML & CSS without any functionalities involved in it.",
	// 	tags: [
	// 		{
	// 			name: "html",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "css",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: plant,
	// 	source_code_link: "https://github.com/yashPundhir/Plant_HomePage",
	// 	live_link: "https://plant-homepage-sj.netlify.app/",
	// },
	{
		name: "Product HomePage",
		description:
			"A Single Webpage which is made exactly same as the template image provided by the UI Designer using core HTML & CSS without any functionalities involved in it.",
		tags: [
			{
				name: "html",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: product,
		source_code_link: "https://github.com/yashPundhir/Product_HomePage",
		live_link: "https://product-homepage-sj.netlify.app/",
	},
	{
		name: "Web Design Landing Page",
		description:
			"A Single Webpage which is made exactly same as the template image provided by the UI Designer using core HTML & CSS without any functionalities involved in it.",
		tags: [
			{
				name: "html",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: webdesign,
		source_code_link: "https://github.com/yashPundhir/Web_Design_Landing_Page",
		live_link: "https://web-design-landing-page-sj.netlify.app/",
	},
	{
		name: "Developer Landing Page",
		description:
			"A Single Webpage which is made exactly same as the template image provided by the UI Designer using core HTML & CSS without any functionalities involved in it.",
		tags: [
			{
				name: "html",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: developer,
		source_code_link: "https://github.com/yashPundhir/Developer_Landing_Page",
		live_link: "https://developer-landing-page-sj.netlify.app/",
	},
	{
		name: "Interior Design Landing Page",
		description:
			"A Single Webpage which is made exactly same as the template image provided by the UI Designer using core HTML & CSS without any functionalities involved in it.",
		tags: [
			{
				name: "html",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: interior,
		source_code_link:
			"https://github.com/yashPundhir/Interior_Design_Landing_Page",
		live_link: "https://interior-design-landing-page-sj.netlify.app/",
	},
	{
		name: "Hosting Landing Page",
		description:
			"A Single Webpage which is made exactly same as the template image provided by the UI Designer using core HTML & CSS without any functionalities involved in it.",
		tags: [
			{
				name: "html",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: hosting,
		source_code_link: "https://github.com/yashPundhir/Hosting_Landing_Page",
		live_link: "https://hosting-landing-page-sj.netlify.app/",
	},
	{
		name: "Business Landing Page",
		description:
			"A Single Webpage which is made exactly same as the template image provided by the UI Designer using core HTML & CSS without any functionalities involved in it.",
		tags: [
			{
				name: "html",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: business,
		source_code_link: "https://github.com/yashPundhir/Business_Landing_Page",
		live_link: "https://business-landing-page-sj.netlify.app/",
	},
	{
		name: "SAAS Landing Page",
		description:
			"A Single Webpage which is made exactly same as the template image provided by the UI Designer using core HTML & CSS without any functionalities involved in it.",
		tags: [
			{
				name: "html",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: saas,
		source_code_link: "https://github.com/yashPundhir/SAAS_Landing_Page",
		live_link: "https://saas-landing-page-sj.netlify.app/",
	},
	{
		name: "Dance HomePage",
		description:
			"A Single Webpage which is made exactly same as the template image provided by the UI Designer using core HTML & CSS without any functionalities involved in it.",
		tags: [
			{
				name: "html",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: dance,
		source_code_link: "https://github.com/yashPundhir/Dance_HomePage",
		live_link: "https://dance-homepage-sj.netlify.app/",
	},
	{
		name: "Product Design Landing Page",
		description:
			"A Single Webpage which is made exactly same as the template image provided by the UI Designer using core HTML & CSS without any functionalities involved in it.",
		tags: [
			{
				name: "html",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: productdesign,
		source_code_link:
			"https://github.com/yashPundhir/Product_Design_Landing_Page",
		live_link: "https://product-design-landing-page-sj.netlify.app/",
	},
];

const tailwindProjects = [
	{
		name: "Paytm HomePage UI Clone",
		description:
			"A Single Webpage which is the exact replication of the official paytm website's Homepage without any functionalities involved in it.",
		tags: [
			{
				name: "html",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "green-text-gradient",
			},
			{
				name: "tailwind-css",
				color: "pink-text-gradient",
			},
		],
		image: paytm,
		source_code_link: "https://github.com/yashPundhir/Paytm_HomePage_UI_Clone",
		live_link: "https://paytm-homepage-ui-clone-sj.netlify.app/",
	},
	{
		name: "Shopify HomePage UI Clone",
		description:
			"A Single Webpage which is the exact replication of the official shopify website's Homepage without any functionalities involved in it.",
		tags: [
			{
				name: "html",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "green-text-gradient",
			},
			{
				name: "tailwind-css",
				color: "pink-text-gradient",
			},
		],
		image: shopify,
		source_code_link:
			"https://github.com/yashPundhir/Shopify_HomePage_UI_Clone",
		live_link: "https://shopify-homepage-ui-clone-sj.netlify.app/",
	},
	{
		name: "Rode HomePage UI Clone",
		description:
			"A Single Webpage which is the exact replication of the official rode website's Homepage without any functionalities involved in it.",
		tags: [
			{
				name: "html",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "green-text-gradient",
			},
			{
				name: "tailwind-css",
				color: "pink-text-gradient",
			},
		],
		image: rode,
		source_code_link: "https://github.com/yashPundhir/Rode_HomePage_UI_Clone",
		live_link: "https://rode-homepage-ui-clone-sj.netlify.app/",
	},
];

const jsProjects = [
	{
		name: "Music Player",
		description:
			"A music player application with 2 static songs and has features like play/pause, next/prev, mute/unmute alongwith a circular progress bar.",
		tags: [
			{
				name: "html",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "green-text-gradient",
			},
			{
				name: "javascript",
				color: "pink-text-gradient",
			},
		],
		image: music,
		source_code_link: "https://github.com/yashPundhir/Music_Player",
		live_link: "https://music-player-sj.netlify.app/",
	},
	{
		name: "Video Player",
		description:
			"A Video Player application with 3 static videos and has features like play/pause, next/prev, mute/unmute alongwith a horizontal navigation bar.",
		tags: [
			{
				name: "html",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "green-text-gradient",
			},
			{
				name: "javascript",
				color: "pink-text-gradient",
			},
		],
		image: video,
		source_code_link: "https://github.com/yashPundhir/Video_Player",
		live_link: "https://video-player-sj.netlify.app/",
	},
	{
		name: "Shade Up",
		description:
			"An interactive webpage that involves the conversion of colors from hexCode to RGB and vice-versa alongwith Random Color Picker.",
		tags: [
			{
				name: "html",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "green-text-gradient",
			},
			{
				name: "javascript",
				color: "pink-text-gradient",
			},
		],
		image: shadeUp,
		source_code_link: "https://github.com/yashPundhir/Shade_Up",
		live_link: "https://shade-up-sj.netlify.app/",
	},
	{
		name: "Jokes Generator",
		description:
			"A simple website that fetches Jokes data from API and shows it on the webpage.",
		tags: [
			{
				name: "html",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "green-text-gradient",
			},
			{
				name: "javascript",
				color: "pink-text-gradient",
			},
		],
		image: joke,
		source_code_link: "https://github.com/yashPundhir/Jokes_Generator-API",
		live_link: "https://jokes-generator-api-sj.netlify.app/",
	},
	{
		name: "Stopwatch App",
		description:
			"A simple Stopwatch App to track time and has features like play/pause and reset.",
		tags: [
			{
				name: "html",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "green-text-gradient",
			},
			{
				name: "javascript",
				color: "pink-text-gradient",
			},
		],
		image: stop,
		source_code_link: "https://github.com/yashPundhir/Stopwatch_App",
		live_link: "https://stopwatch-app-sj.netlify.app/",
	},
	{
		name: "Theme Changer",
		description:
			"A simple webpage that involves the conversion of webpage from light mode to dark mode and vice versa",
		tags: [
			{
				name: "html",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "green-text-gradient",
			},
			{
				name: "javascript",
				color: "pink-text-gradient",
			},
		],
		image: theme,
		source_code_link: "https://github.com/yashPundhir/Theme_Changer",
		live_link: "https://theme-changer-sj.netlify.app/",
	},
	{
		name: "Binary to Decimal Converter",
		description:
			"A simple webpage that involves the conversion of Binary number to Decimal number.",
		tags: [
			{
				name: "html",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "green-text-gradient",
			},
			{
				name: "javascript",
				color: "pink-text-gradient",
			},
		],
		image: binary,
		source_code_link:
			"https://github.com/yashPundhir/Binary_To_Decimal_Converter",
		live_link: "https://binary-to-decimal-convertor-sj.netlify.app/",
	},
	{
		name: "Random Quotes Generator",
		description:
			"A simple website that fetches Random Quotes data from API and shows it on the webpage.",
		tags: [
			{
				name: "html",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "green-text-gradient",
			},
			{
				name: "javascript",
				color: "pink-text-gradient",
			},
		],
		image: quote,
		source_code_link: "https://github.com/yashPundhir/Random_Quotes_Generator",
		live_link: "https://random-quotes-generator-sj.netlify.app/",
	},
];

const reactProjects = [
	{
		name: "Clips-Cave",
		description:
			"A YouTube like video streaming application where the user can play the video, search for videos, filter out categories, etc.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "rapidAPI",
				color: "green-text-gradient",
			},
			{
				name: "tailwind-css",
				color: "pink-text-gradient",
			},
		],
		image: clip,
		source_code_link: "https://github.com/yashPundhir/Clips-Cave",
		live_link: "https://clips-cave-sj.netlify.app/",
	},
	{
		name: "Fit-Blitz",
		description:
			"A Fitness & Gym Exercises application where the user can search for the exercise description related to a target muscle, body part, equipments, etc.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "rapidAPI",
				color: "green-text-gradient",
			},
			{
				name: "tailwind-css",
				color: "pink-text-gradient",
			},
		],
		image: fit,
		source_code_link: "https://github.com/yashPundhir/FitBlitz",
		live_link: "https://fit-blitz-sj.netlify.app/",
	},
	{
		name: "TODO App",
		description:
			"A simple TODO App where the user can create a TODO, update it's status and delete it as well.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind-css",
				color: "pink-text-gradient",
			},
		],
		image: todo,
		source_code_link: "https://github.com/yashPundhir/Todo_App_React",
		live_link: "https://todo-app-react-sj.netlify.app/",
	},
	{
		name: "Expense Tracker App",
		description:
			"A simple Expense Tracker App where the user can create an Expense log, update it's contents, delete it as well as can check the total expenses.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "zustand",
				color: "green-text-gradient",
			},
			{
				name: "tailwind-css",
				color: "pink-text-gradient",
			},
		],
		image: expense,
		source_code_link:
			"https://github.com/yashPundhir/Expense_Tracker_App_With_Zustand",
		live_link: "https://expense-tracker-app-sj.netlify.app/",
	},
	{
		name: "GitHUb User Finder App",
		description:
			"A simple App where the user can fetch the details about anyone public Github details by providing the corresponding username.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind-css",
				color: "pink-text-gradient",
			},
		],
		image: githubb,
		source_code_link: "https://github.com/yashPundhir/GitHub_User_Finder",
		live_link: "https://github-user-finder-sj.netlify.app/",
	},
	{
		name: "E-Commerce Landing Page",
		description:
			"A simple webpage that fetches various e-comm products data from an API and displays it on the webpage.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind-css",
				color: "pink-text-gradient",
			},
		],
		image: ecomm,
		source_code_link: "https://github.com/yashPundhir/E-Comm_Landing_Page",
		live_link: "https://e-comm-landing-page-sj.netlify.app/",
	},
];

export {
	services,
	technologies,
	experiences,
	testimonials,
	// projects,
	tailwindProjects,
	htmlCssProjects,
	jsProjects,
	reactProjects,
};
