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
      <button v-if="isUserLoggedIn && !inCart"
      @click="addToCart">Add To Cart</button>
      <button v-if="isUserLoggedIn && inCart" @click="removeFromCart">Remove From Cart</button>
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
      inCart: null
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
    console.log(itemId)
    this.inCart = (await CartService.index({
      merchId: itemId,
      userId: this.$store.state.user.id
    })).data
    // console.log(cart, this.isInCart)
  },
  methods: {
    async addToCart () {
      const itemId = this.$store.state.route.params.itemId
      this.item = (await MerchService.show(itemId)).data
      console.log(itemId, this.item)
      try {
        this.inCart = (await CartService.post({
          merchId: itemId,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async removeFromCart () {
      const itemId = this.$store.state.route.params.itemId
      const userId = this.$store.state.user.id
      console.log(itemId, userId)
      try {
        await CartService.delete(itemId, userId)
        // this.inCart = null
      } catch (err) {
        console.log(err)
      }
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
