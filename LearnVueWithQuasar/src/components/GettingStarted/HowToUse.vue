<script>
    import { useQuasar } from 'quasar'
    
    export default {
    setup () {
        const $q = useQuasar()

        function showNotification () {
        $q.notify('Some other message')
        }

        return {
        showNotification
        }
    }
    }
</script>
<template>
    <div v-ripple>Click me</div>
    <hr/>

    <div v-touch-pan>...</div>
    <div v-touch-swipe>...</div>
    <div v-ripple>Click me. I got ripples</div>
    <hr/>

    <div>
        <q-btn @Click="" label="Do something" />
        <q-icon name="alarm" />
    </div>
    <hr/>

    <div>
        <q-btn @Click="$q.notify('My Message')" color="primary" label="Show a notification" />
        <q-btn @Click="showNotification" color="primary" label="Show another notification" />
    </div>

</template>