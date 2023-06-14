<template>
    <div class="form-group">
        <label>
            {{ label }}
        </label>
        <select :name="name" @blur="blur" :value="modelValue" @input="updateValue">
            <option v-for="option in options" v-bind:value="option.value">
                {{ option.label }}
            </option>
        </select>
        <span class="error" v-if="error">{{ error }}</span>
    </div>
</template>

<script>
export default{
    props:{
        options: Array,
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

select {
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