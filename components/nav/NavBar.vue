<template>
	<ul
		class="transition-children hidden space-x-8 font-sans text-xs/6 font-semibold md:flex"
	>
		<NavLink
			v-for="link in links"
			:key="link.href"
			:to="link.href"
			:force-active="link.active"
		>
			{{ link.name }}
		</NavLink>
	</ul>
</template>

<script setup lang="ts">
	interface NavLink {
		name: string;
		href: string;
		active: boolean;
	}

	defineProps<{
		links: NavLink[];
	}>();
</script>
