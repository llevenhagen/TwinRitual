<template>
  <panel title="item data">
    <div>
      <img :src="item.image"/>
      <h1>{{item.name}}</h1>
      <h2>{{item.price}}</h2>
      <h3>{{item.description}}</h3>
      <!-- <button @click="(() => {
        this.$store.dispatch('incrementCart')
      })">Add to Cart</button> -->
      <button v-if="isUserLoggedIn && !isInCart"
      @click="addToCart">Add To Cart</button>
      <button v-if="isUserLoggedIn && isInCart" @click="removeFromCart">Remove From Cart</button>
    </div>
    <button @click="navigateTo({name: 'merch'})">Back to Merch</button>
    <button @click="navigateTo({name: 'edit-item'})" v-if="isUserLoggedIn && this.$store.state.user.admin">Edit</button>
    <button @click="deleteItem(item)" v-if="isUserLoggedIn && this.$store.state.user.admin">Delete Item</button>
  </panel>
</template>

<script>
import { mapState } from 'vuex'
import MerchService from '@/services/MerchService'
import CartService from '@/services/CartService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      item: ' ',
      isInCart: false
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    const itemId = this.$store.state.route.params.itemId
    this.item = (await MerchService.show(itemId)).data
    console.log(this.item)
    const cart = (await CartService.show({
      merchId: this.item.id,
      userId: this.$store.state.user.id
    })).data
    this.isInCart = !!cart
    console.log('cart', this.isInCart)
  },
  methods: {
    addToCart () {
      console.log('add to cart')
    },
    removeFromCart () {

    },
    navigateTo (route) {
      this.$router.push(route)
    },
    async deleteItem (item) {
      console.log(this.item.name)
      try {
        await MerchService.delete(item)
        this.$router.push({
          name: 'merch'
        })
      } catch (err) {
        console.log(err)
        console.log('delete item')
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scope>
img {
  width: 50vw;
  max-height: 50vw;
}
</style>
