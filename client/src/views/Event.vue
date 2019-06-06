<template>
<div>
    <v-btn icon @click.stop="drawer = !drawer">
      <v-icon>home</v-icon>
    </v-btn>
    <v-navigation-drawer v-model="drawer" app width="450px" 
          class="primary"  >
      <v-layout>
      <Events v-bind:events="events" v-on:go-game="goGame"/>
      </v-layout>
    </v-navigation-drawer>
    </div>
</template>

<script>
import Events from "../components/Events";
import axios from "axios";

var config = {
  headers: { "Access-Control-Allow-Origin": "*" }
};
// <div id="app">
//  <Events v-bind:events="events" v-on:go-game="goGame"/>
//</div>

export default {
  name: "Event",
  components: {
    Events
  },
  data() {
    return {
      drawer: false,
      events: []
    };
  },

  methods: {
    deleteEvent(id) {
      axios
        .delete(`http://localhost:5000/api/games/${id}`)
        .then(
          res => (this.events = this.events.filter(event => event._id !== id))
        )
        .catch(err => console.log(err));
    },
    goGame(id) {
      this.$router.push("/events/" + id);
    }
    /*
    addTodo(newTodo){
      const { title, completed } = newTodo;

      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
      })
        .then(res => this.todos = [...this.todos, res.data])
        .catch(err => console.log(err));

    }
    */
  },

  created() {
    axios
      .get("http://localhost:5000/api/games")
      .then(res => (this.events = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
  .coloring{
    color:"rgba(21, 150, 146,0.5)";
  }
</style>

