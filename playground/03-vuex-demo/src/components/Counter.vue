<template>
  <div>
    <button @click="asyncIncrement">Increment</button>
    <button @click="asyncDecrement">Decrement</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
import {mapActions} from 'vuex';
export default {
    methods : { ...mapActions(["asyncIncrement", "asyncDecrement"])}
    // methods: {
    //     ...mapMutations(["increment", "decrement"])
    // },
//   methods: {
//     increment() {
//       // this.$store.state.counter++;
//       this.$store.commit('increment');
//     },
//     decrement() {
//       //    this.$store.state.counter--;
//       this.$store.commit('decrement');
//     }
//   }
};
</script>