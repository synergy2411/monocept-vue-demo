<template>
    <div>
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
import { FruitMixin } from '../../FruitMixin';

export default {
   mixins : [FruitMixin]
}
</script>