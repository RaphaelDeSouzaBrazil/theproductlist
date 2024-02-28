<template>
    <div>
      <h1>Product B Route</h1>
      <ProductB />
    </div>
  </template>
  
  <script>
  import ProductB from '@/components/ProductB.vue'
  
  export default {
    name: 'ProductBRoute',
    components: {
      ProductB
    }
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

  