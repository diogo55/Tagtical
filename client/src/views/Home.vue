<template>
  <v-container>
    <v-layout row wrap>
      <v-flex class="inside">
        <h1>Welcome to Tagtical Hockey!</h1>
      </v-flex>
      <v-flex xs12>
        <v-carousel delimiter-icon="fiber_manual_record">
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex class="baixa">
        <h1>cenas</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.inside {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  color: black;
}

.baixa{
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  text-align: left;
}
</style>
