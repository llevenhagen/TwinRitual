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
      <a target="_blank" href="https://www.instagram.com/twinritual/"><img src="../images/Instagram-icon.png"/></a>
      <a target="_blank" href="https://www.youtube.com/channel/UCU-s2wet3UuTV2aqRVEa8iQ"><img src="../images/youtube-icon.png"/></a>
      <a target="_blank" href="mailto:twinritual@gmail.com"><img src="../images/mail-icon.png"/></a>
      <a target="_blank" href="https://www.facebook.com/TwinRitual/"><img src="../images/FaceBook-icon.png"/></a>
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
  padding: 3vw;
}
img {
  width: 4vw;
  margin: auto 1.5vw;
  border-radius: .5vw;
  margin-bottom: 2vw;
  background: white;
}
img:hover {
  transform: scale(1.25);
  transition: .5s ease-in-out;
  cursor: pointer;
}
.contact {
  margin: 4vw auto 0;
  width: 30%;
  padding: 1vw;
  background: white;
  width: 100%;

}
  p {
  background: white;
  text-align: center;
  border-bottom: .2vw solid white;
  width: 90%;
  padding-bottom: 1vw;
  color: #F00404;
  letter-spacing: 1vw;
  font-size: 2vw;
  text-align: center;
  margin: 3vw auto 1vw;

}
.contact a {
  text-decoration: none;
  background: white;
}
</style>
