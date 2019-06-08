<template>
    <div>
        <h1>User 2 Component</h1>
        <p>Counter : {{ counter }}</p>
        <button @click="increase">Increase Counter</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            counter : 0
        }
    },
    destroyed() {
        console.log("[DESTROYED]");
    },
    methods: {
        increase(){
            this.counter += 1;
        }
    },
}
</script>