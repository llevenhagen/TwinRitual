<template>
  <div>
    <slot name="action"/>
    <slot>
      No slot content defined
    </slot>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>
<style scope>
@import url('https://fonts.googleapis.com/css?family=Bungee|Bungee+Inline|Diplomata|Diplomata+SC|Faster+One|Goblin+One|Jacques+Francois+Shadow|Josefin+Sans:600,700i|Permanent+Marker|Vast+Shadow');
h1 {
  font-size: 3.5vw;
  font-style: italic;
  letter-spacing: 1vw;
  color: white;
  border-bottom: .2vw solid white;
  margin: 4vw auto 2vw;
  line-height: 150%;
  width: 80%;
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
