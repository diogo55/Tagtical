<template>
      <div class="text-xs-center">

      <v-btn @click="$emit('go-game', event._id)" block class="event" >
          
          {{event.teamA.name + ' vs ' + event.teamB.name }} 
          {{event.date}}
      </v-btn>
      
      </div>
</template>

<script>
export default {
  name: "EventItem",
  props: ["event"]
};
</script>

<style scoped>
.event {
  color:#f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  text-align: center;
  font-size: 14px;
}


.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>
