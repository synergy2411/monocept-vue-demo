<template>
    <div>
        <h2>Parent Component : {{ name }}</h2>   
        <br>
        <app-child 
            :name = "name" 
            :counter = "counter"
            v-on:nameIsChanged = "name = $event"></app-child>
        <br>
        <app-another-child :name = "name"></app-another-child>
    </div>
</template>

<script>
import Child from './Child';
import AnotherChild from './AnotherChild';

export default {
    data(){
        return {
            name : "Max",
            counter : 0
        }
    },
    components : {
        appChild : Child,
        appAnotherChild : AnotherChild
    }
}
</script>