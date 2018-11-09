<template>
  <div id="app">
    <div class="top-left">
      <img
        class="animated tossing hidden"
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/40/pile-of-poo_1f4a9.png"
      >
    </div>
    <PhysicsCanvas/>
    <div class="bottom-right">
      <img
        class="animated tossing hidden"
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
    width: 150px;
    height: 150px;
  }

  .top-left {
    position: absolute;
    top: 20vh;
    right: 73vw;
  }

  .bottom-right {
    position: absolute;
    bottom: 10vh;
    left: 70vw;
  }

  .hidden {
    visibility: hidden;
  }
</style>
