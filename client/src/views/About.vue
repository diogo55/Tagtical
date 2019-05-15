<template>
    <div id="app">
      <vgl-renderer antialias style="height: 100vh;">
        <vgl-scene>
          <vgl-sphere-geometry name="sphere" radius="25"></vgl-sphere-geometry>
          <vgl-mesh-standard-material name="std"></vgl-mesh-standard-material>
          <vgl-mesh geometry="sphere" material="std" :position="`${x} ${y} ${z}`"></vgl-mesh>
          <vgl-axes-helper size="140"></vgl-axes-helper>
          <vgl-ambient-light color="#ffeecc"></vgl-ambient-light>
          <vgl-directional-light position="0 1 1"></vgl-directional-light>
        </vgl-scene>
        <vgl-perspective-camera orbit-position="200 1 0.5"></vgl-perspective-camera>
      </vgl-renderer>
      <aside class="control-panel">
        <h3>Position</h3>
        <label>
          x
          <input type="range" v-model="x">
        </label>
        <label>
          y
          <input type="range" v-model="y">
        </label>
        <label>
          z
          <input type="range" v-model="z">
        </label>
      </aside>
    </div>
</template>


<script>

//var position = { x: 200, y: 200 },
//  target = { x: 400, y: 400 };

export default {
  data(){
      return {
        x : 50,
        y : 50,
        z : 50
      }
  },
};
</script>


 data(){
    return {
      events: []
    }