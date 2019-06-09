<template>
    <div>
        <h3>User detail for ID : {{ id }}</h3>

        <router-link tag="li" :to="link"> <a>Edit</a> </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id : 0,
            link : '/user/' + this.$route.params.id +'/edit'
        }
    },
    created(){
        this.id = this.$route.params.id
    }
}
</script>