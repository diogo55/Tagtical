<template>
  <ul class="nav nav-pills nav-stacked sidebar">
    <v-card max-width="150">
      <p align="center">
        <router-link :to="{ name: 'team', params: {id: gamedata._id,team: 'A'} }">
          <b>{{this.gamedata.teamA.name}}</b>
        </router-link>
        <button v-on:click="seen1 = !seen1">
          <b>+</b>
        </button>
      </p>
      <tr v-for="(player,index) in this.gamedata.teamA.players" :key="index">
        <td v-if="seen1">
          <router-link :to="{ name: 'player', params: {id: gamedata._id,team: 'A',n: index} }">
            {{gamedata.teamA.players[index].name}}
          </router-link>
        </td>
      </tr>
    </v-card>

    <v-card max-width="150">
      <p align="center">
        <router-link :to="{ name: 'team', params: {id: gamedata._id,team: 'B'} }">
          <b>{{this.gamedata.teamB.name}}</b>
        </router-link>
        <button v-on:click="seen2 = !seen2">
          <b>+</b>
        </button>
      </p>
      <tr v-for="(player,index) in this.gamedata.teamB.players" :key="index">
        <td v-if="seen2">
          <router-link :to="{ name: 'player', params: {id: gamedata._id,team: 'B',n: index} }">
          {{gamedata.teamB.players[index].name}}
        </router-link>
        </td>
      </tr>
    </v-card>
  </ul>
</template>


<script>
export default {
  name: "Sidebar",
  props: ["gamedata"],
  data() {
    return {
      seen1: false,
      seen2: false
    };
  }
};
</script>


