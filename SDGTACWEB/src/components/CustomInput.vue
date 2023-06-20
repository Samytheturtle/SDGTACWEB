<template>
    <div class="form-group">
        <label>
            {{ label }}
            <input 
                class="input-custom"
                :type="type" 
                :name="name" 
                @blur="blur" 
                :value="modelValue" 
                @input="updateValue"
            />
            <CustomError :error="error"/>
        </label>
    </div>
</template>

<script scoped>
import CustomError from './CustomError.vue';

export default{
    props: {
        label: String,
        error: String,
        name: String,
        type: String,
        modelValue: ""
    },
    setup(props, context) {
        const updateValue = (event) => {
            context.emit("update:modelValue", event.target.value);
        };
        const blur = (event) => {
            context.emit("blur", event);
        };
        return { updateValue, blur };
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

.input-custom {
    display: block;
    font-size: 20px;
    width: 100%;
    padding: 8px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    border-color: #8b7a5e;
}

.input-custom:focus {
    background-color: #fffee4;
}
</style>