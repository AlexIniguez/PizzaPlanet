<template>
  <div>
    <h1 class="text-center">Pizzas disponibles</h1>
    <v-container>
      <v-row>
        <!-- Pizza Mexicana -->
        <v-col
          v-for="(pizza, idx) in pizzas"
          :key="idx"
          cols="12"
          md="4"
          sm="6"
        >
          <v-card
            class="mx-auto"
            min-height="400px"
          >
            <v-img
              :src="getImg(idx)"
              height="200px"
            >
            </v-img>

            <v-card-title>
              {{pizza.nombre}}
            </v-card-title>

            <v-card-subtitle>
              {{pizza.descripcion}}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="#D1493F"
                text
                @click="mostrarIngredientes = !mostrarIngredientes"

              >
                Ingredientes
                <v-icon>{{ mostrarIngredientes ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
              
              <v-spacer></v-spacer>

              <v-btn
                color="#D1493F"
                text
              >
                Comprar
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="mostrarIngredientes">
                <v-divider></v-divider>

                <v-card-text>
                  {{pizza.ingredientes}}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

  export default {
    data () {
      return {

        pizzas: [],

        mostrarIngredientes: false
      }
      

    },

    created() {
      this.getPizzas();
    },

    methods: {
      async getPizzas() {
        try {
          const api_data = await this.axios.get('/pizzaPre');
          this.pizzas = api_data.data;
        } catch (error) {
          console.log(error.response)
        }
      },

      getImg(index) {
        var img = this.pizzas[index].imagen;
        var ruta = require('../assets/' + img);
        return ruta;
      }


    }

  }
</script>


