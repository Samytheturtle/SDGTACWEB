<template>
    <div>
        <button @click="showBranches">Sucursales</button>
        <button @click="showUsers">Usuarios</button>
        <button @click="showProducts">Productos</button>
        <button @click="salir">Salir</button>
    </div>
    <div class="container-table" id="table-branch">
        <DataTable 
            :options="optionsTable"
            class="table table-hover table-borderless"
            width="100%"
            ref="table"
            :data="branches"
            :columns="columnsBranch"
        />
    </div>
    <div class="container-table" id="table-user" hidden>
        <DataTable 
            :options="optionsTable"
            class="table table-hover table-borderless"
            width="100%"
            ref="table"
            :data="users"
            :columns="columnsUser"
        />
    </div>
    <div class="container-table" id="table-product" hidden>
        <DataTable 
            :options="optionsTable"
            class="table table-hover table-borderless"
            width="100%"
            ref="table"
            :data="products"
            :columns="columnsProduct"
        />
    </div>
</template>

<script>
import CustomButton from '../components/CustomButton.vue';
import DataTable from 'datatables.net-vue3';
import 'datatables.net-responsive';
import 'datatables.net-select';
import DataTablesCore from 'datatables.net';
import { ref } from 'vue';

DataTable.use(DataTablesCore);

const options = {
    language: {
        select: {
            rows: {
                _: "%d filas seleccionadas",
                1: "Una fila seleccionada"
            }
        },
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
    select: 'single',
    responsive: true,
    paging: true
}

const table = ref();

export default{
    setup(){
        const users = ref([]);
        const branches = ref([]);
        const products = ref([]);
        const columnsBranch = [
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
        ];

        const columnsUser = [
            {
                users: 'tipoUsuario',
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
                users: 'idSucursal',
                title: 'Sucursal'
            }
        ];

        const columnsProduct = [
            {
                products: 'nombre',
                title: 'Nombre',
            },
            {
                products: 'idCategoria',
                title: 'Categoría',
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
                products: 'precio',
                title: 'Precio',
            },
            {
                products: 'codigoBarras',
                title: 'Código de barras'
            }
        ]
        return{
            users,
            branches,
            products,
            columnsBranch,
            columnsUser,
            columnsProduct
        }
    },
    data(){
        return{
            optionsTable: options
        }
    },
    methods:{
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
        },
        getBranch(userId){
            //buscar en la tabla empleado-sucursal
        },
        getCategory(categoryId){
            //buscar en la tabla categoria
        }
    },
    components: { CustomButton, CustomButton, DataTable }
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

button {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: #83a4d7;
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