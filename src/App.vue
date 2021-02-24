<template>
  <div id="app">
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <ProductList />
        </div>
        <div class="col-lg-4">
          <Cart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
export default {
  name: 'App',
  components: {
    Header,
    ProductList,
    Cart
  }
}
</script>

<style lang="scss">

</style>
