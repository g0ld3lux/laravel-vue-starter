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
    components : {
        AppHeader , AppFooter
    },
    mounted() {
        console.log('Layout Loaded!')
    }
}
</script>