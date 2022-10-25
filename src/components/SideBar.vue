<template>
    <div>
        <v-list flat dense class="ml-5">
            <v-subheader>MENU</v-subheader>
            <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i" class="py-0">
                    <router-link :to="item.path" class="text-decoration-none">
                        <v-list-item-avatar>
                            <v-btn color="#363342" dark fab small depressed>
                                <v-icon dark>
                                    {{ item.icon }}
                                </v-icon>
                            </v-btn>
                        </v-list-item-avatar>
                        <v-list-item-content class="d-block">
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </router-link>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                { text: 'Home', icon: 'mdi-home', path: 'home' },
                { text: 'About', icon: 'mdi-account', path: 'about' },
                { text: 'Contact', icon: 'mdi-phone', path: 'contact' },
            ],
        }
    },
}
</script>