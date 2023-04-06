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
} from "../assets";

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
	{
		name: "Redux Toolkit",
		icon: redux,
	},

	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Express JS",
		icon: express,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
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

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
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
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
		live_link: "https://google.com/",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
		live_link: "https://google.com/",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
		live_link: "https://google.com/",
	},
];

const reactProjects = [
	{
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
		live_link: "https://google.com/",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
		live_link: "https://google.com/",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
		live_link: "https://google.com/",
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
};
