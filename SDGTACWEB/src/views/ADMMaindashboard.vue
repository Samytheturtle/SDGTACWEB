<template>
    <div class="container">
        <div class="sectionNav"> 
            <CustomNavBar 
                :class="{ active: active === 'branch' }"
                @click="changeNav('branch')"
                description="Consultar sucursales"
            />

            <CustomNavBar
                :class="{ active: active === 'user' }"
                @click="changeNav('user')"
                description="Consultar usuarios"
            />
            
            <CustomNavBar
                :class="{ active: active === 'product' }"
                @click="changeNav('product')"
                description="Consultar productos"
            />
        </div>
        <CustomButton @click="salir" description="Salir"/>
        <div class="container-table" id="table-branch">
            <CustomButton @click="registerBranch" description="Registrar"/>
            <DataTable 
                :options="optionsTable"
                class="table"
                width="100%"
                ref="tableBranch"
                :data="branches"
                :columns="columnsBranch"
            />
        </div>
        <div class="container-table" id="table-user" hidden>
            <CustomButton @click="registerUser" description="Registrar"/>
            <DataTable 
                :options="optionsTable"
                class="table"
                width="100%"
                ref="tableUser"
                :data="users"
                :columns="columnsUser"
            />
        </div>
        <div class="container-table" id="table-product" hidden>
            <CustomButton @click="registerProduct" description="Registrar"/>
            <DataTable 
                :options="optionsTable"
                class="table"
                width="100%"
                ref="tableProduct"
                :data="products"
                :columns="columnsProduct"
            />
        </div>
    </div>
</template>

<script>
import CustomButton from '../components/CustomButton.vue';
import CustomNavBar from '../components/CustomNavBar.vue';
import DataTable from 'datatables.net-vue3';
import 'datatables.net-responsive';
import 'datatables.net-select';
import DataTablesCore from 'datatables.net';
import { ref } from 'vue';

DataTable.use(DataTablesCore);

const options = {
    language: {
        processing: 'Procesando...',
        lengthMenu: 'Mostrar _MENU_ registros',
        zeroRecords: 'No se encontraron resultados',
        emptyTable: 'Ningún dato disponible en esta tabla',
        infoEmpty: 'Mostrando registros del 0 al 0 de un total de 0 registros',
        infoFiltered: '(filtrado de un total de _MAX_ registros)',
        search: '',
        searchPlaceholder: 'Buscar',
        info: 'Mostrando _START_ a _END_ de _TOTAL_ registros',
        loadingRecords: 'Cargando...',
		paginate: {
			first: 'Primero',
			last: 'Último',
			next: 'Siguiente',
			previous: 'Anterior'
		},
		aria: {
			sortAscending: ': Activar para ordenar la columna de manera ascendente',
			sortDescending: ': Activar para ordenar la columna de manera descendente'
		},
    },
    autoWidth: true,
    scrollY: 300,
    scrollX: true,
    select: 'single',
    responsive: true,
    paging: true
}

const tableUser = ref();
const tableBranch = ref();
const tableProduct = ref();

export default{
    setup(){
        const users = ref([]);
        const branches = ref([]);
        const products = ref([]);
        
        return {
            users,
            branches,
            products
        }
    },
    data(){
        return{
            active: 'branch',
            optionsTable: options,
            columnsBranch: [
                {
                    branches: 'nombreComercial',
                    title: 'Nombre comercial'
                },
                {
                    branches: 'direccion',
                    title: 'Dirección'
                },
                {
                    branches: 'horarioLunesViernes',
                    title: 'Horario de Lunes a Viernes'
                },
                {
                    branches: 'horarioFinDeSemana',
                    title: 'Horario de fin de semana'
                }
            ],
            columnsProduct: [
                {
                    products: 'nombre',
                    title: 'Nombre',
                },
                {
                    products: 'nombreCategoria',
                    title: 'Categoría'
                },
                {
                    products: 'descripcion',
                    title: 'Descripción',
                },
                {
                    products: 'existencias',
                    title: 'Existencias',
                },
                {
                    products: null,
                    title: 'Precio',
                    render: function(data, type, row, meta){
                        return (`$` + new Intl.NumberFormat('es-mx').format(data.precio));
                    }
                },
                {
                    products: 'codigoBarras',
                    title: 'Código de barras'
                }
            ],
            columnsUser: [
                {
                    users: 'nombreTipoUsuario',
                    title: 'Tipo de usuario'
                },
                {
                    users: 'nombreCompleto',
                    title: 'Nombre completo'
                },
                {
                    users: 'fechaIngreso',
                    title: 'Fecha de ingreso'
                },
                {
                    users: 'nombreSucursal',
                    title: 'Sucursal'
                }
            ]
        }
    },
    methods:{
        changeNav(nav){
            if(nav === 'user'){
                this.active = nav;
                this.showUsers();
            }else if(nav === 'branch'){
                this.active = nav;
                this.showBranches();
            }else if(nav === 'product'){
                this.active = nav;
                this.showProducts();
            }
        },
        showUsers(){
            const tableBranch = document.getElementById('table-branch');
            tableBranch.hidden = true;
            const tableProduct = document.getElementById('table-product');
            tableProduct.hidden = true;
            const tableUser = document.getElementById('table-user');
            tableUser.hidden = false;
        },
        showBranches(){
            const tableBranch = document.getElementById('table-branch');
            tableBranch.hidden = false;
            const tableProduct = document.getElementById('table-product');
            tableProduct.hidden = true;
            const tableUser = document.getElementById('table-user');
            tableUser.hidden = true;
        },
        showProducts(){
            const tableBranch = document.getElementById('table-branch');
            tableBranch.hidden = true;
            const tableProduct = document.getElementById('table-product');
            tableProduct.hidden = false;
            const tableUser = document.getElementById('table-user');
            tableUser.hidden = true;
        },
        salir(){
            this.$router.push('/');
        },
        getUserType(userType){
            //buscar en la tabla tipousuario
            //o colocar los ids y devolver el tipo de usuario
        },
        getBranch(userId){
            /*
                buscar en la tabla empleado-sucursal
                y una vez obtenido el id de la sucursal, volver a buscar en la tabl sucursal
                el return debe ser el nombre de la sucursal
            */
        },
        getCategory(categoryId){
            //buscar en la tabla categoria
            //el return es el nombre de la categoria
        },
        registerBranch(){
            this.$router.push('/Branch-Register-Form');
        },
        registerUser(){
            this.$router.push('/User-Register-Form');
        },
        registerProduct(){
            this.$router.push(''); //falta colocar ruta del registro del usuario
        }
    },
    mounted(){
        /*los resultados de axios deberian regresar listas
            guardar en users el resultado obtenido de axios con Usuarios 
            pero en cada objeto se necesita lo siguiente:
                agregar el atributo nombreTipoUsuario
                dentro de este atributo se le debe asignar el metodo getTypeUser

        guardar en branches el resultado obtenido de axios con Sucursales
            pero en cada objeto se necesita lo siguiente:
                agregar el atributo nombreSucursal
                dentro de este atributo se le debe asignar el metodo getBranch

        guardar en products el resultado obtenido de axios con Productos
            pero en cada objeto se necesita lo siguiente:
                agregar el atributo nombreCategoria
                dentro de este atributo se le debe asignar el metodo getCategory
        */
    },
    components: { CustomButton, CustomButton, DataTable, CustomNavBar }
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

.logoRG {
    position: relative;
    width: 100%;
    max-width: 300px;
    display: flex;
}

.BackgrountlogoRG {
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
.container {
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

form {
    margin-top: 20px;
}

.container-table{
    background-color: #ffff;
    padding: 20px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 25px;
    border-radius: 10px;
    box-shadow: 0px 5.63889px 22.5556px rgba(0, 0, 0, 0.05);
}

table{
    border-radius: 10px;
    padding: 5px; 
    color: #70768C !important;
    font-family: 'Poppins', sans-serif;
}

thead{
	border-radius: 16px;
}

table th {
    background-color: #F9F9F9 !important;
    color: #70768C;
}

.dataTables_filter{
    float: left;
    margin: 10px 10px 10px 0;
    font-family: 'Poppins', sans-serif;
}

.dataTables_filter input {
	padding-left: 10px;
	padding-right: 10px;
	padding-top: 4px;
	padding-bottom: 4px;
	border: 1px solid #c7c7c7;
	border-radius: 10px;
}

.paginate_button{
	border: 1px solid;
	padding-left: 10px;
	padding-right: 10px;
	padding-top: 5px;
	padding-bottom: 5px;
	margin: 2px;
	border-radius: 10px;
	cursor: pointer;
}

.paginate_button:hover{
	text-decoration: none;
}

.paginate_button.current{
	background-color: #1B59F8;
	color: white;
}

.paginate_button.disabled{
	color: gray;
	background-color: #F9F9F9;
}

.paginate_button.disabled:hover{
	text-decoration: none;
	cursor: default;
}

.sectionNav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;
}
</style>