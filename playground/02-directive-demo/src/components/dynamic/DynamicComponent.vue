<template>
    <div>
        <h1>Dynamic Component</h1>   
        <button @click="selectedComponent = 'app-user-one'">User 1</button>
        <button @click="selectedComponent = 'app-user-two'">User 2</button>
        <br>
        Selected Component : {{ selectedComponent }}
        <!-- Keep-alive does not destroy / re-create the component -->
        <keep-alive>
            <component :is="selectedComponent"></component>
        </keep-alive>
        <!-- <component :is="selectedComponent"></component> -->
    </div>
</template>

<script>
import User01 from './User01'
import User02 from './User02'

export default {
    data(){
        return {
            selectedComponent : "app-user-one"
        }
    },
    components : {
        'app-user-one' : User01,
        'app-user-two' : User02
    }
}
</script>