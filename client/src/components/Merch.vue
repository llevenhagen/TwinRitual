<template>
  <panel>
    <!-- IF USER IS ADMIN: -->
    <div slot="action">
      <h1>Merch</h1>
      <router-link :to="{name: 'create-merch'}">
      <button v-if="isUserLoggedIn && this.$store.state.user.admin">add Merch</button></router-link>
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
    </div>
  </div>
  </panel>
</template>

<script>
import { mapState } from 'vuex'
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
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    this.merch = (await MerchService.index()).data
  }
}
</script>

<style scoped>
* {
  background: black;
}
h1 {
  font-size: 3.5vw;
  font-style: italic;
  letter-spacing: 1vw;
  color: white;
  border-bottom: .1vw solid #55B4DD;
  width: 20%;
  margin: 2vw auto 1vw;
  line-height: 125%;
}
button {
  width: 17vw;
  color: #55B4DD;
  background: white;
  border-radius: 1vw;
  padding: .7vw;
  font-size: 1.7vw;
}
button:hover {
  background: #55B4DD;
  color: white;
  transition: .1s ease-in-out;
  cursor: pointer;
}
.merch-container {
  width: 90%;
  display: inline-flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: white;
  border-radius: 1vw;
  margin-bottom: 5vw;
}
.single-merch {
  margin: 4vw auto 5vw;
  height: 27vw;
  width: 23%;
  display: block;
  overflow: hidden;
  border: .04vw solid lightgrey;
  background: ghostwhite;
  border-radius: 18%;
  color: black;
  padding: 2vw;
  font-size: 2vw;
}
h3 {
  font-family: helvetica, sans-serif;
  text-decoration: underline;
  background: ghostwhite;
}
h4 {
  background: ghostwhite;
}
h3:hover {
  color: #F00404;
  cursor: pointer;
}
.merch-image {
  width: 70%;
  max-height: 60%;
  margin: 0 auto;
  border-radius: 2vw;
  border: .3vw solid #55B4DD;
}
</style>
