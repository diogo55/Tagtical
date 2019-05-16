<template>
  <div id="container" class="size" ></div>
</template>



<script>
import * as Three from 'three'
import OrbitControls from 'three-orbitcontrols'
import OBJLoader from 'three-obj-loader'
OBJLoader(Three);

export default {
  name: 'ThreeTest',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      meshplane: null,
      controls: null,
      ball: null,
      fieldwidth: 2,
      fieldheight: 1,
      ballDirX: 0.1, 
      ballDirY: 0.1, 
      ballSpeed: 0.2,
      mesh: null
    }
  },
  methods: {
    init: function() {
        let container = document.getElementById('container');

        // PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR)
        this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10);
        this.camera.position.z = 1;

        this.scene = new Three.Scene();

        this.scene.background = new Three.Color(0x0)
        //let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
        //let material = new Three.MeshNormalMaterial();
      

        //this.mesh = new Three.Mesh(geometry, material);
        //this.scene.add(this.mesh);

        

        this.Three = Three;
        var loader = new this.Three.OBJLoader();

        loader.setPath('file:///home/yoda45/Desktop/LEI/Tagtical/client/src/assets/');

        let material = new Three.MeshLambertMaterial({color:0xffffff,emissive:0xffffff});


        loader.load('lowpolytree.obj', geometry => {
          let mesh = new Three.Mesh(geometry,material)
          this.mesh = mesh
        })

        this.scene.add(this.mesh)
        console.log(loader)


        var fieldquality = 1;


        let field = new Three.PlaneGeometry(this.fieldwidth,this.fieldheight,fieldquality,fieldquality)
        //let material = new Three.MeshNormalMaterial();
        let fieldmaterial = new Three.MeshLambertMaterial({color:0x2194ce,emissive:0x2194ce});

        this.meshplane = new Three.Mesh(field,fieldmaterial);

        this.scene.add(this.meshplane);


        /* estou a foder neste momento não descomentar se não 
          quiseres fixar
        //create a point light

        var pointLight = new Three.PointLight(0xF8D898);

        //set position
        pointLight.position.x = -1000;
        pointLight.position.y = 0;
        pointLight.position.z = 1000;
        pointLight.intensity = 2.0;
        pointLight.distance = 100000;

        this.scene.add(pointLight);
        */

        this.controls = new Three.OrbitControls(this.camera);
        this.controls.update();
        

        //Set up Goals
        var goalwidth = 0.1;
        var goalheight = 0.3;
        var goaldepth = 0.1;
        var goalquality = 1;

        var goalmaterial = new Three.MeshLambertMaterial({emissive: 0xffa500,color:0xffa500});

        //Set up Left Goal
        var goal1 = new Three.BoxGeometry(goalwidth,goalheight,goaldepth,goalquality,goalquality,goalquality);
        var meshgoal1 = new Three.Mesh(goal1,goalmaterial)

        this.scene.add(meshgoal1);

        //Set up Right Goal
        var goal2 = new Three.BoxGeometry(goalwidth,goalheight,goaldepth,goalquality,goalquality,goalquality);
        var meshgoal2 = new Three.Mesh(goal2,goalmaterial)

        this.scene.add(meshgoal2);


        //Set Goals positions
        meshgoal1.position.x = -1 + goalwidth;
        meshgoal2.position.x = 1 - goalwidth;

        //Lift Goals over surface
        meshgoal1.position.z = -0.04 + goaldepth;
        meshgoal2.position.z = -0.04 + goaldepth;

        //Ball Creation
        this.ball = new Three.Mesh(new Three.SphereGeometry(0.09,10,10),new Three.MeshLambertMaterial({emissive:0xffa500}));
        this.scene.add(this.ball);

       





        this.renderer = new Three.WebGLRenderer({antialias: true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);


    },
    animate: function() {
        requestAnimationFrame(this.animate);
        //this.meshplane.rotation.x += 0.01;
        //this.meshplane.rotation.y += 0.02;

         //Ball Logic

         

        this.ball.position.x += this.ballDirX * this.ballSpeed;
        this.ball.position.y += this.ballDirY * this.ballSpeed;
        
        if(this.ballDirY > this.ballSpeed * 2){
          this.ballDirY = this.ballSpeed * 2;
        }
        else if(this.ballDirY < -this.ballSpeed * 2){
          this.ballDirY = -this.ballSpeed * 2;
        }

        if(this.ball.position.y <= -this.fieldheight/2){
          this.ballDirY = -this.ballDirY;
        }

        if(this.ball.position.y >= this.fieldheight/2){
          this.ballDirY = -this.ballDirY;
        }

        if(this.ball.position.x >= -this.fieldwidth/2){
          this.ballDirX = -this.ballDirX;
        }

        if(this.ball.position.x <= this.fieldwidth/2){
          this.ballDirX = -this.ballDirX;
        }


        this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
      this.init();
      this.animate();
  }
}
</script>


<style scoped>
  .size{
    width: 640px;
    height: 360px;
  }
</style>
