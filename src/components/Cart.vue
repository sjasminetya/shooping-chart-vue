<template>
    <div>
        <ul class="list-group mt-5">
            <div class="alert alert-secondary" v-if="!cart.length">
                <h5>No order</h5>
            </div>
            <div v-if="orderPlaced" class="alert alert-success mt-3" role="alert">
                success order!
                <button @click="() => (orderPlaced = false)" type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <li class="list-group-item" v-for="item in cart" :key="item.id">
                <button @click="removeItem(item.id)" type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="media">
                    <img width="80px" :src="item.imgUrl" class="mr-3" :alt="item.title">
                    <div class="media-body">
                        <h5 class="mt-0">{{item.title}}</h5>
                        <button class="btn-qty btn btn-sm btn-secondary" @click="reduceQty(item.id)">-</button>
                        x {{item.qty}}
                        <button class="btn-qty btn btn-sm btn-secondary" @click="addQty(item.id)">+</button>
                    </div>
                </div>
            </li>
        </ul>
        <button @click="checkout" class="btn-checkout btn btn-lg btn-block btn-success" v-if="cart.length" :disabled="isProcessing">
            <span v-if="!isProcessing">($ {{totalPrice}})</span>
            <div v-else class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {
      isProcessing: false,
      orderPlaced: false
    }
  },
  methods: {
    ...mapActions(['addQty', 'reduceQty', 'removeItem', 'emptyCart']),
    checkout () {
      this.isProcessing = true
      setTimeout(() => {
        this.orderPlaced = true
        this.isProcessing = false
        this.emptyCart()
      }, 1000)
    }
  },
  computed: {
    ...mapGetters(['cart']),
    totalPrice () {
      return this.cart.reduce((a, b) => a + b.qty * b.price, 0)
    }
  }
}
</script>

<style scoped>
.btn-qty {
    border-radius: 50%;
    width: 30px;
}

.media {
    width: 90%;
}

.media-body {
    text-align: left;
}

.btn-checkout {
    margin-top: 20px;
}
</style>
