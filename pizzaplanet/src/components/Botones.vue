<template>
  <v-container>
    <v-row
      tm="3"
      align="center"
      justify="space-around"
      
    >
      <v-btn
       @click="$router.push('menu')"
        block
        color="#D1493F"
        elevation="9"
        x-largeS
      >Ordena ahora</v-btn>
    </v-row>
    <v-row
      class ="mt-12"
      align="center"
      justify="space-around"
    >
      <v-btn
       @click="$router.push('crear')"
        block
        color="#EE7035"
        elevation="9"
        x-largeS
      >Crea tu pizza</v-btn>
    </v-row>
  </v-container> 
</template>

<script>
export default {
    name:'Botones'
}
</script>
