<template>
  <div id="app">
    <Events v-bind:events="events" v-on:del-event="deleteEvent"/>
  </div>
</template>

<script>
import Events from '../components/Events';
import axios from 'axios';

 var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
  };



export default {
  name: 'Event',
  components: {
    Events
  },
  data(){
    return {
      events: []
    }
  },
  
  methods: {
    deleteEvent(id){
      axios.delete(`http://localhost:5000/api/games/${id}`)
        .then(res => this.events = this.events.filter(event => event._id !== id) )
        .catch(err => console.log(err));

    },
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

    created(){
      axios.get('http://localhost:5000/api/games')
        .then(res => this.events = res.data)
        .catch(err => console.log(err));
  }
}
</script>

<style scoped>
</style>
