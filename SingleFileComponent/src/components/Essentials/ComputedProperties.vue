<script setup>
import { computed, reactive } from 'vue';

    const author = reactive(
        {
            name : 'John Doe',
            books : [
                'Vue 2 - Advanced Guide',
                'Vue 3 - Basic Guide',
                'Vue 4 - The Mystery'
            ]
        }
    )

    const publishedBooksMessage = computed(()=>{
        return author.books.length > 0 ? 'Yes' : 'No'
    })
    function calculateBooksMessage(){
        return author.books.length > 0 ? 'Yes' : 'No'
    }
</script>
<template>
    <p>Has published books:</p>
    <span>
        {{ author.books.length ? 'Yes' : 'No' }}
    </span>
    <span>
        {{ publishedBooksMessage }}
    </span>
    <span>
        {{ calculateBooksMessage() }}
    </span>
</template>
<style scoped>

</style>