<template>
    <button @click="click">{{ description }}</button>
</template>

<script>
export default{
    props:{
        description: String
    },
    methods:{
        callback: function(e) {
            this.$emit('click', e);
        }
    }
}
</script>

<style scoped>
button {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: #8b7a5e;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.3s;
}

button:hover {
  background-color: #ffefd3;
}
</style>