<template>
    <div>
        <h2>Child Component</h2> 
        <p>Name in Child :: {{ name }} </p>
        <button v-on:click="reverse">Reverse</button>
    </div>
</template>

<script>
export default {
    props : ['name'],
    methods: {
        reverse(){
            this.name = this.name.split("").reverse().join("");
        }
    },
}
</script>