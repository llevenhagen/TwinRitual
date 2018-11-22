<template>
  <div>
    <h1>Register</h1>
    <form>
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
    Register For Points</button>
  </form>
  </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
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
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red
}
</style>
