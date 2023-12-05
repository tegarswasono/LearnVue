<script setup>
    import { reactive, ref, computed } from 'vue'
    const activeColor = ref('red')
    const fontSize = ref(30)

    const styleObject = reactive(
        {
            color: 'red',
            fontSize: '13px'
        }
    )
</script>
<template>
    <div :style="{ color: activeColor, fontSize: fontSize+'px' }"></div>
    <hr/>

    <div :style="styleObject"></div>
    <div :style="[styleObject]"></div>

</template>
<style scoped>

</style>