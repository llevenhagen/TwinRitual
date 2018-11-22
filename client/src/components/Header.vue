<template>
  <nav>
    <h2 @click="navigateTo({name: 'root'})">Twin Ritual</h2>
    <!-- <button>Browse</button> -->
    <button v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'login'})">Log In</button>
    <button v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'register'})">Sign Up</button>
  </nav>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
* {
  margin-top: 0;
  background: red;
  width: 100%;
  text-align: center;
}
nav {
  display: inline-flex;
  text-align: center;
}
button {
  border: .2vw solid black;
  width: 20vw;
  margin-left: 3vw;
}
</style>
