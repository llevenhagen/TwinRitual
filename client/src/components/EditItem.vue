<template>
  <div class="create-container">
    <panel title="Merch Metadata">
      <form>
        <input
        type="text"
        name="name"
        v-model="item.name"
        autocomplete="off"
        placeholder="name"/>
        <input
        type="text"
        name="image"
        v-model="item.image"
        autocomplete="off"
        placeholder="image"/>
        <input
        type="decimal"
        name="price"
        v-model="item.price"
        autocomplete="off"
        placeholder="price"/>
        <input
        type="text"
        name="description"
        v-model="item.description"
        autocomplete="off"
        placeholder="description"/>
        In Stock:
        <input
        type="checkbox"
        name="inStock"
        autocomplete="off"
        v-model="item.inStock"/>
        <button @click="save">
        Save Item</button>
      </form>
    </panel>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import MerchService from '@/services/MerchService'

export default {
  data () {
    return {
      itemId: null,
      item: {
        name: null,
        image: null,
        price: null,
        description: null,
        inStock: null
      }
    }
  },
  async mounted () {
    console.log('hello')
    try {
      const itemId = this.$store.state.route.params.itemId
      this.item = (await MerchService.show(itemId)).data
    } catch (err) {
      console.log(err)
    }
  },
  components: {
    Panel
  },
  methods: {
    async save () {
      console.log(this.item.id, this.item)
      const itemId = this.$store.state.route.params.itemId
      console.log(itemId)
      // console.log(this.item.name)
      try {
        await MerchService.put(this.item)
        this.$router.push({
          name: 'merch',
          params: {
            itemId: itemId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scope>
.create-container {
  text-align: center;
  margin: auto;
}
form {
  display: block;
  text-align: center;
  margin: auto;
}
input {
  display: block;
  margin: 4vw auto;
}
</style>
