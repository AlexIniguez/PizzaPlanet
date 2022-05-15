<template>
  <div>
      <v-container>
          <v-row>
              <v-col>
                  <v-card color="#712D87">
                      <v-card-title class="text-center justify-center">
                          <h1>
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
                                                <v-text-field label="Cantidad a pagar $(MX)" filled rounded>
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
                                                <v-text-field label="Cantidad a pagar $(MX)" filled rounded>
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
                                  <v-card-text class="text-h5">
                                      Favor de pasar a caja
                                  </v-card-text>
                                  <v-container>
                                  <v-row align="center" justify="space-around">
                                            <v-btn class="mx-2"  dark large color="#712D87">
                                                Continuar
                                            </v-btn>
                                        </v-row>
                                  </v-container>
                              </v-card>
                          </v-tab-item>
                      </v-tabs>
                  </v-card>
                  
              </v-col>
              <v-col>
                  <h1 class="text-center"> Detalles de Orden </h1>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
export default {

}
</script>
