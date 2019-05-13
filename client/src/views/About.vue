<template>
  <vue-p5 v-on="{setup,draw}"></vue-p5>
</template>


<script>
import VueP5 from 'vue-p5'

var position = {x:200, y:200},
  target = {x:400, y:400},
  step = normalize({x: target.x - position.x, y: target.y - position.y});

function normalize(v)
{
   var length = Math.sqrt(v.x * v.x + v.y * v.y);
   return {x: v.x / length, y: v.y / length};
}

export default{
  components:{
    "vue-p5": VueP5
  },
  methods:{
    setup(sketch){
      VueP5.disableFriendlyErrors = true
      sketch.resizeCanvas(400,400);
    },

    draw(sketch){
      sketch.background("darkgreen");
      sketch.fill(0);
      sketch.ellipse(position.x, position.y, 10,10);

      position.x += step.x;
      position.y += step.y;

      if(position.y > 400){
          position.y = 0;
        }

      if(position.x > 400){
        position.x = 0;
      }
      /*x = x+random(-1,1);
      y = y-1;

      if(y < 0 ){
        y = height;
      }*/
    }
  }
}

</script>


