<template>
  <div id="app"">
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
    background-color: black;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }
</style>
