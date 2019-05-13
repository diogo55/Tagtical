<template>
  <vue-p5 v-on="{setup,draw}"></vue-p5>
</template>


<script>
import VueP5 from 'vue-p5'

export default{
  components:{
    "vue-p5": VueP5
  },
  methods:{
    setup(sketch){
      x = 0;
      y = 0;
      sketch.resizeCanvas(400,400);
    },
    draw(sketch){
      sketch.background("darkgreen");
      sketch.fill(0);
      sketch.ellipse(x, y, 10,10);

      x = x+random(-1,1);
      y = y-1;

      if(y < 0 ){
        y = height;
      }
    }
  }
}

</script>


