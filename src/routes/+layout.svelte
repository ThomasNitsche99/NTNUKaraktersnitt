<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });


	// Toast 
	import { initializeStores, Toast } from '@skeletonlabs/skeleton';

	initializeStores();
</script>

<Toast />
<slot />
