<template>
<div>
    sadasdasdasdasdasdasda
  <Sidebar v-bind:gamedata="gamedata"/>
<v-container fluid grid-list-xl >
    <v-layout row justify-center>
      <v-flex xs4>
        <HeatMap v-if="team='A'" v-bind:gamedata="gamedata.teamA" parte='Primeira Parte'/>
        <HeatMap v-else v-bind:gamedata="gamedata.teamA" parte='Primeira Parte'/>
      </v-flex>
      <v-flex xs1>
      </v-flex>
      <v-flex xs4>
        <HeatMap v-if="team='A'" v-bind:gamedata="gamedata.teamA" parte='Segunda Parte'/>
        <HeatMap v-else v-bind:gamedata="gamedata.teamB" parte='Segunda Parte'/>
      </v-flex>
    </v-layout>
  </v-container>
    <SingleEvent v-if="team='A'" v-bind:gamedata="gamedata.teamA" v-on:view-game="viewGame"/>
    <SingleEvent v-else v-bind:gamedata="gamedata.teamB" v-on:view-game="viewGame"/>
</div>
</template>


<script>
import SingleEvent from "../components/SingleEvent";
import HeatMap from "../components/HeatMap";
import axios from 'axios';
import Sidebar from "../components/Sidebar";

export default {
  name: "Team",
  props: ["id","team"],
  components: {
    SingleEvent,
    HeatMap,
    Sidebar
  },
  data(){
    return {
      gamedata: []
    }
  },
  created(){

    axios.get(`http://localhost:5000/api/games/${this.id}`)
      .then(res => this.gamedata = res.data)
      .catch(err => console.log(err));
  }
};
</script>