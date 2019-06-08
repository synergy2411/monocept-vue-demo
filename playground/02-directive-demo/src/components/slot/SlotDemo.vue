<template>
    <div>
        <p> <slot name="header"></slot> </p>
        <h1>Slot Demo</h1>

        <slot></slot>

        <p> <slot name="footer"></slot> </p>
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
   
</style>