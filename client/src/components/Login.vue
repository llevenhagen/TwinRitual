<template>
  <div>
    <panel title="Log In">
      <h1>Log In</h1>
      <form class="login-form">
        <input
        type="email"
        name="email"
        v-model="email"
        placeholder="email"/>
        <br>
        <input
        type="password"
        name="password"
        v-model="password"
        placeholder="password"/>
        <br>
        <div class="error" v-html="error"/>
        <br>
        <button
        @click="login">
        Log In</button>
        <p><span>Need to </span><a @click="navigateTo({name: 'register'})">Sign Up?</a></p>
      </form>
    </panel>
  </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        event.preventDefault()
        console.log('hello')
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        console.log(response.data.user)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push('/')
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.error {
  color: red
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
a {
  color: #FF0D64;
}
a:hover {
  color: #55B4DD;
}
</style>
