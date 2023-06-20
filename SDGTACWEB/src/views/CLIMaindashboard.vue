<template>
  <div>
    <div class="headerCLIMDB">
      <img src="../assets/logo_cuevas.png" alt="Logo de la empresa" class="logoCLI" />
      <div class="header-buttonsCLIMDB">
        <div class="header-info">
          <label>{{ userName }} - {{ userType }}</label>
        </div>
        <button @click="addDeliveryAddress">Agregar Dirección</button>
        <button @click="addPaymentMethod">Agregar Método de Pago</button>
        <button @click="logout">Salir</button>
      </div>
    </div>
    <div class="container">
      <div class="cart-box">
          <img src="../assets/cart_icon.png" alt="Icono de carrito" class="cart-icon" />
          <label>{{ cartCount }}</label>
      </div>
      <div class="tabs1">
        <div
          class="tab"
          :class="{ active: activeTab === 'catalogo' }"
          @click="changeTab('catalogo')"
        >
          Consultar Catálogo de Productos
        </div>
        <div
          class="tab"
          :class="{ active: activeTab === 'carrito' }"
          @click="changeTab('carrito')"
        >
          Consultar Carrito de Compras
        </div>
        <div
          class="tab"
          :class="{ active: activeTab === 'pedidos' }"
          @click="changeTab('pedidos')"
        >
          Visualizar Lista de Pedidos
        </div>        
      </div>
    </div>
    <div class="tab-content">
        <template v-if="activeTab === 'catalogo'">
          <h2>Consultar Catálogo de Productos</h2>
          <div class="category-list">
            <div v-for="category in categories" :key="category.id" class="category-card" @click="generateProducts(category.id)">
              <img :src="category.image" alt="Imagen del categoria" class="category-image" />
              <h3>{{ category.name }}</h3>
            </div>
          </div>
          <div class="product-list">
            <div v-for="product in catalogProducts" :key="product.id" class="product-card">
              <img :src="product.image" alt="Imagen del producto" class="product-image" />
              <h3>{{ product.name }}</h3>
              <p class="product-price">{{ product.price }}</p>
              <p>{{ product.description }}</p>
              <button @click="addToCart">Agregar al carrito</button> 
            </div>
          </div>
        </template>
        <template v-if="activeTab === 'carrito'">
          <h2>Lista del carrito de compras</h2>
          <br />
          <div class="carrito-info">
            <div class="carrito-details">
              <label>Cantidad de artículos: {{ cartQuantity }}</label>
              <label>Total a pagar: ${{ cartTotal.toFixed(2) }}</label>
            </div>
            
            <div class="carrito-buttons">
              <button @click="payCart">Pagar</button>
              <button @click="deleteCart">Borrar Carrito</button>
            </div>
            <div class="product-list-car">
              <div v-for="productCar in cartProducts" :key="productCar.id" class="product-car-card" >
                <img :src="productCar.image" alt="Imagen del producto" class="product-car-image" />
                <h3>{{ productCar.name }}</h3>
                <p class="product-price">{{ productCar.price }}</p>
                <p>{{ productCar.description }}</p>
                <p>Cantidad: {{ productCar.quantity }}</p>
                <button @click="removeFromCart(productCar)">Eliminar</button>
              </div>
          </div>          
          </div>
        </template>
        <template v-if="activeTab === 'pedidos'">
          <h2>Visualizar Lista de Pedidos</h2>

 
          <div class="product-list-historial">
            <div v-for="productHistorial in catalogProducts" :key="productHistorial.id" class="product-card-historial">
              <img :src="productHistorial.image" alt="Imagen del producto" class="product-image-historial" />
              <h3>{{ productHistorial.name }}</h3>
              <p class="product-image-historial">{{ productHistorial.price }}</p>
              <p>{{ productHistorial.description }}</p>
            </div>
          </div>

        </template>
    </div>    

  </div>
</template>

<script>
import { ref } from 'vue'
import {allcategorys, categoryByid, getallproductos} from '../viewModel/CategoriaViewModel';

export default {
  data() {
    return {
      userName: "Nombre de usuario",
      userType: "Tipo de usuario",
      cartCount: 0,
      cartQuantity: 0,
      cartTotal: 0.0,
      activeTab: "catalogo",
      catalogProducts: [],
      categories: [],
      cartProducts: [],
      historyProducts: [],
      userId: "",
      userToken: "",
      respuestaCategoria:[],
      respuestaCategoriabyid:[],
      respuestaallProductos:[],
    };
  },async mounted() {
  // Ejemplo de llamada al método para generar 5 tarjetas
  this.userId= this.$route.params.id;
  this.userToken = this.$route.params.token;
  
  console.log(this.userId,this.userToken);
  await this.funcion1();
  await this.funcion3();
  this.catalogProducts = this.createProductCards();
  this.categories= this.createCategoryCards();
  this.cartProducts= this.createProductCardsCarrito();
  },
  methods: {
    changeTab(tab) {
      if (tab === "carrito") {
        this.generateCarProduct();
      }else if(tab ==="catalogo"){
        this.catalogProducts = this.createProductCards();
        this.categories= this.createCategoryCards();
      }else if(tab ==="pedidos"){
        this.historyProducts = this.createHistorialCards();
      }

      this.activeTab = tab;
    },
    addDeliveryAddress() {
      // Lógica para agregar dirección de entrega
    },
    addPaymentMethod() {
      // Lógica para agregar método de pago
    },
    logout() {
      // Lógica para cerrar sesión
      // Redirige al cliente a la página de inicio de sesión
      this.$router.push("/");
    },
    payCart() {
      alert("Carrito pagado correctamente");
      this.cartQuantity = 0;
      this.cartTotal = 0;
    },
    deleteCart() {
      alert("Carrito borrado correctamente");
      this.cartQuantity = 0;
      this.cartTotal = 0;
      this.cartCount= 0;
      this.cartProducts = [];
    },createProductCards(quantity) {
      console.log(this.respuestaallProductos.length+"CACA");
      const countProducts=5;
      const cards = [];
      for (let i = 0; i < this.respuestaallProductos.length; i++) {
        const product = {
          id: this.respuestaallProductos[i].idProducto,
          name: `Producto ${this.respuestaallProductos[i].nombre}`,
          image: this.respuestaallProductos[i].imagenProducto,
          price: `$${this.respuestaallProductos[i].precio}`,
          description: `Descripción del Producto ${this.respuestaallProductos[i].descripcion}`,
        };
        cards.push(product);
      }
      return cards;
    },createCategoryCards(quantity) {
      //const promise = allcategorys(token);
      //await promise.then(array => respuesta = array);
      console.log(this.respuestaCategoria.length);
      const Nombre=this.respuestaCategoria[0].nombreCategoria;
      console.log(Nombre);
     // const countProducts=5;
      const cards = [];
      for (let i = 0; i < this.respuestaCategoria.length; i++) {
        const category = {
          id: this.respuestaCategoria[i].idCategoria,
          name: `Categoria: ${this.respuestaCategoria[i].nombreCategoria}`,
          image: this.respuestaCategoria[i].imagenCategoria,
        };
        console.log(this.respuestaCategoria[i].idCategoria);
        cards.push(category);
      }
      return cards;
    },async funcion1(){
      
      const promise = allcategorys(this.userToken);
      await promise.then(array => this.respuestaCategoria = array);
      console.log(this.respuestaCategoria[0].nombreCategoria);
      
    },async funcion2(categoryId){
      console.log(this.userToken);
      const promise = categoryByid(categoryId,this.userToken);
      await promise.then(array => this.respuestaCategoriabyid = array);
      console.log(promise);


    },async funcion3(){
      console.log(this.userToken);
      const promise = getallproductos(this.userToken);
      await promise.then(array => this.respuestaallProductos = array);
      console.log(promise);
      console.log(this.respuestaallProductos.length);

    },createProductCardsCarrito(quantity) {
      const countRecobery=10;
      this.cartCount =countRecobery;
      const cards = [];
      for (let i = 0; i < this.cartCount; i++) {
        const productCar = {
          id: i + 1,
          name: `Producto ${i + 1}`,
          image: `../assets/product${i + 1}.png`,
          price: `$${(Math.random() * 50).toFixed(2)}`,
          description: `Descripción del Producto ${i + 1}`,
          quantity: i,
        };
        cards.push(productCar);
      }
      return cards;
    },createHistorialCards(quantity) {
      const countProducts=5;
      const cards = [];
      for (let i = 0; i < countProducts; i++) {
        const productHistorial = {
          id: i + 1,
          name: `Producto ${i + 1}`,
          image: `../assets/product${i + 1}.png`,
          price: `$${(Math.random() * 50).toFixed(2)}`,
          description: `Descripción del Producto ${i + 1}`,
        };
        cards.push(productHistorial);
      }
      return cards;
    },addToCart() {
      this.cartCount += 1; // Incrementar el valor de cartCount en 1
      console.log(this.cartCount);

    }, async generateProducts(categoryId) {
      const minQuantity = 5;
      const maxQuantity = 20;
      const quantity = Math.floor(Math.random() * (maxQuantity - minQuantity + 1) + minQuantity);
      
      const selectedCategory = this.categories.find((category) => category.id === categoryId);
      console.log("CACA");
      console.log(selectedCategory.id);
      await this.funcion2(selectedCategory.id);
      if (selectedCategory) {
        const newProducts = [];
        for (let i = 0; i < this.respuestaCategoriabyid.length; i++) {
          const product = {
            id: this.respuestaCategoriabyid[i].idProducto,
            name: `Producto ${this.respuestaCategoriabyid[i].nombre}`,
            image: `../assets/product${i + 1}.png`,
            price: this.respuestaCategoriabyid[i].precio,
            description: `Descripción del Producto ${this.respuestaCategoriabyid[i].descripcion}`,
          };
          newProducts.push(product);
        }

        this.catalogProducts = newProducts;
        this.selectedCategory = selectedCategory;
        
        console.log(this.selectedCategory = selectedCategory);
        console.log( this.catalogProducts = newProducts);
      }
    },generateCarProduct() {
        console.log(this.cartCount);
        const newProductCar = [];
        for (let i = 0; i < this.cartCount; i++) {
          const productCar = {
            id: i + 1,
            name: `Producto ${i + 1}`,
            image: `../assets/product${i + 1}.png`,
            price: `$${(Math.random() * 50).toFixed(2)}`,
            description: `Descripción del Producto ${i + 1}`,
            quantity: i,
          };
          newProductCar.push(productCar);
        }
        this.cartProducts = newProductCar;
        console.log(this.cartProducts = newProductCar);
    },
  },
};
</script>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7e1e1;
  overflow-y: auto;
}


.headerCLIMDB {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  transform: translateX(50%);
  
}

.logoCLI {
  width: 100%;
  max-width: 200px;
}

.header-buttonsCLIMDB button  {
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
.carrito-buttons button{
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

.cart-box {
  display: flex;
  align-items: center;
}
.cart-icon {
  width: 25px;
  height: 25px;
  margin-right: 5px;
}
.container{
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  transform: translateX(50%);
}
.tabs1 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
}
.tab {
  flex-grow: 1;
  padding: 10px 20px;
  background-color: #9ba1a1 ;
  color: #000000;
  border-radius: 5px;
  cursor: pointer;
}
.tab.active {
  background-color: #eff7f6;
}
.tab-content {
  margin-top: 10px;
  background-color: #ffffff;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateX(50%);
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-height: 400px; /* Ajusta la altura máxima deseada */
  overflow-y: auto;
  border: 3px solid #f7e1e1;
}

.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
}

.product-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
}

.product-price {
  font-weight: bold;
  margin-bottom: 5px;
}
.product-card button{
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
.category-list {
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap:10px;
  max-height: 70px; 
  overflow-x: auto;
  border: 4px solid rgb(175, 243, 252);
}

.category-card {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  cursor: pointer;
  width: 270px;
}

.category-image {
  width: 100px;
  height: 50px;
  object-fit: cover;
  margin-bottom: 10px;
}
.category-card:hover {
  background-color: #e0e0e0;
}

.product-list-car {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-height: 400px; /* Ajusta la altura máxima deseada */
  overflow-y: auto;
  border: 3px solid #f7e1e1;
}

.product-car-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
}

.product-car-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
}

.product-price {
  font-weight: bold;
  margin-bottom: 5px;
}
.product-car-card button{
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

.product-list-historial {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-height: 400px; /* Ajusta la altura máxima deseada */
  overflow-y: auto;
  border: 3px solid #f7e1e1;
}

.product-card-historial {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
}

.product-image-historial {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
}

.product-price-historial {
  font-weight: bold;
  margin-bottom: 5px;
}
.product-card-historial button{
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
</style>