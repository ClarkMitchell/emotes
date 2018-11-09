<template>
  <div id="app">
    <div class="top-left">
      <img
        class="animated swing infinite hidden"
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/40/pile-of-poo_1f4a9.png"
      >
    </div>
    <PhysicsCanvas/>
    <div class="bottom-right">
      <img
        class="animated swing infinite hidden"
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/40/pile-of-poo_1f4a9.png"
      >
    </div>
  </div>
</template>

<script>
import PhysicsCanvas from './components/PhysicsCanvas.vue'

export default {
  name: 'app',
  components: {
    PhysicsCanvas: PhysicsCanvas
  }
}
</script>

<style>
  body {
    background-image: url("static/img/camerajams.png");
    background-size: contain;
    background-color: black;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    overflow:hidden;
  }

  #app {
    max-width: 2550px;
  }

  .animated {
    max-width:100%;
    height:auto;
  }

  .top-left {
    position: absolute;
    top: 25vh;
    right: 75vw;
  }

  .bottom-right {
    position: absolute;
    bottom: 1vh;
    left: 70vw;
  }

  .hidden {
    visibility: hidden;
  }
</style>
