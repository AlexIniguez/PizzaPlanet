<template>
  <v-app>
      <v-main>  
        <div id="app">
          <Slider />
        </div>
    
        <v-container class ="mt-12">
          <Botones />
        </v-container>
      </v-main>
  </v-app>
</template>

<script>
  import Slider from "../components/Slider.vue";
  import Botones from "../components/Botones.vue";

  export default {
    name: 'Home',

    components: {
      Botones,
      Slider
    },
  }
</script>
