<template>
    <div class="form-group">
        <label>
            {{ label }}
        </label>
        <select 
            class="select-custom"
            :name="name" 
            @blur="blur" 
            @change="change" 
            :value="modelValue" 
            @input="updateValue"
        >
            <option 
                v-for="option in options" 
                v-bind:value="option.value"
            >
                {{ option.label }}
            </option>
        </select>
        <CustomError :error="error"/>
    </div>
</template>

<script>
import CustomError from './CustomError.vue';

export default{
    props: {
        options: Array,
        label: String,
        error: String,
        name: String,
        modelValue: ""
    },
    setup(props, context) {
        const updateValue = (event) => {
            context.emit("update:modelValue", event.target.value);
        };
        const blur = (event) => {
            context.emit("blur", event);
        };
        const change = (event) => {
            context.emit("change", event);
        };
        return { updateValue, blur, change };
    },
    components: { CustomError }
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

.select-custom {
    font-size: 20px;
    width: 100%;
    padding: 8px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    border-color: #8b7a5e;
}

.select-custom:focus {
    background-color: #fffee4;
}
</style>