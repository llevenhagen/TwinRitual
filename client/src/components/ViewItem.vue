<template>
  <panel title="item data">
    <div>
      <img :src="item.image"/>
      <h1>{{item.name}}</h1>
      <h2>{{item.price}}</h2>
      <h3>{{item.description}}</h3>
      <a href="#">Add to Cart</a>
    </div>
    <button @click="navigateTo({name: 'merch'})">Back to Merch</button>
    <button @click="navigateTo({name: 'edit-item'})">Edit</button>
    <button @click="deleteItem(item)">Delete Item</button>
  </panel>
</template>

<script>
import MerchService from '@/services/MerchService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      item: ' '
    }
  },
  async mounted () {
    const itemId = this.$store.state.route.params.itemId
    this.item = (await MerchService.show(itemId)).data
    console.log(this.item)
  },
  methods: {
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
