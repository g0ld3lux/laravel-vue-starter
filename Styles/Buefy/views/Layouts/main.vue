<template>
    <div>
        <!-- Here We Load Nav Menu Bar -->
        <app-header></app-header>
        <!-- Here We Load Our View -->
        <router-view></router-view>
        <!-- Here We Load Our Footer -->
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from './partials/AppHeader.vue'
import AppFooter from './partials/AppFooter.vue'

export default {
    components: {
        AppHeader, AppFooter
    },
    mounted() {
        console.log('Layout and Styling Loaded!')
    }
}
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all"; // Set your colors
// Bulma Custom Themes
$primary: #f1896f;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter); // Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: ( "white": ($white, $black),
"black": ($black, $white),
"light": ($light, $light-invert),
"dark": ($dark, $dark-invert),
"primary": ($primary, $primary-invert),
"info": ($info, $info-invert),
"success": ($success, $success-invert),
"warning": ($warning, $warning-invert),
"danger": ($danger, $danger-invert),
"twitter": ($twitter, $twitter-invert)); // Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;
$weight-semibold: 800; // Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>