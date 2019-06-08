<template>
    <div>
        <h2>Another Child - {{ name }}</h2>
        <button @click="changeName">Change Name</button>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    props : {
        name : {
            required : true,
            type : String
        }
    },
    methods: {
        changeName (){
            this.name = "Max";
            eventBus.$emit('nameIsReset', this.name);
        }
    },
}
</script>