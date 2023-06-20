<template>
    <div
        class="nav"
        :class="active"
        @click="click"
    >
        {{ description }}
    </div>
</template>

<script>

export default {
    props:{
        description: String,
        active: Object
    },
    methods:{
        callback: function(e) {
            this.$emit('click', e);
        }
    }
}
</script>

<style scoped>
.nav {
    flex-grow: 1;
    padding: 10px 20px;
    background-color: #9ba1a1 ;
    color: #000000;
    border-radius: 5px;
    cursor: pointer;
}

.nav.active {
    background-color: #eff7f6;
}
</style>