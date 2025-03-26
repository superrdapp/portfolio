<template>
	<UtilPageContent
		:under-header="true"
		place-items="place-items-end"
		class="scroll-mt-[var(--header-height)] from-gray-950/75 to-gray-950/50 dark:bg-gradient-to-b"
		id="home"
	>
		<h1
			class="mb-4 font-sans text-4xl font-bold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-8xl"
			v-motion-slide-visible-once-bottom
		>
			Daffa Ulhaq
		</h1>
		<p
			class="text-primary mb-8 text-lg font-normal sm:px-16 lg:px-48 lg:text-2xl"
			v-motion-slide-visible-once-bottom
		>
			Front-end (web) developer
		</p>
		<p
			class="mb-8 text-lg font-normal text-gray-700 drop-shadow-sm dark:text-gray-300 dark:drop-shadow-none sm:px-16 lg:px-48 lg:text-xl"
			v-motion-slide-visible-once-bottom
		>
			I'm an experienced Front-end web engineer based in the Indonesia,
			specializing in web development.
		</p>
		<div class="flex items-center gap-1">
			<NuxtLink
				v-for="link in links"
				:to="link.link"
				target="_blank"
				v-motion-slide-visible-once-bottom
				:aria-label="`Visit my ${link.name} profile`"
			>
				<UButton
					color="gray"
					class="transition-self shadow-md dark:shadow-none"
					square
					:aria-label="link.name"
				>
					<Icon :name="link.icon" size="24" />
				</UButton>
			</NuxtLink>
		</div>
		<template #bottom>
			<BackgroundGradient
				class="frontpage-gradient absolute h-[calc(100vh-var(--header-height))] w-full"
				:opacity="0.2"
				:animate="true"
			/>
			<BackgroundTile />
			<div
				class="mx-auto flex max-w-screen-xl flex-col items-center py-1 text-center"
			>
				<NuxtLink
					:to="{ path: '/', hash: '#about' }"
					aria-label="Scroll to About section"
				>
					<Icon
						name="i-ion-chevron-down"
						size="32"
						class="hover:text-primary-500 dark:hover:text-primary-400 text-gray-700 dark:text-gray-100"
						aria-label="Scroll to About section"
					/>
				</NuxtLink>
			</div>
		</template>
	</UtilPageContent>
	<UtilPageContent
		class="h-auto max-h-none min-h-min scroll-mt-[var(--header-height)] from-gray-950/50 to-gray-950/60 p-5 pt-12 dark:bg-gradient-to-b"
		place-items="place-items-start"
		container-class="gap-4"
		:apply-height="false"
		id="about"
	>
		<p
			class="dark:text-primary mb-8 font-sans text-4xl font-bold leading-none tracking-wider text-gray-900"
		>
			About Me
		</p>
		<div
			class="grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:gap-12"
		>
			<div
				class="transition-self flex-1 rounded-md border border-gray-300 bg-white px-6 py-4 drop-shadow-lg hover:border-gray-200 hover:bg-white/95 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-gray-700 dark:hover:bg-gray-800/30"
			>
				<p class="text-primary mb-4 text-xl font-bold">Who am I?</p>
				<p class="text-justify text-gray-700 dark:text-gray-300/90">
					I am a Front-End Engineer specializing in modern web
					development, with a strong focus on building
					high-performance, component-based user interfaces. My core
					expertise lies in the Vue 3 and Nuxt ecosystem, enabling me
					to create responsive, interactive, and scalable
					applications. I leverage the Composition API and modular
					architecture to deliver clean and maintainable codebases.
					<br />
					<br />
					To build consistent and visually appealing UI/UX, I rely on
					Tailwind CSS as my primary styling framework. I also use
					TypeScript to enhance code quality with strong typing,
					leading to improved developer productivity and reduced bugs.
					These technologies allow me to develop front-end solutions
					that are efficient, reliable, and production-ready.
					<br />
					<br />
					I am experienced in working within Agile and Scrum
					environments, participating in daily stand-ups, sprint
					planning, and retrospectives. Collaborating closely with
					cross-functional teams—including backend developers,
					designers, and stakeholders—is a key part of my workflow to
					ensure the delivery of features that align with business
					goals and provide excellent user experiences.
				</p>
			</div>
			<div
				class="transition-self h-min flex-1 rounded-md border border-gray-300 bg-white px-6 py-4 drop-shadow-lg hover:border-gray-200 hover:bg-white/95 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-gray-700 dark:hover:bg-gray-800/30"
			>
				<p class="text-primary mb-4 text-xl font-bold">Skills</p>
				<div v-for="(skillList, categoryName) in skills">
					<p
						class="text-primary mb-2 text-lg font-semibold capitalize"
					>
						{{ categoryName }}
					</p>
					<div
						class="mb-6 flex select-none flex-row flex-wrap place-items-center justify-center gap-1 px-2"
					>
						<UtilBadge
							v-for="skill in skillList"
							:text="skill.name"
							:link="skill.link"
							:icon="skill.icon"
							:icon-class="skill.iconClass"
							:icon-bg-class="skill.divClass"
						/>
					</div>
				</div>
			</div>
		</div>
		<template #bottom>
			<BackgroundGradient
				class="aboutme-gradient absolute h-full w-full"
				opacity="opacity-10"
			/>
		</template>
	</UtilPageContent>
	<UtilPageContent
		class="h-auto max-h-none min-h-min scroll-mt-[var(--header-height)] from-gray-950/60 to-gray-950/80 p-5 pt-12 dark:bg-gradient-to-b"
		place-items="place-items-start"
		container-class="gap-4"
		:apply-height="false"
		id="experience"
	>
		<p
			class="dark:text-primary mb-8 font-sans text-4xl font-bold leading-none tracking-wider text-gray-900"
		>
			Experience
		</p>
		<div
			class="md:w-12/12 grid w-10/12 place-items-center justify-center text-left lg:w-8/12 xl:w-5/12"
		>
			<ExperienceTimeline
				class="border-gray-200 dark:border-gray-700"
				:list="experience"
			/>
		</div>
		<template #bottom>
			<BackgroundGradient
				class="experience-gradient absolute h-full w-full"
				opacity="opacity-20 dark:opacity-30"
			/>
		</template>
	</UtilPageContent>
	<!-- <UtilPageContent
		class="mb-16 h-auto max-h-none min-h-min scroll-mt-[var(--header-height)] from-gray-950/80 to-gray-900/20 p-5 pt-12 dark:bg-gradient-to-b"
		place-items="place-items-start"
		container-class="gap-4"
		:apply-height="false"
		id="projects"
	>
		<p
			class="dark:text-primary flex-l mb-8 font-sans text-4xl font-bold leading-none tracking-wider text-gray-900"
		>
			Projects
		</p>
		<div
			class="w-[65vw] place-items-center justify-center text-left"
			ref="containerElement"
		>
			<div class="mx-auto flex flex-row flex-wrap justify-center gap-2">
				<ProjectEntry v-for="project in projects" :item="project" />
			</div>
		</div>
		<template #bottom>
			<BackgroundGradient
				class="projects-gradient absolute h-full w-full"
				opacity="opacity-20"
			/>
		</template>
	</UtilPageContent> -->
	<UtilPageContent
		class="to-gray-850/50 max-h-none min-h-min scroll-mt-[var(--header-height)] border-gray-400 bg-gray-100/20 from-gray-900/20 dark:border-gray-800 dark:bg-gray-900/20 dark:bg-gradient-to-b"
		:apply-height="false"
		container-class="px-0 py-3"
		id="footer"
	>
		<div>
			<div class="flex flex-col leading-tight">
				<p>
					Built using
					<span class="text-green-600 dark:text-green-500">
						Nuxt 3
					</span>
					and
					<span class="text-blue-600 dark:text-blue-500">
						Tailwind CSS
					</span>
					Thanks to Tijn Epema
				</p>
				<p class="mb-1">
					Coded in
					<span class="text-blue-600 dark:text-blue-500">
						Visual Studio Code
					</span>
				</p>
				<div class="mb-2 flex flex-row justify-center">
					<NuxtLink
						v-for="link in footerLinks"
						:to="link.link"
						target="_blank"
						:aria-label="`Visit my ${link.name} profile`"
					>
						<UButton
							color="gray"
							variant="ghost"
							class="transition-self"
							square
							:aria-label="link.name"
						>
							<Icon :name="link.icon" size="24" />
						</UButton>
					</NuxtLink>
				</div>
			</div>
		</div>
	</UtilPageContent>
</template>

<script setup>
	definePageMeta({
		layout: "default",
	});

	const { skills, experience, projects, links, footerLinks } = useAppConfig();

	const containerElement = ref(null);
	const { width } = useElementSize(containerElement);
</script>
