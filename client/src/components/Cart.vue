<template>
  <panel title="Your Cart">
    <div slot="action">
      <div v-for="item in cart" :key="item.id">
        <p>this is an item</p>
      </div>
    </div>
  </panel>
</template>

<script>
import { mapState } from 'vuex'
import CartService from '@/services/CartService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      cart: null
    }
  },
  async mounted () {
    this.user = this.$store.state.user
    const userId = this.user.id
    console.log(userId)
    this.cart = (await CartService.cart(userId)).data
    console.log(this.cart.id)
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  }
}
</script>

<style scoped>

</style>
