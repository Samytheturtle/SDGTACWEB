<template>
    <div class="form-group">
        <label>
            {{ label }}
            <input :type="type" :name="name" @blur="blur" :value="modelValue" @input="updateValue"/>
            <span class="error" v-if="error">{{ error }}</span>
        </label>
    </div>
</template>

<script scoped>
export default{
    props:{
        label:{
            type: String,
            required: true
        },
        error:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        type:{
            type: String,
            required: true
        },
        modelValue: ''
    },
    setup(props, context){
        const updateValue = (event) => {
            context.emit('update:modelValue', event.target.value);
        }
        const blur = (event) => {
            context.emit('blur', event);
        }
        return {updateValue, blur}
    }
}
</script>

<style>
.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
  color: black;
}

input[type="text"],
input[type="date"]
input[type="password"],
input[type="number"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  border-color: #8b7a5e;
}

.error{
    color: red;
}
</style>