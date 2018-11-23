<template>
  <div class="hello">
    <h1>Welcome! Twin Ritual loves you</h1>
    <div class="youtube-video">
      <youtube
        :video-id="videoId"
        :player-width="800"
        :player-height="500">
      </youtube>
    </div>
  </div>
</template>

<script>
import { getIdFromURL } from 'vue-youtube-embed'
let videoId = getIdFromURL('https://www.youtube.com/watch?v=wsqkuijURCQ')
export default {
  data () {
    return {
    }
  },
  computed: {
    videoId () {
      return (
        videoId
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.youtube-video {
  margin-top: 6vw;
}
</style>
