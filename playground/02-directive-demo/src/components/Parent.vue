<template>
    <div>
        <h2>Parent Component : {{ name }}</h2>   
        <br>
        <app-child v-bind:name = "name"></app-child>
    </div>
</template>

<script>
import Child from './Child';

export default {
    data(){
        return {
            name : "Max"
        }
    },
    components : {
        appChild : Child
    }
}
</script>