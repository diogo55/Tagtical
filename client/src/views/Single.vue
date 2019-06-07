<template>
  <div>
    <div>
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>event</v-icon>
      </v-btn>
      <v-navigation-drawer v-model="drawer" mobile-break-point="10240" app class="grey">
        <v-list>
          <Events v-bind:events="events" v-on:go-game="goGame"/>
        </v-list>
      </v-navigation-drawer>

      <v-btn icon @click.stop="drawer2 = !drawer">
        <v-icon>group</v-icon>
      </v-btn>
      <v-navigation-drawer v-model="drawer2" mobile-break-point="10240" app class="grey">
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>group</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title style="font-size:20px">Teams</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list>
          <v-list-group prepend-icon="account_circle" value="true">
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>{{gamedata.teamA.name}}</v-list-tile-title>
              </v-list-tile>
            </template>
            <v-list-tile :to="{ name: 'team', params: {id: gamedata._id,team: 'A'} }">
              <v-list-tile-action>
                <v-icon>event</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>Geral</v-list-tile-title>
            </v-list-tile>
            <v-list-group prepend-icon="group" no-action sub-group value="true">
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-title>Jogadores</v-list-tile-title>
                </v-list-tile>
              </template>

              <v-list-tile
                v-for="(player, index) in gamedata.teamA.players"
                :key="index"
                router
                :to="{name:'player',params:{id:gamedata._id,team:'A',n:index}}"
              >
                <v-list-tile-action>
                  <v-icon>person</v-icon>
                </v-list-tile-action>
                <v-list-tile-title v-text="gamedata.teamA.players[index].name"></v-list-tile-title>
              </v-list-tile>
            </v-list-group>
          </v-list-group>
          <v-list-group prepend-icon="account_circle" value="true">
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>{{gamedata.teamB.name}}</v-list-tile-title>
              </v-list-tile>
            </template>
            <v-list-tile :to="{ name: 'team', params: {id: gamedata._id,team: 'B'} }">
              <v-list-tile-action>
                <v-icon>event</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>Geral</v-list-tile-title>
            </v-list-tile>
            <v-list-group prepend-icon="group" no-action sub-group value="true">
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-title>Jogadores</v-list-tile-title>
                </v-list-tile>
              </template>

              <v-list-tile
                v-for="(player, index) in gamedata.teamB.players"
                :key="index"
                router
                :to="{name:'player',params:{id:gamedata._id,team:'B',n:index}}"
              >
                <v-list-tile-action>
                  <v-icon>person</v-icon>
                </v-list-tile-action>
                <v-list-tile-title v-text="gamedata.teamB.players[index].name"></v-list-tile-title>
              </v-list-tile>
            </v-list-group>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
    </div>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>


<script>
import SingleEvent from "../components/SingleEvent";
import HeatMap from "../components/HeatMap";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Events from "../components/Events";

export default {
  name: "Single",
  components: {
    SingleEvent,
    HeatMap,
    Sidebar,
    Events
  },
  data() {
    return {
      drawer: false,
      drawer2: true,
      gamedata: [],
      events: [],
      watch: {
        gamedata() {
          return this.gamedata;
        }
      }
    };
  },

  methods: {
    viewGame(id) {
      window.open("http://localhost:5000/files/" + id + "/sh.html");
    },

    goGame(id) {
      this.$router.push("/events/" + id);
    }
  },
  created() {
    var id = this.$route.params.id;
    axios
      .get("http://localhost:5000/api/games")
      .then(res => (this.events = res.data))
      .catch(err => console.log(err));

    axios
      .get(`http://localhost:5000/api/games/${id}`)
      .then(res => (this.gamedata = res.data))
      .catch(err => console.log(err));
  }
};
</script>

