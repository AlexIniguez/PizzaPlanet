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
                dark
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
                          v-for="item in carritoIng"
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
                  <td>{{carritoIng.length}}</td>
                  <td scope="row" colspan="2">
                    <v-btn
                      color="#FDCA46" 
                      id="vaciar-carrito" 
                      style="margin: 5px;" 
                      @click="carritoIng = []"
                    >Vaciar todo</v-btn>
                  </td>
                </v-simple-table>
                <hr>
            </v-card>


            <div style="text-align:center;">
              <v-btn
                dark
                color="#D1493F"
                class="mt-5"
                @click="crearReceta();"
              >
                Continuar
              </v-btn>

            </div>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-12"
            >
              <v-card-title>Masa:</v-card-title>
              <v-card-text class="text--primary">{{nuevaPizza.masa}}</v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-title>Ingredientes:</v-card-title>
              <v-card-text class="text--primary">
                <v-list>
                  <v-list-item
                    v-for="(item, i) in nombresIngredientes"
                    :key="i"
                  >
                    <v-list-item-content v-text="item">
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            
            </v-card>
          <div style="text-align:center;">
            <v-btn
                color="#EE7035"
                dark
                @click="crearPedido(receta.idPizzaPer)"
              >
                Ordenar
            </v-btn>
          </div>

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
                  :key="item.id"
                >
                  <th scope="row">{{item.id}}</th>
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
                    color="#FDCA46" 
                    id="vaciar-carrito" 
                    style="margin: 5px;" 
                    @click="carrito = []; total.suma = 0"
                  >Vaciar todo</v-btn>
                </td>
                <td class="font-weight-bold ">$<span>{{total.suma}}</span></td>
            </v-simple-table>
            <hr>
            <v-btn class="btnpagar">Pagar</v-btn>
          </v-card>
          <div style="text-align:center;">
            <v-btn
              color="#D1493F"
              dark
              class="mt-5"
              @click="crearNuevaPizza()"
            >
              Crear otra pizza
            </v-btn>
          </div>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
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
          <v-btn dark color="#D1493F" @click="addCarrito()">Agregar al carrito</v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>

    

  </div>
</template>

<script>
  export default {
    setup(){
      const footer = document.getElementById('footer')
    },
    data: () => ({
      singleExpand: false,
      tamanioDialog: false,
      ingredientes: [],
      masas: ['Original', 'Italiana', 'Sartén', 'Orilla rellena de queso', 'Crunchy'],
      e1: 1,
      receta: {
        idPizzaPer: '',
        ingredientes: []
      },
      tamanios: [],
      tamaniosValores: [],
      nombresIngredientes: [],
      recetas: [],
      ingrediente: {},
      carritoIng: [],
      carrito: [],
      nuevaPizza: {
        precio: 120,
        masa: ''
      },

      nuevoPedido: {
        idPizzaPer: '',
        idOrden: '',
        cantidad: '',
        idTamanio: '',
        subtotal: ''
      },

      total: {
        suma: 0
      },
      
    }),

    created() {
      this.CrearOrden();
      this.getIngrediente();
      this.getTamanios();
    },

    methods: {
      async CrearOrden()
      {
        try{
          const api_data = await this.axios.post('/ordenes/nueva_orden');
          this.nuevoPedido.idOrden = api_data.data[0].id_orden;
        } catch(error){
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
        var ingre = this.carritoIng.find(element => element.nombre === this.ingrediente.nombre)
        if (!ingre) {
          this.carritoIng.push({
            nombre: this.ingrediente.nombre,
            value: this.ingrediente.id_ingrediente
          });
        }
        
      },

      borrarIng(nombreIng) {
        var idx = this.carritoIng.indexOf(this.carritoIng.find(element => element.nombre === nombreIng));
        this.carritoIng.splice(idx, 1);
      },

      getNombreIng() {
        this.receta.ingredientes.forEach(element => {
          this.nombresIngredientes.push(this.ingredientes[element - 1].nombre)
        })
      },

      async crearReceta(){
        this.e1 = 3;
        this.carritoIng.forEach(element => {
          this.receta.ingredientes.push(element.value)
        });
        try {
          await this.axios.post('/receta', this.receta);
          this.getNombreIng();
        } catch (error) {
          console.log(error)
        }
      },

      async crearPedido(id){
        this.nuevoPedido.idPizzaPer = id;        
        this.tamanioDialog = true;
      },

      async addCarrito() {
        this.nuevoPedido.subtotal = (this.nuevaPizza.precio + this.tamanios[this.nuevoPedido.idTamanio - 1].costoExtra) * this.nuevoPedido.cantidad;
        // Mandar "nuevoPedido" a tabla pedidopredeterminado INSERT INTO pedidopredeterminado (idPizzaPre, idOrden, cantidad, idTamanio, subtotal) VALUES (?) 
        try {
          await this.axios.post('/pizzaPersonalizada/nuevo_pedido', this.nuevoPedido)
        } catch(error){
          console.log(error.response)
        }
        // SELECT piz_nombre, tam_nombre FROM pizzapredeterminada, tamaniopizza WHERE id_pizzaPre=? AND id_tamanio=?
        try {
          const api_data = await this.axios.get('/pizzaPersonalizada/id_to_datos/' + this.nuevoPedido.idPizzaPer.toString() + '/' + this.nuevoPedido.idTamanio.toString());
          
          api_data.data.forEach((item) =>{
            this.carrito.push({
              id: item.id_pizzaPer,
              tamaño: item.tam_nombre,
              cantidad: this.nuevoPedido.cantidad,
              subtotal: this.nuevoPedido.subtotal
            });
          });
        } catch (error) {
          console.log(error)
        }

        this.tamanioDialog = false;
        this.CalcularTotal();        
      },

      async CalcularTotal()
      {
        try {
          const api_data = await this.axios.get('/pizzaPersonalizada/total/' + this.nuevoPedido.idOrden.toString());
          this.total = api_data.data;
        } catch (error) {
          console.log(error);
        }
      },

      crearNuevaPizza () {
        this.e1 = 1;
        this.nuevaPizza = {
          precio: 120,
          masa: ''
        };
        this.ingrediente = {};
        this.nuevoPedido.idPizzaPer = '';
        this.nuevoPedido.cantidad = '';
        this.nuevoPedido.idTamanio = '';
        this.nuevoPedido.subtotal = '';
        this.carritoIng = [];
        this.receta = {
          idPizzaPer: '',
          ingredientes: []
        };
        this.nombresIngredientes = [];
      }

      
    },
  }
</script>

<style scoped>
  .card{
    margin: 20px 10% 0px 10%;
    margin-top: 5vh;
    margin-bottom:10vh;

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
  
</style>