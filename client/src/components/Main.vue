<template>
  <div class="hello">
    <div class="youtube-video">
      <youtube
        :video-id="videoId"
        :player-width="800"
        :player-height="500">
      </youtube>
    </div>
    <div class="contact">
      <p>Contact Us:</p>
      <img src="../images/Instagram-icon.png"/>
      <img src="../images/youtube-icon.png"/>
      <img src="../images/mail-icon.png"/>
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
* {
  background: black;
}
.youtube-video {
  padding: 6vw;
  border-bottom: .2vw solid white;
}
img {
  width: 4vw;
  margin: auto 1.5vw;
  border-radius: .5vw;
  margin-bottom: 2vw;
}
img:hover {
  transform: scale(1.25);
  transition: .5s ease-in-out;
}
.contact {
  margin: 4vw auto 0;
  width: 30%;
  border-radius: 2vw;
  padding: 1vw;

}
  p {
  text-align: center;
  border-bottom: .2vw solid white;
  width: 90%;
  padding-bottom: 1vw;
  color: white;
  letter-spacing: 1vw;
  font-size: 2vw;
  text-align: center;
  margin: auto auto 2vw;

}
</style>
