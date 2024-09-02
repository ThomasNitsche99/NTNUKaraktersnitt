<script>
	// export let data;
	export let form;
	
</script>
<h1>HALLOOOO</h1>
<div class="container h-full mx-auto flex justify-center items-center">
	<form method="post" enctype="multipart/form-data">
		<label class="label">
			<span>Title</span>
			<input
				class="input"
				title="Input (text)"
				type="text"
				placeholder="input text"
				name="title"
			/>
		</label>
		<label class="label">
			<span>file</span>
			<input class="input" type="file" name="file" />
			{#if form?.missing}
				<p class="error">The email field is required</p>
			{/if}
		</label>
		<button type="submit" class="btn variant-filled">Submit</button>
		{#if form?.error}
			<p class="text-error-500">{form?.error}</p>
		{/if}
		{#if form?.success}
			{#if form.success.result.language === "en"}
				<h1> Success! Here's your result </h1>
				<h1> Grade average: {form.success.result.grade_average}</h1>
				<h1> Grade average ceil: {form.success.result.grade_average_ceil}</h1>
				<h1> Grade average letter: {form.success.result.grade_average_ceil_letter}</h1>
				<h1> Study points: {form.success.result.study_points}</h1>

			{:else}
				<h1> Sukse! Her er resultatene dine </h1>
				<h1> karaktersnitt: {form.success.result.grade_average_raw}</h1>
				<h1> Karaktersnitt opphøyd: {form.success.result.grade_average_ceil}</h1>
				<h1> Karaktersnitt bokstav: {form.success.result.grade_average_ceil_letter}</h1>
				<h1> Studie poeng: {form.success.result.study_points}</h1>

			{/if}
		{/if}
	</form>
	
</div>
