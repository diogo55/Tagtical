<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <SingleEvent v-bind:gamedata="gamedata"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SingleEvent from "../components/SingleEvent";
import axios from 'axios';

export default {
  name: "Single",
  components: {
    SingleEvent
  },
  data(){
    return {
      gamedata: []
    }
  },

  created(){
    var id = this.$route.params.id

    axios.get(`http://localhost:5000/api/games/${id}`)
      .then(res => this.gamedata = res.data)
      .catch(err => console.log(err));

  }
};
</script>