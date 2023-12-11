<script setup>
    import { ref } from 'vue'
    import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <RouterLink class="link-underline-light link-info" to="/GettingStart/Page1">Page1</RouterLink> <br/>
    <RouterLink class="link-underline-light link-info" to="/GettingStart/Page2">Page2</RouterLink> <br/>
    <RouterLink class="link-underline-light link-info" to="/GettingStart/Page3">Page3</RouterLink> <br/>

    <hr/>
    <RouterView />
</template>