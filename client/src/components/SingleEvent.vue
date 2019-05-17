<template>
  <v-container >
    <v-layout row wrap>
      <v-flex xs6>
      <v-btn @click="$emit('view-game', gamedata._id)" v-bind:key="gamedata._id">
        {{gamedata._id}}

      </v-btn>
        <v-card height=auto width=500 color="blue-grey">
          <v-card-title class="justify-center">
          </v-card-title>
          <v-card-text>
            <table style="width:100%" border="1" >
              <tr>
                <th>{{gamedata.teamA.name}}</th>
                <th>Velocidade Máxima</th>
                <th>Velocidade Média</th>
                <th>Distância</th>
              </tr>
              <tr v-for="(player,index) in this.gamedata.teamA.players" :key="index">
                <td align="center">
                  {{gamedata.teamA.players[index].name}} </td>
                <td align="center">
                  {{gamedata.teamA.players[index].data.vel_max}} </td>
                <td align="center"> 
                  {{gamedata.teamA.players[index].data.vel_media}} </td>
                <td align="center"> 
                  {{gamedata.teamA.players[index].data.dist}} </td>
              </tr>
            </table>
            <br>
            <table style="width:100%" border="1" >
              <tr>
                <th>{{gamedata.teamB.name}}</th>
                <th>Velocidade Máxima</th>
                <th>Velocidade Média</th>
                <th>Distância</th>
              </tr>
              <tr v-for="(player,index) in this.gamedata.teamB.players" :key="index">
                <td align="center">
                  {{gamedata.teamB.players[index].name}} </td>
                <td align="center">
                  {{gamedata.teamB.players[index].data.vel_max}} </td>
                <td align="center"> 
                  {{gamedata.teamB.players[index].data.vel_media}} </td>
                <td align="center"> 
                  {{gamedata.teamB.players[index].data.dist}} </td>
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
  props: ["gamedata"]
};
</script>