<template>
  <v-container>
    <vgl-renderer antialias style="height: 100vh;">
      <vgl-scene>
        <vgl-sphere-geometry name="sphere"></vgl-sphere-geometry>
        <vgl-mesh-standard-material name="std"></vgl-mesh-standard-material>
        <vgl-mesh geometry="sphere" material="std"></vgl-mesh>
        <vgl-ambient-light color="#ffeecc"></vgl-ambient-light>
        <vgl-directional-light position="0 1 1"></vgl-directional-light>
      </vgl-scene>
      <vgl-perspective-camera orbit-position="5 1 1;"></vgl-perspective-camera>
    </vgl-renderer>
  </v-container>
</template>


<script>
import * as VueGL from 'vue-gl'

var position = {x:200, y:200},
  target = {x:400, y:400}

export default{
  components:{
    "vue-gl": VueGL
  }
}

</script>


