<script setup>
    import { reactive, ref, computed } from 'vue'
    import MyComponent from './ListRendering2Sub1.vue'
    const items = ref([
        { message : 'Foo', subObject : [1,2,3] },
        { message : 'Bar', subObject: [4,5,6] }
    ])

    const numbers = ref([1,2,3,4,5])
    const evenNumbers = computed(()=>{
        return numbers.value.filter((n) => n % 2 === 0)
    })
</script>
<template>
    <MyComponent v-for="item in items" :key="item.message" :item = "item" />
    <hr/>

    <li v-for="n in evenNumbers">{{ n }}</li>
</template>
<style>

</style>