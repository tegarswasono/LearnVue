<script setup lang="ts">
    function getTime() : number{
        return new Date().getTime();
    }
    console.log(getTime())

    function printHello() : void{
        console.log('Hello!');
    }
    printHello()

    function multiple(a: number, b: number): number{
        return a*b;
    }
    console.log(multiple(5,6))
</script>
<template>
    <p>Go to console</p>
</template>