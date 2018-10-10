<template>
  <div id="app">
    <PhysicsCanvas/>
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
</style>
