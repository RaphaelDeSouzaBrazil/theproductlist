<template>
    <div>
      <h1>Home</h1>
      <ProductList />
    </div>
  </template>
  
  <script>
  import ProductList from '@/components/ProductList.vue'
   
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    components: {
      ProductList
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
