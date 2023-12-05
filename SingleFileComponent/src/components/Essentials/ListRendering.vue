<script setup>
    import { reactive, ref } from 'vue'
    const items = ref(
        [
            { message : 'Foo', subObject : [1,2,3] },
            { message : 'Bar', subObject: [4,5,6] }
        ]
    )

    const parentMessage = ref('Parent')
    const myObject = reactive({
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
    })

</script>
<template>
    <li v-for="item in items">
        {{ item.message }}
    </li>
    <hr/>

    <li v-for="(item, index) in  items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
    <hr/>

    <li v-for="item in items">
        <span v-for="subObject in item.subObject">
            {{ item.message }} {{ subObject }}
        </span>
    </li>
    <hr/>

    <ul>
        <li v-for="value in myObject">{{ value }}</li>
    </ul>
    <ul>
        <li v-for="(value, key) in  myObject">{{ key }}: {{ value }}</li>
    </ul>
    <hr/>

    <span v-for="n in 10">{{ n }}</span>
    <hr/>

    <ul>
        <template v-for="item in items">
            <li>{{ item.message }}</li>
            <li class="divider" role="presentation"></li>
        </template>
    </ul>
    <hr/>

    <div v-for="item in items" :key="item.message">
        {{ item.message }}
    </div>
    <template v-for="item in items" :key="item.message">
        <li>{{ item.message }}</li>
    </template>
</template>
<style scoped>

</style>