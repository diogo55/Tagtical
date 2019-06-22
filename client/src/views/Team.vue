<template>
  <div>
    <v-container fluid grid-list-xl >
    <v-layout row justify-center>
      <v-flex xs4>
        <HeatMap v-if="this.$route.params.team=='A'" v-bind:gamedata="team" parte='Primeira Parte'/>
        <HeatMap v-else v-bind:gamedata="team" parte='Primeira Parte'/>
      </v-flex>
      <v-flex xs1>
      </v-flex>
      <v-flex xs4>
        <HeatMap v-if="this.$route.params.team=='A'" v-bind:gamedata="team" parte='Segunda Parte'/>
        <HeatMap v-else v-bind:gamedata="team" parte='Segunda Parte'/>
      </v-flex>
    </v-layout>
  </v-container>
    <SingleEvent v-if="this.$route.params.team=='A'" v-bind:gamedata="team" v-on:go-game="goGame"/>
    <SingleEvent v-else v-bind:gamedata="team" v-on:go-game="goGame"/>
  </div>
</template>


<script>
import SingleEvent from "../components/SingleEvent";
import HeatMap from "../components/HeatMap";
import axios from 'axios';
import Sidebar from "../components/Sidebar";

export default {
  name: "Team",
  components: {
    SingleEvent,
    HeatMap
  },
  data(){
    return {
      team: []
    }
  },
  created(){
    var id = this.$route.params.id;
    var t;
    if (this.$route.params.team=='A')
      t="teamA"
    else t="teamB"
    axios
      .get(`http://localhost:5000/api/games/${id}/${t}`)
      .then(res => (this.team = res.data))
      .catch(err => console.log(err));
  }
};
</script>


