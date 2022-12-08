<template>
    <div class="background-image">
        <v-container>
            <v-row>
                <v-col>
                    <v-card color="#712D87">
                        <v-card-title class="text-center justify-center">
                            <h1 style="color:#FFF">
                                Formas de Pago
                            </h1>
                        </v-card-title>
                        <v-tabs v-model="tab" color="#712D87" grow>
                            <v-tab> 
                                Tarjeta
                                <v-icon dark>
                                  fa-thin fa-credit-card
                                </v-icon>
                            </v-tab>
                            <v-tab-item>
                                  <v-form>
                                      <v-container>
                                          <v-row>
                                              <v-col cols="12" sm="12" >
                                                  <v-text-field label="Cantidad a pagar $(MX)" filled rounded readonly v-model="Total.suma">
                                                  </v-text-field>
                                              </v-col>
                                          </v-row>
                                          <v-row>
                                              <v-col cols="12" sm="12">
                                                  <v-text-field label="Nombre en Tarjeta" filled rounded>
                                                  </v-text-field>
                                              </v-col>
                                          </v-row>
                                          <v-row>
                                              <v-col cols="12" sm="12">
                                                  <v-text-field label="Numero de Tarjeta" maxlength="16" filled rounded>
                                                  </v-text-field>
                                              </v-col>
                                          </v-row>
                                          <v-row>
                                              <v-col cols="12" sm="6">
                                                  <v-text-field label="Fecha Vencimiento (MM-DD)" maxlength="5" filled rounded>
                                                  </v-text-field>
                                              </v-col>
                                              <v-col cols="12" sm="6">
                                                  <v-text-field label="CVV" maxlength="3" filled rounded>
                                                  </v-text-field>
                                              </v-col>
                                          </v-row>
                                          <v-row align="center" justify="space-around">
                                              <v-btn dark large class="mx-2" color="error" rounded  @click="dialog = !dialog">
                                                  Pagar
                                              </v-btn>
                                          </v-row>
                                          
                                      </v-container>
                                  </v-form>
                            </v-tab-item>
                            <v-tab> 
                                PayPal 
                                <v-icon dark>
                                    fa-brands fa-paypal
                                </v-icon>
                            </v-tab>
                            <v-tab-item>
                                <v-form>
                                    <v-container fill-height>
                                        <v-row>
                                              <v-col cols="12" sm="12" >
                                                  <v-text-field label="Cantidad a pagar $(MX)" filled rounded readonly v-model="Total.suma">
                                                  </v-text-field>
                                              </v-col>
                                          </v-row>
                                          <v-row align="center" justify="space-around">
                                              <v-btn class="mx-2" fab dark large color="#712D87" href="https://paypal.com" target="_blank">
                                                  <v-icon>
                                                      fa-brands fa-paypal
                                                  </v-icon>
                                              </v-btn>
                                          </v-row>
                                    </v-container>
                                </v-form>
                            </v-tab-item>
                            <v-tab> 
                                Efectivo 
                                <v-icon dark>
                                    fa-thin fa-money-bill
                                </v-icon>
                            </v-tab>
                            <v-tab-item>
                                <v-card class="mx-auto">
                                    <v-card-text class="text-h5" v-model="Total.suma">
                                        Favor de pasar a caja a pagar ${{ Total.suma }}
                                    </v-card-text>
                                    <v-container>
                                    <v-row align="center" justify="space-around">
                                              <v-btn class="mx-2"  dark large color="#712D87"  @click="dialog = !dialog">
                                                  Continuar
                                              </v-btn>
                                          </v-row>
                                    </v-container>
                                </v-card>
                            </v-tab-item>
                        </v-tabs>
                      <v-dialog v-model="dialog" max-width="500px">
                          <v-card>
                              <v-card-text>
                                  <p class="text-h5 text--primary">
                                      Tu metodo de pago ha sido aprobado
                                  </p>
                              </v-card-text>
                              <v-card-actions>
                                  <v-spacer>
                                  </v-spacer>
                                  <v-btn class="mx-2" dark color="#712D87" @click="dialog = false" href="/">
                                      Terminar
                                  </v-btn>
                              </v-card-actions>
                          </v-card>
                      </v-dialog>
                    </v-card>
                    
                </v-col>
                <v-col>
                    <h1 class="text-center" style="color:#FFF" > Detalles de Orden </h1>
                    <v-card class="ticket">
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
                                  v-for="item in ticketPre"
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
                              <!-- <td>{{ticketPre.length}}</td> -->
                              <td scope="row" colspan="2">
                              </td>
                              <td class="font-weight-bold ">$<span>{{Total.suma}}</span></td>
                          </v-simple-table>
                    </v-card>
                      <!-- <v-card class="card">
                          <v-simple-table class="table">
                                  <thead>
                                      <tr>
                                          <th scope="col">Fecha / Hora</th>
                                      </tr>
                                  </thead>
                                  <tfoot>
                                      <tr
                                      v-for="item in id"
                                          :key="item.id">
                                          <th scope="row">{{item.fechaHora}}</th>
                                      </tr>
                                  </tfoot>
                              </v-simple-table>
                      </v-card> -->
                </v-col>
            </v-row>
        </v-container>
    </div>
  </template>
  
  <script>
  export default {
      data(){
          return {
              dialog: false,
              ticketPre: [],
              Total:{suma:0},
              id:{}
          }
      },
  
      created(){
          this.getOrden();
          
      },
  
      methods: {
          async getOrden(){
              //------------------
              const api_data = await this.axios.get('/ticket');
              this.id = api_data.data;
              console.log(this.id.id_orden);
  
                  //Pizzas predeterminadas que están en el id X
                  // try {
                  //     const api_data = await this.axios.get('/ticket/pizzaPersonalizada/'+this.id.id_orden.toString());
                      
                  //     api_data.data.forEach((item) =>{
                  //         this.ticketPre.push({
                  //             nombre: item.piz_nombre,
                  //             tamaño: item.tam_nombre,
                  //             cantidad: this.nuevoPedido.cantidad,
                  //             subtotal: this.nuevoPedido.subtotal
                  //         });
                  //     });
                  //         //console.log(this.ticket);
                  // } catch (error) {
                  // console.log(error.response)
                  // }
              //------------------------------------------------------
              //------------------------------------------------------
                  //Pizzas personalizadas que están en el id X
                  try {
                      const api_data = await this.axios.get('/ticket/pizzaPre/'+this.id.id_orden.toString());
  
                      api_data.data.forEach((item) =>{
                          this.ticketPre.push({
                              nombre: item.p_nombre,
                              tamaño: item.nombre,
                              cantidad: item.cantidad,
                              subtotal: item.subtotal
                          });
                      });
                  } catch (error) {
                  console.log(error.response)
                  }
                  this.getTotalPredeterminadas();
              //-------------------------------------------------------
  
              
          },
          async getTotalPredeterminadas()
          {
              const api_data = await this.axios.get('/ticket/total_pre/'+this.id.id_orden.toString());
              this.Total = api_data.data;
              console.log(this.id.fechaHora)
          }
      }
  }
  </script>
  
  <style>
      .background-image {
       background-image: url('../assets/fondo.svg');
       position: relative;
      top: -5px;
      left: 0px;
      width: 110%;
      height: 110%;
       z-index: 0;
  }
  
      .ticket{
          padding: 15px;
          text-align-last: center;
      }
  
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
      padding-bottom: 10px;
      }
  </style>
  