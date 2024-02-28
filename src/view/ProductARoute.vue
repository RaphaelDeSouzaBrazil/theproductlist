<template>
    <div>
      <h1>Product A Route</h1>
      <ProductA />
    </div>
  </template>
  
  <script>
  import ProductA from '@/components/ProductA.vue'
  
  export default {
    name: 'ProductARoute',
    components: {
      ProductA
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

  