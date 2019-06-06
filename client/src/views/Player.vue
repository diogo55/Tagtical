<template>
  <div>
   <v-layout row justify-center>
      <v-flex xs4>
        <HeatMapPlayer v-bind:gamedata="player" parte='Primeira Parte'/>
      </v-flex>
      <v-flex xs1>
      </v-flex>
      <v-flex xs4>
        <HeatMapPlayer v-bind:gamedata="player" parte='Segunda Parte'/>
      </v-flex>
    </v-layout>
  </div>
</template>


<script>
import SingleEvent from "../components/SingleEvent";
import HeatMapPlayer from "../components/HeatMapPlayer";
import axios from 'axios';
import Sidebar from "../components/Sidebar";

export default {
  name: "Team",
  components: {
    SingleEvent,
    HeatMapPlayer
  },
  data(){
    return {
      player: []
    }
  },
  created(){
    var id = this.$route.params.id;
    var t;
    if (this.$route.params.team=='A')
      t="teamA"
    else t="teamB"
    var n = this.$route.params.n;
    axios
      .get(`http://localhost:5000/api/games/${id}/${t}/${n}`)
      .then(res => (this.player = res.data))
      .catch(err => console.log(err));
  }
};
</script>


