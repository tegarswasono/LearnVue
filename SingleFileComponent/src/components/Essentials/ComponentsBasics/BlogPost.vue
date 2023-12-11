<script setup>
    defineProps(['title', 'content'])
    defineEmits(['enlarge-text', 'var1'])
</script>
<template>
    <h4>Title: {{ title }}</h4>
    <p>
        Article: {{ content }} 
    </p>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
    <button @click="$emit('var1')">Var 1</button>
</template>