<template>
  <div class="header">
    <h1 @click="navigateTo({name: 'root'})">Twin Ritual</h1>
    <nav>
      <button @click="navigateTo({name: 'merch'})">Merch</button>
      <button v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'login'})">Log In</button>
      <button v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'register'})">Sign Up</button>
      <button v-if="$store.state.isUserLoggedIn" @click='logout'>Log Out</button>
      <button @click="navigateTo({name: 'cart'})"><img class="cart-image" src="../images/cart-icon.png"/></button>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Bungee|Bungee+Inline|Diplomata|Diplomata+SC|Faster+One|Goblin+One|Jacques+Francois+Shadow|Josefin+Sans:600,700i|Permanent+Marker|Vast+Shadow');
* {
  margin-top: 0;
  background: #62BCE3;
  width: 100%;
  text-align: center;
}
h1 {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 8vw;
  letter-spacing: 3vw;
  color: #F00404;
  border-bottom: .05vw solid white;
  margin: auto;
  padding-top: 1vw;
  line-height: 120%;
  font-style: italic;
}
nav {
  display: inline-flex;
  text-align: center;
  background: white;
  border-bottom: .2vw solid white;
  margin: 0 auto 1vw;
}
header {
  display: inline-flex;
  justify-content: space-around;
}
h1:hover {
  color: white;
  cursor: pointer;
  transition: .1s ease-in-out;
}
button {
  font-family: 'Faster One', cursive;
  font-size: 2.2vw;
  letter-spacing: .5vw;
  color: #FF0D64;
  border: .05vw solid white;
  width: 23%;
  padding: .5vw;
  border-radius: .2vw;
  margin-left: 3vw;
  background: white;
  margin: .5vw auto;
}
button:hover {
  background: #FF0D64;
  color: white;
  transition: .1s ease-in-out;
  cursor: pointer;
}
.cart-image {
  background: white;
  height: 3vw;
  width: 4vw;
}

</style>
<!-- font-family: 'Permanent Marker', cursive;
font-family: 'Bungee Inline', cursive;
font-family: 'Bungee', cursive;
font-family: 'Faster One', cursive;
font-family: 'Vast Shadow', cursive;
font-family: 'Diplomata SC', cursive;
font-family: 'Jacques Francois Shadow', cursive;
font-family: 'Diplomata', cursive;
font-family: 'Goblin One', cursive;
font-family: 'Josefin Sans', sans-serif; -->
