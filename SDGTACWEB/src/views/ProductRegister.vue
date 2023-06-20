<template>
    <div>
        <div class="BackgrountlogoPDR">
            <img src="../assets/logo_cuevas.png" alt="Logo de la empresa" class="logoPDR" />
        </div>
        
        <div class="containerPDR">
            <h1>Registro de Producto</h1>

            <form class="form-custom">

                <CustomSelect
                    name="category"
                    label="Categoría:"
                    @blur="validate"
                    @change="handleChangeCategory"
                    v-bind:error="validations.category"
                    v-model="category"
                    :options="options.categories"
                />

                <CustomInput 
                    type="text"
                    name="barcode"
                    label="Código de Barras:"
                    @blur="validate"
                    v-bind:error="validations.barcode"
                    v-model="barcode"
                />

                <CustomInput 
                    type="text"
                    name="productName"
                    label="Nombre del Producto:"
                    @blur="validate"
                    v-bind:error="validations.productName"
                    v-model="productName"
                />

                <label 
                    for="descripcion"
                >Descripción del Producto:</label>
                <textarea
                    type="text"
                    name="description"
                    label="Descripción:"
                    @blur="validate"
                    v-bind:error="validations.description"
                    v-model="description"
                    v-bind:rows="7"
                    v-bind:cols="100"

                ></textarea>

                <CustomInput 
                    type="number"
                    name="stock"
                    label="Existencias:"
                    @blur="validate"
                    v-bind:error="validations.stock"
                    v-model="stock"
                />

                <CustomInput 
                    type="number"
                    name="price"
                    label="Precio:"
                    @blur="validate"
                    v-bind:error="validations.price"
                    v-model="price"
                />

                <CustomInput 
                    type="text"
                    name="image"
                    label="Escribe la URL de la imagen:"
                    @blur="validate"
                    v-bind:error="validations.image"
                    v-model="image"
                />
            </form>
            <customButton @click="registerProduct" description="Registrar"/>
            <CustomButton @click="cancel" description="Cancelar"/>
        </div>
    </div>
</template>

<script>
import CustomButton from '../components/CustomButton.vue';
import CustomInput from '../components/CustomInput.vue';
import CustomSelect from '../components/CustomSelect.vue';
import { 
    validateForm,
    handleInputChange,
    postProduct
} from '../viewModel/ProductRegisterViewModel';
//import { MqResponsive } from 'vue3-mq';

var respuesta = [];
var categoryArray = [];

export default{
    data() {
        return {
            category: null,
            barcode: "",
            productName: "",
            description: "",
            stock: 0,
            price: 0,
            image: "",
            validations: {
                category: "",
                barcode: "",
                productName: "",
                description: "",
                stock: "",
                price: "",
                image: ""
            },
            options:{
                categories: 
                        [
                            {value:1, label:"ABARROTES"},
                            {value:2, label:"ENLATADOS"},
                            {value:3, label:"BEBIDAS"},
                            {value:4, label:"LACTEOS"},
                            {value:5, label:"DULCES"},
                            {value:6, label:"HIGIENE"},
                            {value:7, label:"USO DOMESTICO"},
                            {value:8, label:"LIMPIEZA"}
                        ]
            }
        };
    },async mounted() {
        this.userId= this.$route.params.id;
        this.userToken = this.$route.params.token;
    },
    methods: {
        async registerProduct() {
            const messages = validateForm(this);
            if (messages.length === 0) {
                //Haciendo POST con Axios
                const promise = postProduct(this.category, this.barcode, this.productName, this.description, this.stock, 
                this.price, this.image);
                
                await promise.then(array => respuesta = array);
                console.log("Respuesta: ");
                console.log(respuesta)

                if(respuesta.idCategoria == this.category){
                    alert("¡Se registró el producto!")
                    this.$router.push("/Administrator-Main-Dash-Board");
                }else{
                    console.log("No se registró el producto");
                }           
            }else{
                alert('Llene los campos correctamente');
            }
        },
        cancel() {
            this.$router.push("/Administrator-Main-Dash-Board");
        },
        async handleChangeCategory(event){ //Actualizando la lista de Categorias
            const category = categoryArray.find(category => 
                category.label === this.category
            );
        },
        validate(event) {
            const name = event.target.name;   
            handleInputChange(name, this);
        },
    },
    
    /*
    async mounted(){
        const promise = getAllBranch(this.options);
        await promise.then(array => branchArray = array);
    },*/
    components: { CustomInput, CustomSelect, CustomButton }
}
</script>

<style>
body {
    font-family: Arial, sans-serif;
    background-color: #f7e1e1;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url("../assets/BackgrownLogin.jpg");
}

.logoPDR {
    position: relative;
    width: 100%;
    max-width: 300px;
    display: flex;
}

.BackgrountlogoPDR {
    position: fixed;
    top: 10%; 
    left: 50%; 
    transform: translateX(-50%);
    width: 50%; 
    max-width: 200px;
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

h1 {
  color: rgb(0, 0, 0);
  font-weight: bold;
  text-align: center;
}

.containerPDR {
    position:absolute;
    display: block;
    width: 80%;
    top: 30%; 
    bottom: 5%;
    transform: translateX(-50%);
    max-width: 2000px;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
}

.form-custom {
    margin-top: 20px;
}
</style>