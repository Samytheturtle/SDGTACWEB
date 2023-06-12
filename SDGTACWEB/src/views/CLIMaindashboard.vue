<template>
  <div class="dashboard">
    <h1>Bienvenido(a) {{ username }}</h1>
    <p>Tu contraseña es: {{ password }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  created() {
    this.username = this.$route.query.username;
    this.password = this.$route.query.password;
  },
};
</script>

<style scoped>
.dashboard {
  text-align: center;
  margin-top: 50px;
}
</style>
