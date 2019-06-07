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
    </div>
    <Sidebar v-bind:gamedata="gamedata"/>
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