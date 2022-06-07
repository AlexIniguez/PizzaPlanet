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
            <tr
              v-for="item in masas"
              :key="item.name"
            >
              <td >{{ item.name }}</td>
              <td style="width:10px;">
                <v-btn @click="addCarritoMasa(item.name)" @click.stop="dialog = true"><v-icon>{{myIcon1}}</v-icon>
                </v-btn>
              </td>  
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="card">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr style="background-color:#D1493F;">
              <th style="font-size: 80px;" class="text-left titulo">
                Ingredente
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
              <td style="width:10px;"><v-btn @click="addCarritoIng(item.id_ingrediente)"><v-icon>{{ myIcon1 }}</v-icon></v-btn></td>               
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
     <div style="text-align:center;">
        <v-btn text @click="e1=1">
          Atrás
        </v-btn>
        <v-btn
          color="primary"
          @click="submitIngredientes(); ImprimirReceta()"
        >
          Continue
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
<v-dialog
      v-model="dialog"
    width="400px"
    height="500px"
    >
      <v-card style="text-align:center;">
        <v-card-title class="text-h5" style="text-align:center;">
          Masa Escogida
        </v-card-title >
          <v-container style="width:300px; height: 100px; margin-left:0px;"  >
            La masa que se escogio es {{ masaEscogida }}
          </v-container>

        <v-card-text>
          
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Cancelar
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false; submitMasa();"
            
          > Aceptar
            
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    
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
          id: 1,
          name: 'Original'
        },
        {
          id: 2,
          name: 'Italiana'
        },
        {
          id:3,
          name: 'Sartén'
        },
        {
          id:4,
          name: 'Orilla rellena de queso'
        },
        {
          id:5,
          name: 'Crunchy'
        }
      ],
      e1:1,
      myIcon1: 'mdi-plus',
      myIcon2: 'mdi-minus',
      form1: {
        "masa" : "",
        "precio": 230.5
      },
      bandera1: true,
      bandera2: true,
      idPizza : 0,
      PizzaReceta: [],
      form2: [],
      dialog: false,
      masaEscogida: ''
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

      addCarritoMasa(masa2) {
            this.form1.masa = masa2;
            this.masaEscogida = masa2;
            this.bandera1=false;
      },
      submitMasa(){
          this.axios.post("http://localhost:3000/pizzaPersonalizada", this.form1)
            .then(data => {
              console.log(data)
              this.idPizza =  data.data[0].id_pizzaPer;
            })

        this.e1 = 2
      },
      addCarritoIng(idIngrediente){
        const obj = {"idPizzaPersonalizada" : idIngrediente};
        this.form2.push(obj);
      },
      submitIngredientes(){
        console.log("idPizza", this.idPizza)
        console.log("form2", this.form2)

        let ruta = `http://localhost:3000/receta/${this.idPizza}`
        this.axios.post(ruta, this.form2)
            .then(data => {
              console.log(data)
              //this.idPizza =  data.data[0].id_pizzaPer;
            });
        this.e1 = 3;
      },
      async ImprimirReceta(){
        try {
          var vue = this
          var route = '/receta/' + vue.idPizza;
          let api_data2 = await vue.axios.get(route);
          console.log("Receta : ", api_data2);
        } catch (error) {
          console.log(error);
        }
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
  
</style>