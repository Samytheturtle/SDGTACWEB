<template>
  <div class="container">
    <div class="header">
      <img src="../assets/logo_cuevas.png" alt="Logo de la empresa" class="logo" />
      <div class="header-buttons">
        <button @click="addDeliveryAddress">Agregar Dirección</button>
        <button @click="addPaymentMethod">Agregar Método de Pago</button>
        <button @click="logout">Salir</button>
      </div>
    </div>
    <div class="content">
      <div class="tabs">
        <div
          class="tab"
          :class="{ active: activeTab === 'catalog' }"
          @click="changeTab('catalog')"
        >
          Consultar Catálogo de Productos
        </div>
        <div
          class="tab"
          :class="{ active: activeTab === 'cart' }"
          @click="changeTab('cart')"
        >
          Consultar Carrito de Compras
        </div>
        <div
          class="tab"
          :class="{ active: activeTab === 'orders' }"
          @click="changeTab('orders')"
        >
          Visualizar Lista de Pedidos
        </div>
      </div>
      <div class="tab-content">
        <template v-if="activeTab === 'catalog'">
          <h2>Consultar Catálogo de Productos</h2>
          <!-- Aquí puedes mostrar el catálogo de productos -->
        </template>
        <template v-if="activeTab === 'cart'">
          <h2>Consultar Carrito de Compras</h2>
          <!-- Aquí puedes mostrar el contenido del carrito de compras -->
        </template>
        <template v-if="activeTab === 'orders'">
          <h2>Visualizar Lista de Pedidos</h2>
          <!-- Aquí puedes mostrar la lista de pedidos -->
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'catalog', // Tab activo por defecto
    };
  },
  methods: {
    changeTab(tab) {
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
      this.$router.push('/login');
    },
  },
};
</script>

<style>
.container {
  font-family: Arial, sans-serif;
  background-color: #f7e1e1;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url("../assets/BackgrownLogin.jpg");
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.logo {
  width: 150px;
}

.header-buttons {
  display: flex;
}

.header-buttons button {
  margin-left: 10px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  background-color: #8b7a5e;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s;
}

.header-buttons button:hover {
  background-color: #ffefd3;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tabs {
  display: flex;
  margin-bottom: 20px;
}

.tab {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
  transition: 0.3s;
}

.tab:hover {
  color: #42b983;
}

.tab.active {
  color: #42b983;
  border-bottom: 2px solid #42b983;
}

.tab-content {
  text-align: center;
}

h2 {
  color: #2c3e50;
}
</style>
