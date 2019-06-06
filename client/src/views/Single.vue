<template>
  <div>
    <Sidebar v-bind:gamedata="gamedata"/>
   <router-view></router-view>
   </div>
</template>


<script>
import SingleEvent from "../components/SingleEvent";
import HeatMap from "../components/HeatMap";
import axios from "axios";
import Sidebar from "../components/Sidebar";

export default {
  name: "Single",
  components: {
    SingleEvent,
    HeatMap,
    Sidebar
  },
  data() {
    return {
      gamedata: [],
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
    }
  },
  created() {
    var id = this.$route.params.id;

    axios
      .get(`http://localhost:5000/api/games/${id}`)
      .then(res => (this.gamedata = res.data))
      .catch(err => console.log(err));
  }
};
</script>