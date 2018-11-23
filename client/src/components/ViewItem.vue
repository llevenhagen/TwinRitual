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
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    const itemId = this.$store.state.route.params.itemId
    this.item = (await MerchService.show(itemId)).data
    console.log(this.item)
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
