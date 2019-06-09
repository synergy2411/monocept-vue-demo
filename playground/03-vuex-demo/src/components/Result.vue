<template>
    <div>
       <h3>
           Store State : {{ $store.state.counter }} <br>
           Counter : {{ getCounter }} <br>
           Number of Clicks : {{ stringCounter }}
       </h3>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {

    computed: mapGetters(["stringCounter", "getCounter"])

    // computed:{
    //     getCounter(){
    //         return this.$store.getters.getCounter;
    //     },
    //     clicks(){
    //         return this.$store.getters.stringCounter;
    //     }
    // },
}
</script>