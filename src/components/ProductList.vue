<template>
<div class="container">
    <div class="row">
        <div class="card mt-5 mb-3" style="width: 200px; height: 350px;" v-for="item in products" :key="item.id">
            <img :src="item.imgUrl" class="card-img-top img" :alt="item.title">
            <div class="card-body">
                <h5 class="card-title">{{item.title}}</h5>
                <p class="card-text">$ {{item.price}}</p>
                <a @click="addToCart(item)" class="btn btn-primary btn-bottom">Add to cart</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ProductList',
  methods: {
    ...mapActions(['getProducts', 'addToCart'])
  },
  mounted () {
    this.getProducts()
  },
  computed: {
    ...mapGetters(['products'])
  }
}
</script>

<style scoped>
.card {
    margin-left: 10px;
    padding: 20px;
}

.btn-bottom {
    position: absolute;
    bottom: 0;
    margin-bottom: 20px;
}
</style>
