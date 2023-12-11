<script setup>
    import { ref } from 'vue'
    import ButtonCounter from './ButtonCounter.vue'
    import BlogPost from './BlogPost.vue';

    const posts = ref([
        { id:1, title: 'Title 1', content: 'Content 1'},
        { id:2, title: 'Title 2', content: 'Content 2'},
        { id:3, title: 'Title 3', content: 'Content 3'}
    ])

    const postFontSize = ref(1)

    const emit = defineEmits(['enlarge-text', 'var1'])
    emit('enlarge-text')
    emit('var1')

    const var1 = ref(0)
</script>
<template>
    <h1>Here are many child components!</h1>
    <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter />
    <hr/>

    <BlogPost title="Article1" content="Content1" />
    <BlogPost title="Article2" content="Content2" />
    <BlogPost title="Article3" content="Content3" />
    <hr/>

    <div :style="{ fontSize: postFontSize+'em' }">
        <BlogPost 
        v-for="post in posts" 
        :key="post.id" 
        :title="post.title"
        @enlarge-text="postFontSize += 0.1"
        @var1="var1+=2"
        />
    </div>
    <hr/>

    <p>Var1: {{ var1 }}</p>
</template>