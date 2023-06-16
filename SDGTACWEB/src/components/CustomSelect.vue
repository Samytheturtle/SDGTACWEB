<template>
    <div class="form-group">
        <label>
            {{ label }}
        </label>
        <select :name="name" @blur="blur" @change="change" :value="modelValue" @input="updateValue">
            <option v-for="option in options" v-bind:value="option.value">
                {{ option.label }}
            </option>
        </select>
        <span class="error" v-if="error">{{ error }}</span>
    </div>
</template>

<script scoped>
export default{
    props:{
        options: Array,
        label: String,
        error: String,
        name: String,
        modelValue: ''
    },
    setup(props, context){
        const updateValue = (event) => {
            context.emit('update:modelValue', event.target.value);
        }
        const blur = (event) => {
            context.emit('blur', event);
        }
        const change = (event) => {
            context.emit('change', event);
        }
        return {updateValue, blur, change}
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