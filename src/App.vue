<template>
  <div id="app">
    <Header />
    <div>
      <ProductList />
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import ProductList from './components/ProductList'
export default {
  name: 'App',
  components: {
    Header,
    ProductList
  }
}
</script>

<style lang="scss">

</style>
