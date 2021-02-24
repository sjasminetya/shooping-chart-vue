<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Shooping</span>
            <span class="navbar-brand mb-0 h1">Cart ({{totalQty}})</span>
        </nav>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapGetters(['cart']),
    totalQty () {
      return this.cart.reduce((a, b) => a + b.qty, 0)
    }
  }
}
</script>

<style scoped>

</style>
