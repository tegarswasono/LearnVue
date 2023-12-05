<script setup>
    import { reactive, ref, computed } from 'vue'
    import MyComponentSub1 from './ClassAndStyleBindingSub1.vue'
    import MyComponentSub2 from './ClassAndStyleBindingSub2.vue'
    const isActive = ref(true)
    const hasError = ref(true)

    const classObject = reactive(
        {
            active : true,
            'text-danger' : true
        }
    )

    const classObject2 = computed(()=>({
        active: isActive.value && !hasError.value,
        'text-danger': hasError.value && hasError.value.type === 'fatal'
    }))

    const activeClass = ref('active')
    const errorClass = ref('text-danger')
</script>
<template>
    <div :class="{ active : isActive }">Active</div>
    <div class="static" :class="{ active:isActive, 'text-danger':hasError }"></div>
    <hr/>

    <div :class="classObject"></div>
    <div :class="classObject2"></div>
    <div :class="[activeClass, errorClass]"></div>
    <div :class="[isActive ? activeClass : '', errorClass]"></div>
    <hr/>

    <MyComponentSub1 class="baz boo" />
    <MyComponentSub2 class="baz" />
</template>
<style scoped>

</style>