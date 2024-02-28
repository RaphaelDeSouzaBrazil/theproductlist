<template>
  <img alt="Vue logo" src="./assets/1697209937794.png">
  <HelloWorld msg="This component changes"/>
  <ProductA/>
  <ProductB/>
  <ProductC/>
</template>

<script>
import HelloWorld from './components/ProductList.vue'
import ProductA from './components/ProductA.vue'
import ProductB from './components/ProductB.vue'
import ProductC from './components/ProductC.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ProductA, 
    ProductB,
    ProductC,
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
