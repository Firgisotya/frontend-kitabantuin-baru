<template>
	<v-app id="inspire">
		<v-navigation-drawer dark color="#1f1d2c" v-model="drawer" app
			floating="$vuetify.breakpoint.mdAndUp ? true : false" mobile-breakpoint="960px">

			<h2 class="my-4 text-center white--text francois-one">kITabantuin</h2>

			<!-- <v-list flat dense class="ml-5">
				<v-subheader>MENU</v-subheader>
				<v-list-item-group v-model="selectedItem" color="primary">
					<v-list-item v-for="(item, i) in items" :key="i" class="py-0">
						<v-list-item-avatar>
							<v-btn color="#363342" dark fab small depressed>
								<v-icon dark>
									{{ item.icon }}
								</v-icon>
							</v-btn>
						</v-list-item-avatar>
						<router-link to="/about" class="text-decoration-none">
							<v-list-item-content>
								<v-list-item-title v-text="item.text"></v-list-item-title>
							</v-list-item-content>
						</router-link>
					</v-list-item>
				</v-list-item-group>
			</v-list> -->
			<Sidebar />

			<v-divider class="mx-auto mb-2" inset></v-divider>

			<div class="text-overline text-center">Copyright</div>
			<div class="text-subtitle-2 text-center">kITaBantuin.co</div>

			<!-- <div class="text-subtitle-2 text-center">Design By <a href="https://dribbble.com/dwinawan">dwinawan</a>
			</div>

			<div class="text-subtitle-2 text-center">Coded By <a href="https://github.com/Abdurozzaq">Abdurozzaq Nurul
					Hadi</a></div>

			<div class="text-subtitle-2 text-center">Images By <a
					href="https://unsplash.com/s/photos/skateboard">Unsplash</a></div> -->

		</v-navigation-drawer>

		<v-app-bar app color="#1f1d2c" dark elevation="0">
			<v-container class="py-0 ml-0 fill-height text-center">

				<v-app-bar-nav-icon class="mr-2 x-small" v-if="$vuetify.breakpoint.smAndDown" @click="drawer = !drawer">
				</v-app-bar-nav-icon>

				<v-responsive max-width="500" v-if="$vuetify.breakpoint.mdAndUp">
					<v-text-field width="$vuetify.breakpoint.smAndDown ? 64px : 300px" dense flat hide-details rounded
						solo-inverted label="Search In Here" append-icon="mdi-magnify"></v-text-field>
				</v-responsive>

				<v-spacer></v-spacer>

				<v-btn dark icon small @click="cari = true" v-if="$vuetify.breakpoint.smAndDown">
					<v-icon>mdi-magnify</v-icon>
				</v-btn>

				<v-menu bottom left>
					<template v-slot:activator="{ on, attrs }">
						<v-btn dark icon v-bind="attrs" v-on="on" small class="ml-3">
							<v-icon>mdi-bell</v-icon>
						</v-btn>
					</template>

					<v-list three-line style="width: 250px;">
						<template v-for="(item, index) in notifData">
							<v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

							<v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

							<v-list-item v-else :key="item.title" link>
								<v-list-item-avatar>
									<v-img :src="item.avatar"></v-img>
								</v-list-item-avatar>

								<v-list-item-content>
									<v-list-item-title v-html="item.title"></v-list-item-title>
									<v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
						</template>
					</v-list>
				</v-menu>

				<v-avatar color="grey darken-1" size="32" class="d-none d-sm-flex ml-4"></v-avatar>

				<div class="text-subtitle-2 ml-2 d-none d-sm-flex">
					Rave Grass
				</div>

				<v-menu bottom left>
					<template v-slot:activator="{ on, attrs }">
						<v-btn dark icon v-bind="attrs" v-on="on" small class="ml-3">
							<v-icon>mdi-chevron-down</v-icon>
						</v-btn>
					</template>

					<v-list>
						<v-list-item v-for="(item, i) in avatarDrops" :key="i">
							<v-list-item-title>
								<router-link :to="item.title" class="text-decoration-none">
									{{ item.title }}
								</router-link>
							</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</v-container>
		</v-app-bar>
		<v-main class="back-color">
			<router-view />
		</v-main>

		<v-dialog v-model="cari" width="500">
			<v-card>
				<v-card-title class="text-h5 back-color-card">
					Search something here
				</v-card-title>

				<v-card-text>
					<v-text-field width="$vuetify.breakpoint.smAndDown ? 64px : 300px" dense flat hide-details rounded
						solo-inverted label="Enter your keyword" append-icon="mdi-magnify"></v-text-field>
				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" text @click="cari = false">
						Search it
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-app>
</template>

<script>
import Sidebar from '../components/SideBar.vue';
export default {
	components: {
		Sidebar
	},
	data() {
		return {
			drawer: true,
			cari: false,
			selectedItem: 0,
			items: [
				{ text: 'Home', icon: 'mdi-home' },
				{ text: 'Project', icon: 'mdi-trending-up' },
				{ text: 'Category', icon: 'mdi-playlist-play' },
				{ text: 'Bookmark', icon: 'mdi-bookmark' },
				{ text: 'Live Stream', icon: 'mdi-motion-play' },
				{ text: 'Tutorial', icon: 'mdi-cloud-question' },
				{ text: 'Competition', icon: 'mdi-flag-checkered' },
				{ text: 'Community', icon: 'mdi-account-group' },
			],
			avatarDrops: [
				{ title: 'My Profile' },
				{ title: 'Settings' },
				{ title: 'Logout' },
			],
			notifData: [
				{ header: 'Today' },
				{
					avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
					title: 'Brunch this weekend?',
					subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
				},
				{ divider: true, inset: true },
				{
					avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
					title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
					subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
				},
				{ divider: true, inset: true },
				{
					avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
					title: 'Oui oui',
					subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
				},
				{ divider: true, inset: true },
				{
					avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
					title: 'Birthday gift',
					subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
				},
				{ divider: true, inset: true },
				{
					avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
					title: 'Recipe to try',
					subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
				},
			],
		}
	}
}
</script>

<style scoped>
.back-color {
	background: #1f1d2c;
}

.fixed {
	position: fixed;
}
</style>

<style type="text/css">
::-webkit-scrollbar {
	overflow: visible;
}

@media only screen and (max-width: 950px) {
	::-webkit-scrollbar {
		width: 4px;
		height: 4px;
	}

	::-webkit-scrollbar-button {
		width: 0px;
		height: 0px;
	}

	::-webkit-scrollbar-thumb {
		background: #e1e1e1;
		border: 0px none #ffffff;
		border-radius: 50px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #ffffff;
	}

	::-webkit-scrollbar-thumb:active {
		background: #000000;
	}

	::-webkit-scrollbar-track {
		background: #666666;
		border: 0px none #ffffff;
		border-radius: 50px;
	}

	::-webkit-scrollbar-track:hover {
		background: #666666;
	}

	::-webkit-scrollbar-track:active {
		background: #333333;
	}

	::-webkit-scrollbar-corner {
		background: transparent;
	}
}
</style>