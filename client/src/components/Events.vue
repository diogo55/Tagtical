<template>
  <v-container fluid>
    <v-layout row>
      <v-flex>
        <div v-bind:key="event._id" v-for="event in events">
          <EventItem
            class="menos"
            v-bind:event="event"
            v-on:go-game="$emit('go-game',event._id)"
          />
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EventItem from "./EventItem.vue";

export default {
  name: "Events",
  components: {
    EventItem
  },
  props: ["events"]
};
</script>

<style scoped>
.menos {
  position: relative;
  padding-bottom: 0px;
  padding-top:0px;
}
</style>
