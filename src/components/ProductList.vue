<template>
  <div>
    <h2>Product List</h2>
    <router-link to="/product-a">Product A</router-link>
    <router-link to="/product-b">Product B</router-link>
    <router-link to="/product-c">Product C</router-link>
  </div>
</template>

<script>
export default {
  name: 'ProductList'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

