<template>
  <div>
    <h1>{{title}}</h1>
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

</style>
