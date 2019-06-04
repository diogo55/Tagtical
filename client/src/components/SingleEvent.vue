<template>
 <v-container fluid grid-list-xl >
   <v-layout row justify-center>
<v-flex xs2>
          <v-btn @click="$emit('view-game', gamedata._id)" v-bind:key="gamedata._id">
    {{gamedata._id}}
  </v-btn>
      </v-flex>
   </v-layout>
    <v-layout row justify-center>
      <v-flex xs4>
<v-card height=auto width=500 color="blue-grey" xs4>
      <v-card-title class="justify-center">
      </v-card-title>
      <v-card-text>
        <table style="width:100%; height:40%" border="1" >
          <tr>
            <th>{{gamedata.name}}</th>
            <th>Velocidade Máxima</th>
            <th>Velocidade Média</th>
            <th>Distância</th>
          </tr>
          <tr v-for="(player,index) in this.gamedata.players" :key="index">
            <td align="center">
              {{gamedata.players[index].name}} </td>
            <td align="center">
              {{gamedata.players[index].data.vel_max}} </td>
            <td align="center"> 
              {{gamedata.players[index].data.vel_media}} </td>
            <td align="center"> 
              {{gamedata.players[index].data.dist}} </td>
          </tr>
        </table>
      </v-card-text>
      </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
 

<script>

export default {
  name: "SingleEvent",
  props: ["gamedata"],
};
</script>

