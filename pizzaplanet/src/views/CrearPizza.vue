<template>
  <div>
    <header style="text-align: center; margin-top: 5vh"><h1>Prepara tu Pizza</h1></header>
    <v-container style="margin-top: 10vh; margin-bottom: 10vh;">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step
            :complete="e1 > 1"
            step="1"
          >
            Tipo de Masa
          </v-stepper-step>
          <v-divider></v-divider>

          <v-stepper-step
            :complete="e1 > 2"
            step="2"
          >
            Ingredientes
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">
            Receta
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="card">
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr style="background-color:#EE7035;">
                      <th style="font-size: 80px;" class="text-left titulo">
                        Masa
                      </th>
                      <th class="text-left">
                        
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <v-select
                      class="ml-5"
                      label="Escoge tu masa"
                      :items="masas"
                      v-model="nuevaPizza.masa"
                    >

                    </v-select>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>

            <div style="text-align:center;">
              <v-btn text @click="$router.push('/')">
                Atrás
              </v-btn>
              <v-btn
                :disabled="nuevaPizza.masa === ''"
                color="#D1493F"
                @click="crearPizza()"
                
              >
                Continuar
              </v-btn>

            </div>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="card">
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr style="background-color:#D1493F;">
                      <th style="font-size: 80px;" class="text-left titulo">
                        Ingredientes
                      </th>
                      <th class="text-left">
                        
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    <tr
                      v-for="item in ingredientes"
                      :key="item.nombre"              
                    >
                      <td>{{ item.nombre }}</td>
                      <td style="width:10px;"><v-btn @click="ingrediente = item; addCarritoIng()"><v-icon>mdi-plus</v-icon></v-btn></td>               
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>

            <v-card class="card carrito">
              <v-simple-table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Ingredientes</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr
                          v-for="item in carrito"
                          :key="item.id"
                        >
                          <th scope="row">{{item.nombre}}</th>
                          <th scope="row">
                            <v-btn
                              class="mx-2"
                              small
                              fab
                              dark
                              color="error"
                              @click="borrarIng(item.nombre)"
                            >
                              <v-icon>
                                mdi-close-circle
                              </v-icon>
                            </v-btn>
                          </th>
                        </tr>
                        
                    </tfoot>
                    
                </v-simple-table>

                <hr>
                <v-simple-table class="card carritoFooter">
                  <th scope="row" colspan="2">
                      Total de ingredientes
                  </th>
                  <td>{{carrito.length}}</td>
                  <td scope="row" colspan="2">
                    <v-btn
                      color="error" 
                      id="vaciar-carrito" 
                      style="margin: 5px;" 
                      @click="carrito = []"
                    >Vaciar todo</v-btn>
                  </td>
                </v-simple-table>
                <hr>
            </v-card>


            <div style="text-align:center;">
              <v-btn text @click="e1=1">
                Atrás
              </v-btn>
              <v-btn
                color="primary"
                @click="crearReceta();"
              >
                Continuar
              </v-btn>

            </div>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>
          <div style="text-align:center;">
            <v-btn text @click="e1 = 2">
              Atrás
            </v-btn>
            <v-btn
              color="primary"
              @click="e1 = 1"
            >
              Continue
            </v-btn>
          </div>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>

  </div>
</template>

<script>
  export default {
    setup(){
      const productosCarrito = document.getElementById('productosCarrito')
      const footer = document.getElementById('footer')
    },
    data: () => ({
      singleExpand: false,
      ingredientes: [],
      masas: ['Original', 'Italiana', 'Sartén', 'Orilla rellena de queso', 'Crunchy'],
      e1: 1,

      bandera1: true,
      bandera2: true,
      receta: {
        idPizzaPer: '',
        ingredientes: []
      },
      recetas: [],
      ingrediente: {},
      carrito: [],
      nuevaPizza: {
        precio: 120,
        masa: ''
      },
      
    }),

    created() {
      this.getIngrediente();
    },

    methods: {
      async getIngrediente() {
        try {
          const api_data = await this.axios.get('/ingredientes');
          this.ingredientes = api_data.data;
        } catch (error) {
          console.log(error)
        }
      },

      async crearPizza () {
        this.e1 = 2;
        try {
          const api_data = await this.axios.post('/pizzaPersonalizada', this.nuevaPizza);
          this.receta.idPizzaPer = api_data.data[0].id_pizzaPer;
        } catch (error) {
          console.log(error)
        }
      },

      addCarritoIng(){
        var ingre = this.carrito.find(element => element.nombre === this.ingrediente.nombre)
        if (!ingre) {
          this.carrito.push({
            nombre: this.ingrediente.nombre,
            value: this.ingrediente.id_ingrediente
          });
        }
        
      },

      borrarIng(nombreIng) {
        var idx = this.carrito.indexOf(this.carrito.find(element => element.nombre === nombreIng));
        this.carrito.splice(idx, 1);
      },

      async ImprimirReceta(){
        try {
          console.log((this.receta.idPizzaPer).toString());
          const api_data = await this.axios.get('/receta/', (this.receta.idPizzaPer).toString());
          this.recetas = api_data.data;
          console.log(this.recetas)
        } catch (error) {
          console.log(error);
        }
      },


      async crearReceta(){
        this.e1 = 2;
        this.carrito.forEach(element => {
          this.receta.ingredientes.push(element.value)
        });
        try {
          await this.axios.post('/receta', this.receta);
          this.ImprimirReceta();
        } catch (error) {
          console.log(error)
        }
        
      },
      
    },
  }
</script>

<style scoped>
  .card{
    margin: 20px 10% 0px 10%;
    margin-top: 5vh;
    margin-bottom:10vh;

  }
  
</style>