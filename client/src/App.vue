<template>
  <div id="app">
    <page-header/>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <footer>
      <p>&copy Laura Levenhagen 2018</p>
    </footer>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Bungee|Bungee+Inline|Diplomata|Diplomata+SC|Faster+One|Goblin+One|Jacques+Francois+Shadow|Josefin+Sans:600,700i|Permanent+Marker|Vast+Shadow');
#app {
  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: black;
  color: white;
  padding-top: 0;
}
button {
  font-family: 'Faster One', cursive;
  font-size: 2.2vw;
  letter-spacing: .3vw;
  color: white;
  border: .2vw solid black;
  width: 25%;
  padding: 1vw;
  /* border-radius: 1vw; */
  margin-left: 3vw;
  background: #FF0D64;
  margin: 1vw auto 2vw;
}
button:hover {
  background: white;
  color: #55B4DD;
  transition: .5s ease-in-out;
  cursor: pointer;
}
footer {
  background: #7DCCEE;
  color: ghostwhite;
  display: inline-flex;
  justify-content: flex-end;
  width: 100%;
  height: 3vw;
  text-align: left;
  margin-top: 2vw;
}
p {
  font-size: 1.3vw;
  line-height: 100%;
  margin: auto 3vw;
}
h2 {
  color: white;
  font-size: 3vw;
}
form {
  width: 70%;
  font-size: 2vw;
}
input {
  width: 30vw;
  font-size: 2vw;
  border-radius: .2vw;
  color: #7DCCEE;
}
form button {
  width: 17vw;
  color: #F00404;
  background: white;
  border-radius: 1vw;
  padding: .7vw;
  font-size: 1.7vw;
}
form button:hover {
  background: white;
  color: #55B4DD;
  transition: .1s ease-in-out;
  cursor: pointer;
}
.login-form input, .register-form input{
  margin: 1vw auto;
}
.login-form, .register-form {
  margin-top: 5vw;
}
a {
  color: #FF0D64;
}
a:hover {
  color: #55B4DD;
}
</style>
