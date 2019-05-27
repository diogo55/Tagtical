<template>
<div>
<v-container fluid grid-list-xl >
    <v-layout row justify-center>
      <v-flex xs4>
        <th>Primeira Parte</th>
        <HeatMap v-bind:gamedata="gamedata" team='A' parte='1'/>
      </v-flex>
      <v-flex xs1>
      </v-flex>
      <v-flex xs4>
        <th> Primeira Parte</th>
        <HeatMap v-bind:gamedata="gamedata" team='B' parte='2'/>
      </v-flex>
    </v-layout>
     <v-layout row justify-center>
      <v-flex xs4>
        <th> Segunda Parte</th>
        <HeatMap v-bind:gamedata="gamedata" team='A' parte='2'/>
      </v-flex>
      <v-flex xs1>
      </v-flex>
      <v-flex xs4>
        <th> Segunda Parte</th>
        <HeatMap v-bind:gamedata="gamedata" team='B' parte='1'/>
      </v-flex>
    </v-layout>
  </v-container>
    <SingleEvent v-bind:gamedata="gamedata" v-on:view-game="viewGame"/>
</div>
</template>


<script>
import SingleEvent from "../components/SingleEvent";
import HeatMap from "../components/HeatMap"
import axios from 'axios';

export default {
  name: "Single",
  components: {
    SingleEvent,
    HeatMap
  },
  data(){
    return {
      gamedata: []
    }
  },

  methods:{
    viewGame(id){
      window.open('http://localhost:5000/files/'+id+'/sh.html')
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