<template>
  <div class="background-image">
    <Slider/>
    <v-container class="interaction">
      <v-container 
      class="texto">
        <h1 
        class="white--text"
        >BIENVENIDO</h1>
        <h2
        class="description"
        >Presiona para ordenar</h2>
        <v-btn 
        @click="$router.push('menu')"
        class="rounded-pill white--text" 
        color="#D1493F" 
        style="
        width: 170px; 
        height: 50px;"
        >ORDENAR AHORA</v-btn>
        <v-btn 
        @click="$router.push('crear')"
        class="rounded-pill white--text" 
        color="#712D86"
        style="
        width: 170px; 
        height: 50px; 
        left: 80px;"
        >CREAR TU PIZZA</v-btn>
      </v-container>
      <v-img class="blue-planet" src="../assets/blue_planet.svg"></v-img>
    </v-container>
    <v-container class="area-logo">
      <v-img class="logo" src="../assets/logo_pizzaPlanet.svg"></v-img>
      <v-img class="purple_planet" src="../assets/nave.svg"></v-img>
      <v-img class="moon" src="../assets/moon.svg"></v-img>
      <v-img class="cian_planet" src="../assets/cian_planet.svg"></v-img>
      <v-img class="green_planet" src="../assets/green_planet.svg"></v-img>
      <v-img class="pink_planet" src="../assets/pink_planet.svg"></v-img>
      <v-img class="red_planet" src="../assets/red_planet.svg"></v-img>
      <v-img class="orange_planet" src="../assets/orange_planet.svg"></v-img>
    </v-container>
    <v-img class="cohete" src="../assets/cohete.svg"></v-img>
  </div>
</template>



<script>
  import Slider from "../components/Slider.vue";

  export default {
    name: 'Home',
    
    components: {
      Slider
    },
  }
</script>

<style scoped>
.background-image {
  background-image: url("../assets/fondo.svg");
  position: fixed;
  top: -5px;
  left: -2px;
  width: 110%;
  height: 110%;
  z-index: 0;
}

.text-lg-h40 {
  color: white;
}
.description {
  color: #D1493F;
}
.blue-planet {
  left: -20%;
  bottom: -400px;
  width: 25%;
  height: 25%;
}

.texto {
  position: absolute;
  left: 100px;
  top: 25%;
}

h2{
  font-size: 40px;
  top: 30px;
}
h1 {
  font-size: 85px;
  top: 100%;
}
.cohete{
  position: relative;
  bottom: 550px;
  right: 9%;
  z-index: 1;
}
.logo {
  max-width: 60%;
  max-height: 60%;
  left: 150px;
  top: 150px;
  z-index: 10;
  transition: all 0.3s;
}
.purple_planet{
  min-width: 10%;
  max-width: 15%;
  min-height: 10%;
  max-height: 20%;
  left: 450px;
  top: 200px;
  transition: all 1s;
  z-index: 9;
}
.purple_planet:hover {
  max-width: 18%;
  max-height: 23%;
  transition: all 1s;
}
.moon {
  width: 14%;
  height: 15%;
  left: 350px;
  top: -20px;
  z-index: 8;
  transition: all 1s;
}
.moon:hover {
  width: 16%;
  height: 17%;
  transition: all 1s;
}
.cian_planet {
  width: 16%;
  height: 16%;
  left: 50px;
  top: -450px;
  z-index: 7;
  transition: all 1s;
}
.cian_planet:hover {
  width: 18%;
  height: 18%;
  transition: all 1s;
}
.pink_planet {
  width: 7%;
  height: 7%;
  left: 250px;
  top: -550px;
  z-index: 6;
  transition: all 1s;
}
.pink_planet:hover {
  width: 9%;
  height: 9%;
  transition: all 1s;
}

.green_planet {
  width: 12%;
  height: 12%;
  left: 500px;
  top: -500px;
  z-index: 5;
  transition: all 1s;
}
.green_planet:hover {
  width: 15%;
  height: 15%;
  transition: all 1s;
}
.red_planet{
  width: 7%;
  height: 5%;
  left: 100px;
  top: -450px;
  z-index: 4;
  transition: all 1s;
}
.red_planet:hover {
  width: 9%;
  height: 7%;
  transition: all 1s;
}
.orange_planet{
  width: 7%;
  height: 8%;
  left: 550px;
  top: -450px;
  z-index: 3;
  transition: all 1s;
}
.orange_planet:hover {
  width: 9%;
  height: 10%;
  transition: all 1s;
}
.area-logo{
  position: relative;
  width: 46%;
  height: 80%;
  left: 15%;
  bottom: 280px;
  z-index: 2;
}

</style>

