<template>
	<ClientOnly>
		<UButton
			:icon="isDark ? 'i-ic-round-wb-sunny' : 'i-ic-round-dark-mode'"
			color="gray"
			variant="ghost"
			:aria-label="
				isDark ? 'Switch to light theme' : 'Switch to dark theme'
			"
			@click="isDark = !isDark"
			:class="class"
			square
			role="switch"
			:aria-checked="isDark"
		/>
		<template #fallback>
			<!-- this will be rendered on server side -->
			<div class="h-7 w-7 p-1" role="presentation">
				<UIcon
					class="text-gray h-5 w-5"
					name="i-ic-round-wb-sunny"
					aria-hidden="true"
				/>
			</div>
		</template>
	</ClientOnly>
</template>

<script setup lang="ts">
	const mode = useColorMode();

	const isDark = computed({
		get: () => mode.value === "dark",
		set: (value) => {
			mode.value = value ? "dark" : "light";
			mode.preference = value ? "dark" : "light"; // this has to be done in order to ensure that header links don't reset the theme
		},
	});

	defineProps({
		class: {
			type: String,
			default: () => "",
		},
	});
</script>
