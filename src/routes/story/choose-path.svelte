<script lang="ts">
	import type { FSQPointOfInterest } from '$lib/types';
	import StoryDestination from '$lib/components/StoryDestination.svelte';

	export let destinations: FSQPointOfInterest[] = [
		{
			fsq_id: '4d298eccc406721e6a537cb6',
			categories: [
				{
					id: 16020,
					name: 'Historic and Protected Site',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/arts_entertainment/historicsite_',
						suffix: '.png'
					}
				},
				{
					id: 16046,
					name: 'Scenic Lookout',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/parks_outdoors/sceniclookout_',
						suffix: '.png'
					}
				}
			],
			description: '',
			geocodes: {
				main: {
					latitude: 47.502064,
					longitude: 19.034922
				}
			},
			name: "Fisherman's Bastion (Halászbástya)",
			photos: [
				{
					id: '516acf44e4b06a5bc2c6eda1',
					created_at: '2013-04-14T15:46:12.000Z',
					prefix: 'https://fastly.4sqi.net/img/general/',
					suffix: '/40518565_dg5utAZMMRsgeN-oDMOMuk42qwD3wY-CXJCiEt83nu8.jpg',
					width: 720,
					height: 960,
					classifications: ['outdoor']
				},
				{
					id: '51deed73498e901e04c51d10',
					created_at: '2013-07-11T17:37:55.000Z',
					prefix: 'https://fastly.4sqi.net/img/general/',
					suffix: '/59967824_zCpvUjjAeNavB2N6AkaGzbbqBcbLNdy1m3JhxDEMIlo.jpg',
					width: 720,
					height: 960
				},
				{
					id: '4fdc8932e4b018d0789a5e81',
					created_at: '2012-06-16T13:25:06.000Z',
					prefix: 'https://fastly.4sqi.net/img/general/',
					suffix: '/OPuWdDtG1txsd0tnsllY-G0Edqc1W1dig8xgc2V0yeo.jpg',
					width: 720,
					height: 540,
					classifications: ['outdoor']
				},
				{
					id: '51e551c4498e1df3ab0624bc',
					created_at: '2013-07-16T13:59:32.000Z',
					prefix: 'https://fastly.4sqi.net/img/general/',
					suffix: '/24899791_NTxEvB65ePJgintstwRjWLpeiOFnBKCpvyqxMmEY1OQ.jpg',
					width: 960,
					height: 720
				},
				{
					id: '505deb0fe4b0236a27ae1154',
					created_at: '2012-09-22T16:45:03.000Z',
					prefix: 'https://fastly.4sqi.net/img/general/',
					suffix: '/6049135_mlSyKk02mau8hs9HcqkjMZ4A4dv5kCFteuR24GYmSWw.jpg',
					width: 612,
					height: 612,
					classifications: ['outdoor']
				}
			],
			distance: 765.3545617841304,
			snippet: {
				id: 4,
				action: 'an excellent lookout spot gives you the opportunity to take in the scenery',
				title: "Don't look down!",
				lore: "Wandering aimlessly won't take you closer to your goal. Provided your goal is not that exact thing: to wander around aimlessly."
			}
		},
		{
			fsq_id: '5059c340e4b082424ecc9822',
			categories: [
				{
					id: 16046,
					name: 'Scenic Lookout',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/parks_outdoors/sceniclookout_',
						suffix: '.png'
					}
				}
			],
			geocodes: {
				main: {
					latitude: 47.501278,
					longitude: 19.032373
				}
			},
			name: 'Várnegyed',
			photos: [
				{
					id: '624d8d6f83a708371c2140b2',
					created_at: '2022-04-06T12:54:07.000Z',
					prefix: 'https://fastly.4sqi.net/img/general/',
					suffix: '/23650192_7H_HntxL_kexagKKXf0zvMNYlm0gnLJRtRSnegyuPGE.jpg',
					width: 1440,
					height: 1791
				},
				{
					id: '61b5fb78ad5bab2454b4b10d',
					created_at: '2021-12-12T13:39:04.000Z',
					prefix: 'https://fastly.4sqi.net/img/general/',
					suffix: '/59240145_MakBZpo7wBkrCnCX8Ud14zt1sKIVsUgZMb-hBVybn88.jpg',
					width: 1080,
					height: 810
				},
				{
					id: '61a4f1593c842e2c8e09070c',
					created_at: '2021-11-29T15:27:21.000Z',
					prefix: 'https://fastly.4sqi.net/img/general/',
					suffix: '/91726803_3-NVLdIJaYM2pP4EP8UAoxJjceTUVT4InBZwCelqGDM.jpg',
					width: 1920,
					height: 1440
				},
				{
					id: '61328a1d1d51fe4849a461ed',
					created_at: '2021-09-03T20:48:29.000Z',
					prefix: 'https://fastly.4sqi.net/img/general/',
					suffix: '/79245632_WvW0NRo48M9ubG5RdC8v5BfnLELs1yYJZB5XFbBU8D4.jpg',
					width: 1920,
					height: 1440
				},
				{
					id: '611812a69397cf75661c57a8',
					created_at: '2021-08-14T18:59:50.000Z',
					prefix: 'https://fastly.4sqi.net/img/general/',
					suffix: '/11025216_YsN7_t3JUOnFmBtSRuHu2DcfTWlC20_kYk0XUyVHUnE.jpg',
					width: 1080,
					height: 1666
				}
			],
			distance: 784.285217574119,
			snippet: {
				id: 3,
				action: 'you take the opportunity to get to a vantage point',
				title: 'Scout and explore!',
				lore: 'An experienced traveler can also get lost in a new city. Finding a good spot to explore your surrounding can be crucial to your navigation.'
			}
		},
		{
			fsq_id: '4dc81ed218387d1bd57fbad3',
			categories: [
				{
					id: 16053,
					name: 'Waterfront',
					icon: {
						prefix: 'https://ss3.4sqi.net/img/categories_v2/parks_outdoors/river_',
						suffix: '.png'
					}
				}
			],
			description: '',
			geocodes: {
				main: {
					latitude: 47.501582,
					longitude: 19.045244
				}
			},
			name: 'Duna-part',
			photos: [
				{
					id: '5012f644e4b06fc7ce86ecb9',
					created_at: '2012-07-27T20:12:52.000Z',
					prefix: 'https://fastly.4sqi.net/img/general/',
					suffix: '/uAeAd8ZkuIm9qB4AisynIYfU5orANV6xYN8D-Y5Ik74.jpg',
					width: 540,
					height: 720,
					classifications: ['outdoor']
				},
				{
					id: '4fcf0e54e4b046dae1cbc0d5',
					created_at: '2012-06-06T08:01:24.000Z',
					prefix: 'https://fastly.4sqi.net/img/general/',
					suffix: '/i_d67q_U5wFEmnRDzg-no7DATWlVwagQcrU09sBohOc.jpg',
					width: 612,
					height: 612
				},
				{
					id: '5177ec1b498ec47addab7712',
					created_at: '2013-04-24T14:28:43.000Z',
					prefix: 'https://fastly.4sqi.net/img/general/',
					suffix: '/53278813_v1-A7BjF8DRDYhrd4n5YDp2iYDSi5Cz0m_C3Fa8BPag.jpg',
					width: 960,
					height: 960,
					classifications: ['outdoor']
				},
				{
					id: '510a7232e4b0c898021aa5b1',
					created_at: '2013-01-31T13:31:30.000Z',
					prefix: 'https://fastly.4sqi.net/img/general/',
					suffix: '/4181588_WwsbSGbjtox9Tk9oTmFI_o4YV6ScooFPGG7Z8RT_NSg.jpg',
					width: 612,
					height: 612
				},
				{
					id: '5061f0f7e4b03f519a5356a0',
					created_at: '2012-09-25T17:59:19.000Z',
					prefix: 'https://fastly.4sqi.net/img/general/',
					suffix: '/840188_fIupk7WPVsNAarC8u4TpOPiYw0dk_43z7Sps2BA4iq0.jpg',
					width: 720,
					height: 541,
					classifications: ['outdoor']
				}
			],
			distance: 1343.5798368515937,
			snippet: {
				id: 7,
				action: 'you feel that something is missing from your trip',
				title: 'Burglar by the river',
				lore: 'A goblin has picked your pocket. I think you should look for him by the riverside. Maybe can find him there, maybe not, either way, the view will be astonishing.'
			}
		}
	];
	console.log(destinations);
</script>

<div class="container">
	<h1>At the beginning of your journey...</h1>
	{#each destinations as dest}
		<StoryDestination id={dest.fsq_id} destination={dest} />
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}

	img {
		width: 100%;
		display: block;
	}
	h1 {
		margin: 0;
		padding: 0;
		font-size: 1.5rem;
	}
	p {
		margin: 0;
		padding: 0;
	}
</style>
