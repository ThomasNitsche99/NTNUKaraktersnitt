<script lang="ts">
	import ResultContent from '$lib/components/ResultContent.svelte';
	import { FileDropzone } from '@skeletonlabs/skeleton';
	import Pdficon from '~icons/flowbite/file-pdf-outline';
	import Arrow from '~icons/flowbite/arrow-up-from-bracket-outline';
	import Refresh from '~icons/flowbite/refresh-outline';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { invalidateAll } from '$app/navigation';

	const toastStore = getToastStore();

	export let form;

	const errorToast: ToastSettings = {
		message: form?.error,
		timeout: 5000,
		background: 'variant-filled-error'
	};

	$: if (form?.error) {
		toastStore.trigger(errorToast);
	}

	//File list
	let files: FileList;
	$: file = files?.item(0);
</script>

<div class="container h-full mx-auto flex flex-col justify-center items-center">
	<div>
		<h1 class="text-3xl p-1 mb-10 md:text-5xl lg:text-6xl">NTNU Gradeaverage Calculator</h1>
	</div>

	<div class="w-3/4 mx-auto justify-center items-center md:w-1/2 lg:w-1/3">
		{#if form?.gradeaverage}
			<a href="/" on:click={()=> invalidateAll()}>
				<Refresh
					class="text-8xl transition-transform duration-300 ease-in-out hover:rotate-45 mx-auto cursor-pointer"
				/>
			</a>
		{:else}
			<form
				method="post"
				enctype="multipart/form-data"
				class="flex flex-col justify-between"
			>
				<FileDropzone name="files" bind:files required on:click={() => toastStore.clear()}>
					<!-- TODO: Legge inn bilde -->
					<svelte:fragment slot="lead">
						<Pdficon class="text-5xl mx-auto" />
					</svelte:fragment>

					<h1 slot="message">
						{#if file}
							{file.name}
						{:else}
							<span>
								<strong>Upload a file</strong> or drag and drop
							</span>
						{/if}
					</h1>

					<svelte:fragment slot="meta">Only pdf allowed</svelte:fragment>
				</FileDropzone>

				<button type="submit" class="btn variant-filled w-2/5 btn-md h-12 mx-auto mt-6">
					<span>Submit</span>
					<span>
						<Arrow />
					</span>
				</button>
			</form>
		{/if}
	</div>

	{#if form?.gradeaverage}
		<div class="mt-20">
			<ResultContent {...form.gradeaverage} />
		</div>
	{/if}
	<!-- <div class="placeholder" /> -->
</div>
