<script>
	import AwardOutline from '~icons/flowbite/award-outline'
	import ChartOutline from '~icons/flowbite/chart-line-up-outline'
	import PenOutline from '~icons/flowbite/pen-outline'
	import ArrowOutline from '~icons/flowbite/chevron-double-up-outline'
	export let language;
	export let grade_average_raw;
	export let grade_average_ceil;
	export let grade_average_ceil_letter;
	export let study_points;
</script>

{#if language === 'en'}

	<dl class="list-dl">
		<div>
			<span class="badge bg-primary-500 text-3xl">
				<ChartOutline />
			</span>
			<span class="flex-auto">
				<dt class="text-2xl">{grade_average_raw}</dt>
				<dd class="text-gray-400 text-lg">Grade average</dd>
			</span>
		</div>
		<div>
			<span class="badge bg-primary-500 text-3xl">
				<ArrowOutline />
			</span>
			<span class="flex-auto">
				<dt class="text-2xl">{grade_average_ceil}</dt>
				<dd class="text-gray-400 text-lg">Grade average (ceil)</dd>
			</span>
		</div>
		<div>
			<span class="badge bg-primary-500 text-3xl">
				<PenOutline />
			</span>
			<span class="flex-auto">
				<dt class="text-2xl">{grade_average_ceil_letter}</dt>
				<dd class="text-gray-400 text-lg">Grade average (letter)</dd>
			</span>
		</div>
		<div>
			<span class="badge bg-primary-500 text-3xl">
				<AwardOutline />
			</span>
			<span class="flex-auto">
				<dt class="text-2xl">{study_points}</dt>
				<dd class="text-gray-400 text-lg">Study points</dd>
			</span>
		</div>
	</dl>
{:else}
	<dl class="list-dl">
		<div>
			<span class="badge bg-primary-500 text-3xl">
				<ChartOutline />
			</span>
			<span class="flex-auto">
				<dt class="text-2xl">{grade_average_raw}</dt>
				<dd class="text-gray-400 text-lg">karaktersnitt</dd>
			</span>
		</div>
		<div>
			<span class="badge bg-primary-500 text-3xl">
				<ArrowOutline />
			</span>
			<span class="flex-auto">
				<dt class="text-2xl">{grade_average_ceil}</dt>
				<dd class="text-gray-400 text-lg">Karaktersnitt (opphøyd)</dd>
			</span>
		</div>
		<div>
			<span class="badge bg-primary-500 text-3xl">
				<PenOutline />
			</span>
			<span class="flex-auto">
				<dt class="text-2xl">{grade_average_ceil_letter}</dt>
				<dd class="text-gray-400 text-lg">Karaktersnitt (bokstav)</dd>
			</span>
		</div>
		<div>
			<span class="badge bg-primary-500 text-3xl">
				<AwardOutline />
			</span>
			<span class="flex-auto">
				<dt class="text-2xl">{study_points}</dt>
				<dd class="text-gray-400 text-lg">Studie poeng</dd>
			</span>
		</div>
	</dl>
{/if}

