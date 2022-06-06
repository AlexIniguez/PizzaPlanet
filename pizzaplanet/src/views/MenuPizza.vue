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
                @click="crearPedido(pizza.id_pizzaPre)"
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

    <v-dialog
      v-model="tamanioDialog"
      width="500"
    >
      <v-card>
        <v-card-title>Detalles</v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <v-select
                :items="tamaniosValores"
                label="Tamaño"
                v-model="nuevoPedido.idTamanio"
              ></v-select>
            </v-col>
            <v-col>
              <v-text-field
                label="Cantidad"
                v-model="nuevoPedido.cantidad"
                type="number"
              >
              </v-text-field>
            </v-col>
          </v-row>
          
        </v-card-text>

        <v-card-actions>
          <v-btn @click="addCarrito()">Agregar al carrito</v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>

    <v-card class="card">
      <v-simple-table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Aciones</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tfoot>
                <tr
                v-for="item in carrito"
                      :key="item.id">
                      <th scope="row">{{item.id_pizzaPre}}</th>
                      <td>{{item.nombre}}</td>
                      <td>{{item.cantidad}}</td>
                      <td>{{item.precio}}</td>
                      <td>
                          <v-btn class="bot">+</v-btn>
                          <v-btn class="bot">-</v-btn>
                      </td>
                      <td>
                          $ <span>500</span>
                      </td>
                  </tr>
            </tfoot>
        </v-simple-table>
    </v-card>

  </div>
</template>

<script>

  export default {
    data () {
      return {
        pizzas: [],
        tamanios: [],
        tamaniosValores: [],
        ordenes: [],
        carrito:[
          {id_pizzaPre:1,nombre:"Mexicana",cantidad: 1, descripcion:"Elaborada con los ingredientes habituales de la cocina mexicana.",ingredientes:"Queso, salsa,\n\t\t\t\tchorizo, carne molida y chile jalapeño",imagen:"pizzaMexicana.jpg",precio:100}
        ],
        mostrarIngredientes: false,
        tamanioDialog: false,

        nuevoPedido: {
          id_pizzaPre: '',
          idOrden: '',
          cantidad: '',
          idTamanio: '',
          subtotal: ''
        }
      }
    },

    created() {
      this.getPizzas();
      this.CrearOrden();
      this.getTamanios();
      this.getOrdenes();
    },

    methods: {
      async CrearOrden()
      {
        try{
          await this.axios.post('/ordenes/nueva_orden');
        } catch(error){
          console.log(error.response)
        }
      },

      async getOrdenes() {
        try {
          const api_data = await this.axios.get('/ordenes');
          this.ordenes = api_data.data;
        } catch (error) {
          console.log(error.response)
        }
      },

      async getPizzas() {
        try {
          const api_data = await this.axios.get('/pizzaPre');
          this.pizzas = api_data.data;
        } catch (error) {
          console.log(error.response)
        }
      },

      async crearPedido(id){
        this.nuevoPedido.id_pizzaPre = id;
        this.nuevoPedido.idOrden = this.ordenes[this.ordenes.length - 1].id_orden;
        this.tamanioDialog = true;

        
      },

      async addCarrito() {
        this.nuevoPedido.subtotal = (this.pizzas[this.nuevoPedido.id_pizzaPre - 1].precio + this.tamanios[this.nuevoPedido.idTamanio - 1].costoExtra) * this.nuevoPedido.cantidad;
        console.log(this.nuevoPedido);
        // Asignarle a "objeto" el valor de: SELECT * FROM pizzapredeterminada WHERE id_pizzaPre=id
      },

      async getTamanios()
      {
        //Obtener id del tamaño y retornarlo 
        try {
          const api_data = await this.axios.get('/tamanios');
          this.tamanios = api_data.data;
          api_data.data.forEach(item => {
            this.tamaniosValores.push({
              text: item.nombre,
              value: item.id_tamanio
            });
          });
        } catch (error) {
          console.log(error.response);
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

<style scoped>
  .card{
    margin: 20px 10% 0px 10%;
  }
  
  .bot{
    padding: 5px;
    color: red;
  }

</style>

