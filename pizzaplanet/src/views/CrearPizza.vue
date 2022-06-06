<template>
  <div>

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
            <tr
              v-for="item in masas"
              :key="item.name"
            >
              <td>{{ item.name }}</td>
              <td style="width:10px;"><v-btn @click="addCarritoMasa()"><v-icon>mdi-plus</v-icon></v-btn></td>  
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>

    <v-card class="card">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr style="background-color:#D1493F;">
              <th style="font-size: 80px;" class="text-left titulo">
                Ingrediente
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
              <td style="width:10px;"><v-btn @click="addCarritoIng()"><v-icon>mdi-plus</v-icon></v-btn></td>               
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    
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
            <tbody id="productosCarrito">
            </tbody>
            <tfoot>
                <tr id="footer">
                    <th scope="row" colspan="5" class="text-center">
                        Carrito vacío
                    </th>
                </tr>
            </tfoot>
        </v-simple-table>
    </v-card>

    <v-card class="card">
      <template>
        <tr>
              <th scope="row">id</th>
              <td>Cafe</td>
              <td>Cantidad</td>
              <td>1000</td>
              <td>1</td>
              <td>
                  <button class="btn btn-info btn-sm">+</button>
                  <button class="btn btn-danger btn-sm">-</button>
              </td>
              <td>
                  $ <span>500</span>
              </td>
          </tr>
      </template>
    </v-card>
    

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
      masas: [
        {
          name: 'Original'
        },
        {
          name: 'Italiana'
        },
        {
          name: 'Sartén'
        },
        {
          name: 'Orilla rellena de queso'
        },
        {
          name: 'Crunchy'
        }
      ],
    }),

    created() {
      this.getIngrediente();
    },

    methods: {
      async getIngrediente() {
        try {
          const api_data = await this.axios.get('/ingredientes');
          console.log(api_data);
          this.ingredientes = api_data.data;
          console.log(productosCarrito);
        } catch (error) {
          console.log(error.response)
        }
      },

      async addCarritoMasa() {
        console.log("Hola");
      },

      async addCarritoIng(){
        console.log("Hola2");
      }
      },
  }
</script>

<style scoped>
  .card{
    margin: 20px 10% 0px 10%;
  }
  
</style>