<template>
	<nav
		class="transition-self sticky top-0 z-40 h-[var(--header-height)] w-full border-b border-gray-200 bg-white bg-opacity-80 px-3 py-4 backdrop-blur dark:border-gray-800 dark:bg-gray-950 dark:bg-opacity-80"
		aria-label="Main navigation"
	>
		<div
			class="mx-auto flex max-w-7xl flex-row place-items-center justify-between md:px-8"
		>
			<div class="flex items-center lg:flex-1">
				<NuxtLink
					to="/"
					class="flex h-max items-center gap-3"
					aria-label="Go to homepage"
				>
					<!-- <nuxt-icon
						name="logo"
						class="transition-self text-primary text-center text-[1.5em]"
						aria-hidden="true"
					/> -->
					<p
						class="text-2xl font-bold text-gray-700 dark:text-gray-50"
					>
						Daffa Ulhaq
					</p>
				</NuxtLink>
			</div>
			<NavBar :links="navLinks" />
			<div class="flex items-center justify-end lg:flex-1">
				<UTooltip
					text="View this project on GitHub"
					:popper="{
						offsetDistance: 8,
						arrow: true,
						placement: 'bottom',
						locked: true,
					}"
				>
					<NuxtLink
						to="https://github.com/VirtualButFake/Portfolio"
						target="_blank"
						aria-label="View portfolio source code on GitHub"
					>
						<UButton
							icon="i-grommet-icons-github"
							color="gray"
							class="transition-self p-1 dark:ring-0"
							variant="ghost"
							square
							aria-label="GitHub"
						/>
					</NuxtLink>
				</UTooltip>
				<UTooltip
					:popper="{
						offsetDistance: 8,
						arrow: true,
						placement: 'bottom',
						locked: true,
					}"
					text="Toggle site theme"
				>
					<UtilThemeToggle
						class="transition-self p-1 dark:ring-0"
						aria-label="Toggle dark/light theme"
					/>
				</UTooltip>
				<NavMenu :links="navLinks" />
			</div>
		</div>
	</nav>
	<slot />
</template>

<script setup lang="ts">
	const navLinks = ref([
		{
			name: "Home",
			href: "#home",
			active: false,
		},
		{
			name: "About",
			href: "#about",
			active: false,
		},
		{
			name: "Experience",
			href: "#experience",
			active: false,
		},
		// {
		// 	name: "Projects",
		// 	href: "#projects",
		// 	active: false,
		// },
	]);

	const { height } = useWindowSize();
	const { y } = useWindowScroll();

	watch(y, () => {
		navLinks.value.forEach((link) => {
			const element = document.getElementById(link.href.slice(1));

			if (!element) return;

			const { top, bottom } = element.getBoundingClientRect();

			if (top <= 200 && bottom >= 200) {
				link.active = true;
			} else {
				link.active = false;
			}
		});
	});

	useSeoMeta({
		title: "Daffa Ulhaq",
		ogTitle: "Daffa Ulhaq",
		description: "My portfolio website.",
		ogDescription: "My portfolio website.",
		themeColor: "#9683EC",
	});
</script>
