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

</style>
