<script setup>
    import { ref } from 'vue'
    const message = ref('tegar')
    const checked = ref(true)
    const checkedNames = ref([])

    const picked = ref('two')
    const selected = ref('B')

    const selected2 = ref('A')
    const options = ref([
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
    ])
</script>
<template>
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="Edit me" />
    <hr/>

    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <textarea v-model="message" placeholder="Add Multiple Lines"></textarea>
    <hr/>

    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <hr/>

    <div>Checked names: {{ checkedNames }}</div>
    <input type="checkbox" id="jack" value="jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="john" v-model="checkedNames" />
    <label for="john">john</label>
    <input type="checkbox" id="mike" value="mike" v-model="checkedNames" />
    <label for="mike">mike</label>
    <hr/>

    <div>Picked: {{ picked }}</div>
    <input type="radio" id="one" value="one" v-model="picked" />
    <label for="one">one</label>
    <input type="radio" id="two" value="two" v-model="picked">
    <label for="two">Two</label>
    <hr/>

    <div>Selected: {{ selected }}</div>
    <select name="select1" id="select1" v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <hr/>

    <select v-model="selected2">
        <option v-for="option in options" :value="option.value">{{ option.text }}</option>
    </select>
    <div>Selected: {{ selected2 }}</div>
    <hr/>

    <input type="checkbox" v-model="checked" true-value="CustomYes" false-value="Customno" />
</template>
<style>

</style>