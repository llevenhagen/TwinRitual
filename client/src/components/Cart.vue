<template>
  <div class="black-background">
    <div class="cart-container">
      <h1>Your Cart</h1>
      <div class="single-cart-item" v-for="item in cart" :key="item.id">
        <div class="cart-img-div">
          <img @click="navigateTo({
            name: 'item',
            params: {
              itemId: item.id
              }
              })" class="cart-image" :src="item.image"/>
        </div>
        <div class="cart-item-name">
          <h3>{{item.name}}</h3>
        </div>
        <div class="cart-item-price">
          <h3>${{item.price}}</h3>
        </div>
      </div>
      <p>Total: ${{cartTotal}}.00</p>
      <button>Checkout</button>
    </div>
  </div>
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
    console.log(this.cart[0].id)
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ]),
    cartTotal: function () {
      let sum = 0
      for (let i = 0; i < this.cart.length; i++) {
        let price = this.cart[i].price
        let number = +price
        sum += number
      }
      return sum
    }
  }
}
</script>

<style scoped>
.black-background {
  padding-top: 2vw;
}
h1 {
  margin-top: 0;
}
.cart-container {
  width: 60%;
  margin: 20vw auto;
  display: block;
  padding: 4vw;
  background: white;
  margin: auto;
}
.cart-container img {
  max-height: 6vw;
  max-width: 6vw;
  margin: auto;
}
.cart-container img:hover {
  cursor: pointer;
}
.single-cart-item {
  font-size: 1vw;
  border: .1vw solid black;
  display: inline-flex;
  justify-content: space-between;
  width: 90%;
  height: 6vw;
  margin: 1vw auto;
  padding: 2vw;
}
h3 {
  color: black;
  font-size: 1.5vw;
}
p {
  color: black;
  font-size: 2vw;
  text-align: right;
  margin-top: 1vw;
}
</style>
