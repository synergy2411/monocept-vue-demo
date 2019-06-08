<template>
    <div>
        <h2>Life Cycle Methods Demo</h2>
        <p> Name : {{ name }}</p>
        <button @click="changeName">Change Name</button>
        <button @click="destroy">Destroy</button>
    </div>
</template>

<script>
export default {
    props : ['name'],
    methods: {
        changeName(){
            this.name = "Anna";
        },
        destroy(){
            this.$destroy();
        }
    },
    beforeCreate(){
        console.log("beforeCreate");
    },
    created(){
        console.log("created");
    },
    beforeMount(){
        console.log("beforeMount");
    },
    mounted(){
        console.log("mounted");
    },
    beforeUpdate(){
        console.log("beforeUpdate");
    },
    updated(){
        console.log("updated");
    },
    beforeDestroy(){
        console.log("beforeDestroy");
    },
    destroyed(){
        console.log("destroyed");
    }

}
</script>