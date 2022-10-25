<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="12" md="8" class="back-color">
                <v-card width="100%" class="rounded-xl">
                    <!-- <v-img src="/img/img1.jpg" :aspect-ratio="10 / 3.85"
							gradient="to top right, rgba(64,74,87,0.4318102240896359) 0%, rgba(46,52,61,0.4290091036414566) 100%">
							<v-card-text class="pb-0">
								<v-row>
									<v-col cols="12" sm="12" md="6" lg='6'>
										<h1 v-if="$vuetify.breakpoint.mdAndUp" class="mx-4 text-glow-grey"
											style="line-height: 150%;">
											How to do basic jumping and how to landing safely
										</h1>
										<h3 v-if="$vuetify.breakpoint.smAndDown" class="mx-4 text-glow-grey"
											style="line-height: 150%;">
											How to do basic jumping and how to landing safely
										</h3>
									</v-col>
									<v-col cols="6" v-if="$vuetify.breakpoint.mdAndUp">

									</v-col>
								</v-row>
							</v-card-text>

							<v-card-title class="white--text py-0">
								<v-list-item two-line>
									<v-list-item-avatar>
										<v-img src="https://randomuser.me/api/portraits/men/3.jpg"></v-img>
									</v-list-item-avatar>

									<v-list-item-content>
										<v-list-item-title class="text-glow-grey">Frag Sanderson</v-list-item-title>
										<v-list-item-subtitle class="text-glow-grey">2.8K views</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
							</v-card-title>

							<v-card-actions style="position:absolute;bottom:0px;right:0px;">
								<v-spacer></v-spacer>
								<v-chip small color="primary" class="ma-2">
									7 min
								</v-chip>
							</v-card-actions>
						</v-img> -->
                    <div>
                        <v-carousel hide-delimiters v-model="model" class="testimoni11">
                            <v-carousel-item v-for=" (testimoni) in testimoni" :key="testimoni">
                                <v-sheet :color="color" height="100%" tile>
                                    <v-row class="fill-height" justify="center">
                                        <div class="text-h2" style="margin-top: 130px;">
                                            {{ testimoni.description }}
                                        </div>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="4" sm="12" class="back-color">
                <v-card width="100%" class="rounded-xl">
                    <v-img src="/img/img2.jpg" :aspect-ratio="$vuetify.breakpoint.smAndDown ? 2 / 0.5 : 1 / 0.8"
                        gradient="to top right, rgba(64,74,87,0.4318102240896359) 0%, rgba(46,52,61,0.4290091036414566) 100%">
                        <v-card-text class="pb-0">
                            <v-row v-if="$vuetify.breakpoint.smAndDown">
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <h1 v-if="$vuetify.breakpoint.mdAndUp" class="mx-4 text-glow-grey"
                                        style="line-height: 150%;">
                                        Skateboard tips you need to know
                                    </h1>
                                    <h3 v-if="$vuetify.breakpoint.smAndDown" class="mx-4 text-glow-grey"
                                        style="line-height: 150%;">
                                        How to do basic jumping and how to landing safely
                                    </h3>
                                </v-col>
                                <v-col cols="6" v-if="$vuetify.breakpoint.mdAndUp">

                                </v-col>
                            </v-row>

                            <v-row v-if="$vuetify.breakpoint.mdAndUp">
                                <v-col cols="12" sm="12" md="8" lg="8">
                                    <h3 class="mx-4 text-glow-grey" style="line-height: 150%;">
                                        Skateboard tips you need to know
                                    </h3>
                                </v-col>
                                <v-col cols="4" v-if="$vuetify.breakpoint.mdAndUp">

                                </v-col>
                            </v-row>
                        </v-card-text>

                        <v-card-title v-if="$vuetify.breakpoint.smAndDown" class="white--text py-0">
                            <v-list-item two-line>
                                <v-list-item-avatar>
                                    <v-img src="https://randomuser.me/api/portraits/men/7.jpg"></v-img>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title class="text-glow-grey">James Hope</v-list-item-title>
                                    <v-list-item-subtitle class="text-glow-grey">2.8K views</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card-title>

                        <v-card-title v-if="$vuetify.breakpoint.mdAndUp" class="white--text py-0">
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title class="text-glow-grey">James Hope</v-list-item-title>
                                    <v-list-item-subtitle class="text-glow-grey">2.8K views</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card-title>

                        <v-card-title v-if="$vuetify.breakpoint.mdAndUp" class="white--text py-0">
                            <v-list-item>
                                <v-list-item-avatar>
                                    <v-img src="https://randomuser.me/api/portraits/men/7.jpg"></v-img>
                                </v-list-item-avatar>
                            </v-list-item>
                        </v-card-title>

                        <v-card-actions style="position:absolute;bottom:0px;right: 0px;">
                            <v-spacer></v-spacer>
                            <v-chip small color="primary" class="ma-2">
                                7 min
                            </v-chip>
                        </v-card-actions>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'
export default {
    setup() {
        let testimoni = ref([]);
        onMounted(() => {
            axios.get('http://localhost:8000/api/testimoni')
                .then((response) => {
                    testimoni.value = response.data.data
                    console.log(response.data);
                })
        })
        return {
            testimoni
        }
    },

}
</script>

<style>
.testimoni11 {
    max-height: 300px;
}
</style>