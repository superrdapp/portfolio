export default defineAppConfig({
	ui: {
		primary: "indigo",
		gray: "cool",
		button: {
			default: {
				base: "transition-colors duration-300",
			},
		},
	},
	links: [
		{
			icon: "simple-icons:github",
			link: "https://github.com/superrdapp",
		},
		{
			icon: "i-grommet-icons-linkedin-option",
			link: "https://www.linkedin.com/in/muhammmad-rifqi-daffa-ulhaq-9b9301260/",
		},
	],
	footerLinks: [
		{
			icon: "simple-icons:github",
			link: "https://github.com/superrdapp",
		},
		{
			icon: "i-grommet-icons-linkedin-option",
			link: "https://www.linkedin.com/in/muhammmad-rifqi-daffa-ulhaq-9b9301260/",
		},
		{
			icon: "simple-icons:discord",
			link: "https://discord.com/users/804233246694572032",
		},
		{
			icon: "ic:round-email",
			link: "mailto:mrdaul09@gmail.com",
		},
	],
	experience: [
		{
			title: "Frontend Engineer at",
			highlight: "Suteki Technology",
			link: "https://suteki.co.id/",
			date: "Dec 2024 - Present",
			stack: [
				"Frontend",
				"Vue",
				"Git",
				"Nuxt",
				"Tailwind",
				"TypeScript",
				"Agile",
			],
			description:
				"Contributed to the development and implementation of exciting new features and content for the campus governance system. Collaborate with cross-functional teams to design innovative feature mechanisms, optimize performance, and enhance user experience.",
		},
		{
			title: "Intern at",
			highlight: "DiCoding",
			link: "https://www.dicoding.com/",
			date: "Aug 2023 - Des 2023",
			stack: [
				"Javascript",
				"Module Bundlers",
				"Web Components",
				"Web API",
			],
			description:
				"Develop websites with simple, reusable, and optimized techniques. Finally, it can create front-end web applications with ES6 standard JavaScript code, implement Web Components, module bundlers, and display dynamic data from the Web API using asynchronous request techniques.",
		},
	],
	projects: [
		{
			title: "VFX Editor",
			description: `An all-in-one VFX editor for Roblox, built with Fusion and FusionComponents. Overhauls and reimagines native features of Roblox Studio, optimizing them for efficiency and ease of use. This plugin reached over 10,000 downloads in the first month after release, with a 93% approval rating.`,
			stack: ["Fusion", "Luau"],
			image: "vfxeditor.png",
			buttons: [
				{
					text: "GitHub",
					icon: "simple-icons:github",
					class: "transition-self",
					link: "https://github.com/virtualbutfake/vfx-editor",
				},
				{
					text: "Roblox DevForum Post",
					icon: "simple-icons:roblox",
					class: "transition-self",
					link: "https://devforum.roblox.com/t/3103467",
				},
			],
		},
		{
			title: "FusionComponents",
			description:
				"A collection of 31 components for Fusion, using Tailwind colors, the Lucide icon set and a custom theming engine. This project took around half a year to realize, and was a great learning experience.",
			stack: ["Fusion", "Luau"],
			image: "fusioncomponents.png",
			buttons: [
				{
					text: "GitHub",
					icon: "simple-icons:github",
					class: "transition-self",
					link: "https://github.com/virtualbutfake/fusion-components",
				},
				{
					text: "View documentation",
					link: "https://docs.tijne.net/fusioncomponents",
					class: "transition-self dark:bg-primary-500/30 hover:dark:bg-primary-500/40 dark:ring-primary-600 hover:dark:ring-primary-500",
				},
			],
		},
		{
			title: "simpoll",
			description:
				"A light-weight, simple bidirectional long-polling library for Roblox. Uses a TypeScript backend and connects to Roblox using a custom API, designed for stability and ease of use.",
			stack: ["TypeScript", "Luau", "Express"],
			buttons: [
				{
					text: "GitHub",
					icon: "simple-icons:github",
					class: "transition-self",
					link: "https://github.com/VirtualButFake/simpoll",
				},
			],
		},
		{
			title: "create-roblox",
			description:
				"A CLI tool designed to simplify the creation of Roblox projects. It features an interactive setup process that installs all necessary tools and establishes a basic project structure, helping new developers understand the concept and workflow of using external editors for Roblox development.",
			stack: ["TypeScript"],
			buttons: [
				{
					text: "GitHub",
					icon: "simple-icons:github",
					class: "transition-self",
					link: "https://github.com/VirtualButFake/create-roblox",
				},
			],
		},
		{
			title: "Portfolio",
			description:
				"A portfolio made over the course of a few weeks, built with Nuxt, Tailwind and TypeScript. It features full dark mode support, a responsive design, and a clean, minimalistic look.",
			stack: ["Nuxt", "Tailwind", "TypeScript"],
			image: "portfolio.png",
			buttons: [
				{
					text: "GitHub",
					icon: "simple-icons:github",
					class: "transition-self",
					link: "https://github.com/VirtualButFake/portfolio",
				},
			],
		},
		{
			title: "zap-vscode",
			description:
				"A Visual Studio Code extension that provides syntax highlighting and intellisense for the Zap IDL. Designed to mimic the Luau Language Server, it provides a seamless experience for Zap developers.",
			stack: ["TypeScript"],
			buttons: [
				{
					text: "GitHub",
					icon: "simple-icons:github",
					class: "transition-self",
					link: "https://github.com/VirtualButFake/zap-vscode",
				},
			],
		},
		{
			title: "Fusion Autocomplete",
			description:
				"Fusion Autocomplete is a Visual Studio Code extension that adds autocomplete support for Fusion, autocompleting class names, properties, functions and function parameters.",
			stack: ["TypeScript"],
			buttons: [
				{
					text: "GitHub",
					link: "https://github.com/VirtualButFake/fusion-autocomplete",
					icon: "simple-icons:github",
					class: "transition-self",
				},
				{
					text: "Visual Studio Marketplace",
					link: "https://marketplace.visualstudio.com/items?itemName=Virtual.fusionautocomplete",
					icon: "simple-icons:visualstudiocode",
					class: "transition-self bg-white dark:bg-[#046aba] dark:hover:bg-[#055ea3] dark:text-white",
				},
			],
		},
		{
			title: "CodeSpan",
			description:
				"codespan-lune allows you to create beautiful diagnostics for your Lune applications, based on the original library for Rust.",
			stack: ["Lune"],
			image: "diagnostics.png",
			buttons: [
				{
					text: "GitHub",
					link: "https://github.com/VirtualButFake/codespan-lune",
					icon: "simple-icons:github",
					class: "transition-self",
				},
				{
					text: "View documentation",
					link: "https://docs.tijne.net/codespan/",
					class: "transition-self dark:bg-primary-500/30 hover:dark:bg-primary-500/40 dark:ring-primary-600 hover:dark:ring-primary-500",
				},
			],
		},
		{
			title: "MDWave",
			description:
				"MDWave is a front-end for Moonwave, a documentation parser for Luau, built with VitePress, Vue, Tailwind and JavaScript.",
			stack: ["Vue", "Tailwind", "JavaScript"],
			image: "mdwave.png",
			buttons: [
				{
					text: "GitHub",
					link: "https://github.com/VirtualButFake/mdwave",
					icon: "simple-icons:github",
					class: "transition-self",
				},
				{
					text: "View documentation",
					link: "https://docs.tijne.net/mdwave/",
					class: "transition-self dark:bg-primary-500/30 hover:dark:bg-primary-500/40 dark:ring-primary-600 hover:dark:ring-primary-500",
				},
			],
		},
	],
	skills: {
		languages: [
			{
				name: "TypeScript",
				icon: "simple-icons:typescript",
				iconClass: "mb-0 text-[#00A2FF]",
				divClass: "bg-[#323330]",
			},
			{
				name: "JavaScript",
				icon: "simple-icons:javascript",
				iconClass: "mb-0 text-[#fae034] dark:text-[#F0DB4F]",
				divClass: "bg-[#323330]",
			},
		],
		frameworks: [
			{
				name: "Nuxt",
				icon: "simple-icons:nuxtdotjs",
				iconClass: "mb-0 text-emerald-500 dark:text-[#00C58E]",
			},
			{
				name: "Vue",
				icon: "simple-icons:vuedotjs",
				iconClass: "mb-0 text-green-600 dark:text-[#41B883]",
			},
			{
				name: "Tailwind CSS",
				icon: "simple-icons:tailwindcss",
				iconClass: "mb-0 text-[#38bdf8] dark:text-[#38B2AC]",
			},
		],
		tooling: [
			{
				name: "Git",
				icon: "simple-icons:git",
				iconClass: "mb-0 text-[#F94E28] dark:text-[#F05032]",
			},
			{
				name: "Figma",
				icon: "devicon:figma",
				iconClass: "mb-0",
			},
			{
				name: "NodeJS",
				icon: "simple-icons:nodedotjs",
				iconClass: "mb-0 text-[#339933] dark:text-[#339933]",
			},
		],
	},
});
