<template>
    <span class="error" v-if="error">{{ error }}</span>
</template>

<script scoped>
export default{
    props:{
        error: String
    }
}
</script>

<style>
.error{
    color: red;
}
</style>