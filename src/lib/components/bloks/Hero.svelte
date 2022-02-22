<script context="module" lang="ts">
	import { editable } from '$utils/directives';
	import { components } from '$components/bloks';
	import type { HeroBlok } from 'src/lib/storyblok/component-types';
</script>

<script lang="ts">
	export let blok: HeroBlok;
</script>

<div use:editable={blok} class="mx-auto p-8">
	<div class="rounded-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
		<div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
			<div class="lg:self-center flex flex-col gap-4">
				<h2 class="text-3xl font-extrabold sm:text-4xl">
					<span class="block">{blok.title}</span>
				</h2>
				{#if blok.description}
					<p class="text-lg leading-6 text-secondary">
						{blok.description}
					</p>
				{/if}
				{#each blok.cta as cta}
					<svelte:component this={components[cta.component]} blok={cta} />
				{/each}
			</div>
		</div>
		{#if blok.image}
			<img
				class="rounded-md object-cover"
				src={blok.image.filename}
				title={blok.image.title}
				alt={blok.image.alt}
			/>
		{/if}
	</div>
</div>
