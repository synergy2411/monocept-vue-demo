<template>
    <div>
        <h1>Filter Demo</h1>
        <p> {{ greet | toUppercase | toLowercase }} </p>
        <input type="text" :value="greet | toUppercase">
        <p>
            <input type="text" v-model="filteredFruitsStatus">
        <br>
        <ul>
            <li v-for="(fruit, index) in myFilteredFruits" :key="index">
                {{ fruit }}
            </li>
        </ul>
        </p>
        
    </div>
</template>

<script>
import {FruitMixin} from '../../FruitMixin';

export default {
    data(){
        return {
            greet : "Welcome to Vue!",
        }
    },
    filters : {
        toUppercase(value){
            return value.toUpperCase();
        }
    },
    mixins : [FruitMixin]
}
</script>