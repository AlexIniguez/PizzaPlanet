<template>
  <div>
    <h1 class="text-center">Pizzas disponibles</h1>
    <v-container>
      <v-row>
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
              {{pizza.piz_nombre}}
              <div class="ml-5 text-subtitle-1">
                ${{pizza.precio}}
              </div>
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
          <v-spacer></v-spacer>
          <v-btn color="error" @click="addCarrito()">Agregar al carrito</v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>

    <v-card class="card carrito">
      <v-simple-table class="table">
            <thead>
                <tr>
                    <th scope="col">Pizza</th>
                    <th scope="col">Tamaño</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                </tr>
            </thead>
            <tfoot>
                <tr
                v-for="item in carrito"
                      :key="item.id">
                      <th scope="row">{{item.nombre}}</th>
                      <td>{{item.tamaño}}</td>
                      <td>{{item.cantidad}}</td>
                      <td>
                          $ <span>{{item.subtotal}}</span>
                      </td>
                  </tr>
            </tfoot>
        </v-simple-table>
        <hr>
        <v-simple-table class="card carritoFooter">
          <th scope="row" colspan="2">
              Total de productos
          </th>
          <td>{{carrito.length}}</td>
          <td scope="row" colspan="2">
            <v-btn
              color="error" 
              id="vaciar-carrito" 
              style="margin: 5px;" 
              @click="vaciarCarrito()"
            >Vaciar todo</v-btn>
          </td>
          <td class="font-weight-bold ">$<span>{{Total.suma}}</span></td>
        </v-simple-table>
        <hr>
        <v-btn class="btnpagar" @click="$router.push('/pagarPred')">Pagar</v-btn>
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
        carrito:[],
        vacio:[],
        mostrarIngredientes: false,
        tamanioDialog: false,
        Total:{
          suma: 0
        },
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

      async getTamanios()
      {
        //Obtener id del tamaño y retornarlo 
        try {
          const api_data = await this.axios.get('/tamanios');
          this.tamanios = api_data.data;
          api_data.data.forEach(item => {
            this.tamaniosValores.push({
              text: item.tam_nombre + " + $" + item.costoExtra,
              value: item.id_tamanio
            });
          });
        } catch (error) {
          console.log(error.response);
        }
      },

      async crearPedido(id){
        this.nuevoPedido.id_pizzaPre = id;
        this.nuevoPedido.idOrden = this.ordenes[this.ordenes.length - 1].id_orden;
        this.tamanioDialog = true;
      },

      async addCarrito() {
        this.nuevoPedido.subtotal = (this.pizzas[this.nuevoPedido.id_pizzaPre - 1].precio + this.tamanios[this.nuevoPedido.idTamanio - 1].costoExtra) * this.nuevoPedido.cantidad;

        // Mandar "nuevoPedido" a tabla pedidopredeterminado INSERT INTO pedidopredeterminado (idPizzaPre, idOrden, cantidad, idTamanio, subtotal) VALUES (?) 
        try{
          await this.axios.post('/pizzaPre/nuevo_pedido', this.nuevoPedido)
        }catch(error){
          console.log(error.response)
        }
        // SELECT piz_nombre, tam_nombre FROM pizzapredeterminada, tamaniopizza WHERE id_pizzaPre=? AND id_tamanio=?
        try {
          const api_data = await this.axios.get('/pizzaPre/id_to_datos/'+this.nuevoPedido.id_pizzaPre.toString()+'/'+this.nuevoPedido.idTamanio.toString());
          
          api_data.data.forEach((item) =>{
            this.carrito.push({
                nombre: item.piz_nombre,
                tamaño: item.tam_nombre,
                cantidad: this.nuevoPedido.cantidad,
                subtotal: this.nuevoPedido.subtotal
              });
          });
            console.log(this.carrito);
        } catch (error) {
          console.log(error.response)
        }

        this.CalcularTotal();
        this.tamanioDialog = false;
        this.nuevoPedido = {};
      },

      async vaciarCarrito()
      {
        this.carrito = this.vacio;
        
      },

      async CalcularTotal()
      {
        const api_data = await this.axios.get('/pizzaPre/total/'+this.nuevoPedido.idOrden.toString());
        this.Total = api_data.data;
        console.log(this.Total)
      },

      getImg(index) {
        var img = this.pizzas[index].imagen;
        var ruta = require('../assets/' + img);
        return ruta;
      },


    }

  }
</script>

<style scoped>
  .card{
    margin: 20px 10% 0px 10%;
  }

  .carrito{
    margin-bottom: 0px;
    align-content: center;
  }

  .carritoFooter{
    margin-top: 20px;
    margin-bottom: 20px;
    align-content: center;
  }

  .btnpagar{
    margin: 20px;
    }

</style>

