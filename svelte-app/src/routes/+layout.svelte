<script>
	import TransitionWrapper from './../lib/TransitionWrapper.svelte';
	import Footer from './../lib/footer.svelte';
	import Header from './../lib/header.svelte';
	import '../app.css';
	import { fade, slide, scale } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import { isTransitioning } from '$lib/transitionStore.js';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let opacity = 0;
	onMount(() => {
		opacity = 1; // Fade in the content
	});

	onMount(() => {
		document.title = '>sudo encrypt_';
	});

	onMount(() => {
		opacity = 1; // This triggers the fade-in effect after mounting
	});
	// When the component starts to fade out
	function startTransition() {
		isTransitioning.set(true);
	}

	// When the component has finished fading out
	function endTransition() {
		isTransitioning.set(false);
	}
</script>

<div class="no-scrollbar overflow-y-autow-4 scrollbar-hide">
	<!-- in:fade={{ duration: 400 }} out:fade={{ duration: 400 }} -->
	<main style="--opacity: {opacity}">
		<div
			in:fade={{ duration: 400 }}
			out:fade={{ duration: 400 }}
			style="--opacity: {opacity}"
		></div>
		<Header />
		<slot />
	</main>
</div>

<!-- <TransitionWrapper>
	<slot />
</TransitionWrapper> -->

<style>
	/* div {
		transition: opacity 1s ease;
		opacity: var(--opacity);
	} */
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* body {
		animation: fadeIn 0.5s ease-out forwards;
	} */
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}
</style>
