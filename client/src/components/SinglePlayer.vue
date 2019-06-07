<template>
  <v-container fluid grid-list-xl>
      <v-flex xs4>
<v-card height=auto width=500 color="blue-grey" xs4>
      <v-card-title class="justify-center">
      </v-card-title>
      <v-card-text>
        <table style="width:100%; height:40%" border="1" >
          <tr>
            <th>Velocidade Máxima</th>
            <th>Velocidade Média</th>
            <th>Distância</th>
          </tr>
          <tr>
            <td align="center">
              {{player.data.vel_max}} </td>
            <td align="center"> 
              {{player.data.vel_media}} </td>
            <td align="center"> 
              {{player.data.dist}} </td>
          </tr>
        </table>
      </v-card-text>
      </v-card>
      </v-flex>
  </v-container>
</template>
 

<script>
export default {
  name: "SinglePlayer",
  props: ["player"],

  watch: { gamedata(){ 
      return this.player} } 

};


</script>

