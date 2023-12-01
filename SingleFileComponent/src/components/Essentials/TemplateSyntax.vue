<script setup>
    const msg = "tegar swasono"
    const rawHtml = '<span style="color: red;">RED OKE</span>'
    const dynamicId = "div1"
    const isButtonDisabled = true
    const objectOfAttrs = {
        id: 'container',
        class : 'wrapper'
    }
    const ok = true
    const id = 1
    var seen = true
    const url = 'https://id-id.facebook.com/'
    function buttonClick(){
        alert('hallo');
        //kode ini tidak bekerja, kamu harus pakai ref, computed property
        seen = !seen;
    }
    const title = 'title'
</script>
<template>
    <p>
        v-html <br/>
        v-bind:id="dynamicId" => :id="dynamicId" <br/>
        v-on:click="buttonClick()" => @click="buttonClick()" <br/>
    </p>
    Message {{ msg }}
    <hr/>

    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <hr/>

    <div v-bind:id="dynamicId"></div>
    <div :id="dynamicId"></div>
    <hr/>

    <button :disabled="isButtonDisabled">Button</button>
    <hr/>

    <div v-bind="objectOfAttrs"></div>
    <hr/>

    {{ 5 + 1 }}
    {{ ok ? 'yes' : 'no' }}
    {{ msg.split('').reverse().join('') }}
    <div :id="`list-${id}`"></div>
    <hr/>

    <p v-if="seen">Now you see me</p>
    <a :href="url" target="_blank">Link</a>
    <hr/>

    <button v-on:click="buttonClick()">klik me</button>
    <button @click="buttonClick()">klik me</button>
    <a :[title]="url">Over me</a>
</template>
<style scoped>

</style>
