<template>
  <div class="containerCLIMDB">
    <div class="headerCLIMDB">
      <img src="../assets/logo_cuevas.png" alt="Logo de la empresa" class="logoCLI" />
      <div class="header-buttonsCLIMDB">
        <button @click="logout">Salir</button>
      </div>
    </div>

    <div class="contentCLIMDB">
      <div class="tabs1">
        <div
          class="tab"
          :class="{ active: activeTab === 'orders' }"
          @click="changeTab('orders')"
        >
          Consultar Pedidos en Aprobación
        </div>
        <div
          class="tab"
          :class="{ active: activeTab === 'pendingOrder' }"
          @click="changeTab('pendingOrder')"
        >
          Pedidos para mandar a bodega
        </div>
        <div
          class="tab"
          :class="{ active: activeTab === 'sendWarehouse' }"
          @click="changeTab('sendWarehouse')"
        >
          Asignar Repartidor
        </div>
      </div>
      <div class="tab-contentCLIMDB">
        <template v-if="activeTab === 'catalogo'">
          <h2>Consultar Pedido en Aprobación</h2>
          <!-- Aquí puedes mostrar el catálogo de productos -->
        </template>
        <template v-if="activeTab === 'carrito'">
          <h2>Pedidos para mandar a bodega</h2>
          <!-- Aquí puedes mostrar el contenido del carrito de compras -->
        </template>
        <template v-if="activeTab === 'pedidos'">
          <h2>Asignar Repartidor</h2>
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
    logout() {
      // Lógica para cerrar sesión
      // Redirige al cliente a la página de inicio de sesión
      this.$router.push('/');
    },
  },
};
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
.containerCLIMDB {
  width: 100%;
  max-width: 600px;
  padding: 20px;
}
.headerCLIMDB {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.logoCLI {
  width: 100%;
  max-width: 200px;
}

.header-buttonsCLIMDB button {
  margin-left: 10px;
}

.contentCLIMDB {
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
/*.contentCLIMDB {
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}*/

.tabs1 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.tab {
  padding: 10px 20px;
  background-color: #8b7a5e;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

.tab.active {
  background-color: #ffefd3;
}

.tab-contentCLIMDB h2 {
  margin-bottom: 10px;
}

</style>