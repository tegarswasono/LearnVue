<script setup lang="ts">
    let firstName2 = "Dylan"
    let firstName: string = "Dylan"

    let BoolType: boolean = true
    let numberType: number = 123456789012345678901234567890
    let stringType: string = 'John Doe'

    let bigintType: bigint = BigInt(12345)
    let symbolType: symbol = Symbol.for('Csv column title');
</script>
<template>
    {{ firstName }}
    {{ firstName2 }}
    <hr/>

    {{ BoolType }} || 
    {{ numberType }} || 
    {{ stringType }} || 
    {{ bigintType }} || 
    {{ symbolType }}
</template>