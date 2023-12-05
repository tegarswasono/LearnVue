<script setup>
    import { ref, reactive, computed } from 'vue'
    const awesome = ref(true)
    const type = ref('D')

    
</script>
<template>
    <button @click="awesome=!awesome">Toggle</button>
    <h1 v-if="awesome">Vue is awesome !</h1>
    <h1 v-else>Oh no</h1>
    <hr/>

    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'"></div>
    <div v-else>Not A/B/C</div>
    <hr/>

    <template v-if="true">
        <h1>Title</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </template>
    <hr/>

    <h1 v-show="true">Hello !</h1>
    <hr/>
</template>
<style scoped>

</style>