<template>
  <panel title="item data">
    <div class="item-container">
      <img :src="item.image"/>
      <h1>{{item.name}}</h1>
      <h2>${{item.price}}</h2>
      <h3 class="in-stock" v-if="item.inStock">In Stock</h3>
      <h3 class="in-stock" v-if="!item.inStock">Out of Stock</h3>
      <h3>{{item.description}}</h3>
      <button v-if="isUserLoggedIn && !inCart"
      @click="addToCart">Add To Cart</button>
      <button v-if="isUserLoggedIn && inCart" @click="removeFromCart">Remove From Cart</button>
      <button @click="navigateTo({name: 'merch'})">Back to Merch</button>
    </div>
    <div class="admin-buttons">
      <button @click="navigateTo({name: 'edit-item'})" v-if="isUserLoggedIn && this.$store.state.user.admin">Edit</button>
      <button @click="deleteItem(item)" v-if="isUserLoggedIn && this.$store.state.user.admin">Delete Item</button>
    </div>
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
    // console.log(isUserLoggedIn, this.isInCart)
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
        this.inCart = null
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
.item-container {
  background: white;
  width: 60%;
  height: 71vw;
  margin: 4vw auto;
  color: black;
  padding-bottom: 2vw;
  border-radius: .5vw;
}
h1 {
  text-transform: uppercase;
  width: 80%;
  color: black;
  border-bottom: .1vw solid #55B4DD;
}
h2 {
  font-size: 3vw;
  color: black;
}
h3 {
  font-size: 2vw;
}
img {
  margin-top: 5vw;
  border-radius: .5vw;
  max-width: 30vw;
  max-height: 30vw;
}
button {
  width: 17vw;
  color: #F00404;
  background: white;
  border-radius: 1vw;
  padding: .7vw;
  font-size: 1.7vw;
}
button:hover {
  background: white;
  color: #55B4DD;
  transition: .1s ease-in-out;
  cursor: pointer;
}
</style>
