<template>
    <div>
        <ul class="list-group mt-5">
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
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Cart',
  methods: {
    ...mapActions(['addQty', 'reduceQty', 'removeItem'])
  },
  computed: {
    ...mapGetters(['cart'])
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
</style>
