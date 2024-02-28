<template>
    <div>
      <h1>Product C Route</h1>
      <ProductC />
    </div>
  </template>
  
  <script>
  import ProductC from '@/components/ProductC.vue'
  
  export default {
    name: 'ProductCRoute',
    components: {
      ProductC
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

  