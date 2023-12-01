<script setup>
    import { ref, reactive } from 'vue'

    const count = ref(0)

    console.log(count)
    console.log(count.value)

    count.value++
    console.log(count.value)

    function increment(){
        count.value++;
    }

    const obj = ref(
        {
            nested : { count : 0},
            arr: ['foo', 'bar']
        }
    )
    function mutateDeeply(){
        obj.value.nested.count++
        obj.value.arr.push('baz')
    }
    mutateDeeply();
    console.log('F12 untuk lihat isi obj');
    console.log(obj.value)
    console.log(obj.value.nested)

    const state = reactive(
        {
            count: 0
        }
    )

    const raw = {}
    const proxy = reactive(raw)
    console.log(proxy === raw) //false

    // calling reactive() on the same object returns the same proxy
    console.log(reactive(raw) === proxy) // true

    // calling reactive() on a proxy returns itself
    console.log(reactive(proxy) === proxy) // true
    
    //reactive Cannot replace entire object
    //state = reactive({ count: 1 }) //contoh ini dapat memutus koneksi state yang telah dibuat di awal


    //ini juga memutus koneksi
    // count is disconnected from state.count when destructured.
    //let { count1 } = state
    //count++
    //callSomeFunction(state.count)
  
</script>
<template>
    <button @click="increment">
        {{ count }}
    </button>
    <hr/>

    <button @click="state.count++">
        {{ state.count }}
    </button>
</template>
<style scoped>

</style>