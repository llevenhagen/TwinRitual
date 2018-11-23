<template>
  <panel title="Merch">
    <!-- IF USER IS ADMIN: -->
    <div slot="action">
      <router-link :to="{name: 'create-merch'}">
      <button>add Merch</button></router-link>
    </div>
    <div class="merch-container">
    <div class="single-merch"
    v-for="item in merch"
    :key="item.id">
        <img class="merch-image" :src="item.image"/>
        <h3
        @click="navigateTo({
          name: 'item',
          params: {
            itemId: item.id
            }
            })">{{item.name}}</h3>
        <h4>${{item.price}}</h4>
        <p>{{item.description}}</p>
    </div>
  </div>
  </panel>
</template>

<script>
import MerchService from '@/services/MerchService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      merch: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.merch = (await MerchService.index()).data
  }
}
</script>

<style scoped>
.merch-container {
  width: 100%;
  display: inline-flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.single-merch {
  margin: 2vw;
  height: 30vw;
  width: 30%;
  display: block;
  border: .2vw solid black;
  overflow: hidden;
}
.merch-image {
  width: 40%;
  max-height: 40%;
  margin: 0 auto;
}
</style>
