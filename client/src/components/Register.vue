<template>
  <div>
    <panel title="Register">
      <h1>Sign Up</h1>
      <form class="register-form">
        <input
        type="email"
        name="email"
        v-model="email"
        autocomplete="off"
        placeholder="email"/>
        <br>
        <input
        type="password"
        name="password"
        v-model="password"
        autocomplete="new-password"
        placeholder="password"/>
        <br>
        <div class="error" v-html="error"/>
        <br>
        <button
        @click="register">
        Sign Up</button>
        <p><span>Already Signed up? </span><a @click="navigateTo({name: 'login'})">Log In</a></p>
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
    async register () {
      try {
        event.preventDefault()
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
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
  width: 25%;
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
