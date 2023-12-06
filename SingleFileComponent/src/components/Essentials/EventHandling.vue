<script setup>
    import { ref } from 'vue'
    const count = ref(0)

    const name = ref('Vue.js')
    function greet(event){
        alert(`Hello ${name.value}!`)
        if(event){
            alert(event.target.tagName)
        }
    }
    function say(message){
        alert(message)
    }
    function onPageDown(event){
        alert('page down clicked')
    }
</script>
<template>
    <button @click="count+=2">Add 1</button>
    <p>Count is: {{ count }}</p>
    <hr/>

    <button @click="greet">Greet</button>
    <button @click="say('Halo')">Halo</button>
    <hr/>

    <input @keyup.page-down="onPageDown" />
</template>
<style scoped>

</style>