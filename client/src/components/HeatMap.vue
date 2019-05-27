<template>
<div>
     <apexchart v-if="gamedata" width="500" type="heatmap" :options="chartOptions" :series="series"></apexchart>
   </div>
</template>

<script>


export default {
    name: "HeatMap",
    props: ["gamedata","team","parte"],
    data: function() {
      return {
        teamdata: [[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]],
        chartOptions: {
        backgroundColor: '#C28535',
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [0,4,8,12,16,20,24,28,32,36,40]
          },
          plotOptions: {
            heatmap: {
                colorScale: {
                    ranges: [{
                        from: 0,
                        to: 20,
                        color: '#00A100',
                        name: 'low',
                    },
                        {
                        from: 20,
                        to: 45,
                        color: '#f4e000',
                        name: 'medium',
                      },
                      {
                        from:45,
                        to: 60,
                        color: '#ff2a00',
                        name: 'high',
                      }
        ]
      }
    }
  }

        },
        series: [{
          name: '0',
          data:  [0,0,0,0,0,0,0,0,0,0,0]}, {    
          name: '4',
          data:   [0,0,0,0,0,0,0,0,0,0,0]}, {    
          name: '8',
          data:  [0,0,0,0,0,0,0,0,0,0,0]}, {    
          name: '12',
          data:  [0,0,0,0,0,0,0,0,0,0,0]}, {    
          name: '16',
          data:  [0,0,0,0,0,0,0,0,0,0,0]}, {   
          name: '20',
          data:  [0,0,0,0,0,0,0,0,0,0,0]}]
      }
    },
    methods: {
      getData: function() {
        if (this.team=='A') {
        if (this.parte=='1') {
          for(var i = 0; i < this.gamedata.teamA.players.length;i++ )
            for(var j = 0; j <= 60;j++)
                this.teamdata[this.getPos(this.gamedata.teamA.players[i].pos[j].posY)][this.getPos(this.gamedata.teamA.players[i].pos[j].posX)]++;
        }
        else {
          for(var i = 0; i < this.gamedata.teamA.players.length;i++ )
            for(var j = 61; j <= 120;j++) 
                this.teamdata[this.getPos(this.gamedata.teamA.players[i].pos[j].posY)][this.getPos(this.gamedata.teamA.players[i].pos[j].posX)]++;
        }
        }
        else {
          if (this.parte=='1') {
          for(var i = 0; i < this.gamedata.teamB.players.length;i++ )
            for(var j = 0; j <= 60;j++)
                this.teamdata[this.getPos(this.gamedata.teamB.players[i].pos[j].posY)][this.getPos(this.gamedata.teamA.players[i].pos[j].posX)]++;
        }
        else {
          for(var i = 0; i < this.gamedata.teamB.players.length;i++ )
            for(var j = 61; j <= 120;j++) 
                this.teamdata[this.getPos(this.gamedata.teamB.players[i].pos[j].posY)][this.getPos(this.gamedata.teamA.players[i].pos[j].posX)]++;
        }
        }
      },
        getPos: function(pos){
          if (0<=pos && pos<=4) return 0;
          else if (4<pos && pos<=8) return 1;
          else if (8<pos && pos<=12) return 2;
          else if (12<pos && pos<=16) return 3;
          else if (16<pos && pos<=20) return 4;
          else if (20<pos && pos<=24) return 5;
          else if (24<pos && pos<=28) return 6;
          else if (28<pos && pos<=32) return 7;
          else if (32 <pos && pos<=36) return 8;
          else if (36<pos && pos<=40) return 9;
          else return 10;
    },
    populate: function() {
      return [{
          name: '0',
          data:  this.teamdata[0]}, {    
          name: '4',
          data:  this.teamdata[1]}, {    
          name: '8',
          data: this.teamdata[2]}, {    
          name: '12',
          data: this.teamdata[3]}, {    
          name: '16',
          data: this.teamdata[4]}, {   
          name: '20',
          data: this.teamdata[5]}];
  }
    },
      watch: { gamedata(){ this.getData();
      this.series = this.populate();} } 
};

</script>


 