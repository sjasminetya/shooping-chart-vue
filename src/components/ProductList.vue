<template>
<div class="container">
    <div class="row">
        <div class="card mt-5 ml-3" style="width: 16rem;" v-for="item in products" :key="item.id">
            <img :src="item.imgUrl" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{item.title}}</h5>
                <p class="card-text">{{item.price}}</p>
                <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import products from '../mock/products.json'
export default {
  name: 'ProductList',
  data () {
    return {
      products
    }
  }
}
</script>

<style scoped>
</style>
