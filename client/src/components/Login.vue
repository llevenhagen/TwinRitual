<template>
  <div>
    <panel title="Log In">
      <form>
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
      } catch (error) {
        this.error = error.response.data.error
      }
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
</style>
