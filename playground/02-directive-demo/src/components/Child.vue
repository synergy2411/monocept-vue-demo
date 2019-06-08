<template>
    <div>
        <h2>Child Component</h2> 
        <p>Name in Child :: {{ name }} || {{ counter }}</p>
        <!-- <button v-on:click="reverse">Reverse</button> -->
        <button @click="reverse">Reverse</button>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
    props : ['name', 'counter'],
    methods: {
        reverse(){
            this.name = this.name.split("").reverse().join("");
            this.$emit("nameIsChanged", this.name);
        }
    },
    created(){
     eventBus.$on("nameIsReset", (updateName)=>{
         this.name = updateName;
     })   
    }
}
</script>