<template>
  <div>
    <h1 class="text-center">Pizzas disponibles</h1>
    <v-container>
      <v-row>
        <!-- Pizza Mexicana -->
        <v-col
          cols="12"
          md="4"
          sm="6"
        >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="../assets/pizzaMexicana.jpg"
              height="200px"
            ></v-img>

            <v-card-title>
              Mexicana
            </v-card-title>

            <v-card-subtitle>
              Some nice thing about this pizza
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="#D1493F"
                text
                @click="mostrarIngreMex = !mostrarIngreMex"

              >
                Ingredientes
                <v-icon>{{ mostrarIngreMex ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
              <div v-show="mostrarIngreMex">
                <v-divider></v-divider>

                <v-card-text>
                  Queso, salsa, chorizo, carne molida y chile jalapeño.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>

        <!-- Pizza al Pastor -->
        <v-col
          cols="12"
          md="4"
          sm="6"
        >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="../assets/pizzaPastor.jpg"
              height="200px"
            ></v-img>

            <v-card-title>
              Al Pastor
            </v-card-title>

            <v-card-subtitle>
              Some nice thing about this pizza
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="#D1493F"
                text
                @click="mostrarIngrePastor = !mostrarIngrePastor"

              >
                Ingredientes
                <v-icon>{{ mostrarIngrePastor ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
              <div v-show="mostrarIngrePastor">
                <v-divider></v-divider>

                <v-card-text>
                  Queso, salsa, piña, carne al pastor y cebolla.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>

        <!-- Pizza Hawaiana -->
        <v-col
          cols="12"
          md="4"
          sm="6"
        >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="../assets/pizzaHawaiana.jpg"
              height="200px"
            ></v-img>

            <v-card-title>
              Hawaiana
            </v-card-title>

            <v-card-subtitle>
              Some nice thing about this pizza
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="#D1493F"
                text
                @click="mostrarIngreHawa = !mostrarIngreHawa"

              >
                Ingredientes
                <v-icon>{{ mostrarIngreHawa ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
              <div v-show="mostrarIngreHawa">
                <v-divider></v-divider>

                <v-card-text>
                  Queso, salsa, jamón y piña.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>

        <!-- Pizza de Pepperoni -->
        <v-col
          cols="12"
          md="4"
          sm="6"
        >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="../assets/pizzaPepperoni.jpg"
              height="200px"
            ></v-img>

            <v-card-title>
              De Pepperoni
            </v-card-title>

            <v-card-subtitle>
              Some nice thing about this pizza
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="#D1493F"
                text
                @click="mostrarIngrePeppe = !mostrarIngrePeppe"

              >
                Ingredientes
                <v-icon>{{ mostrarIngrePeppe ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
              <div v-show="mostrarIngrePeppe">
                <v-divider></v-divider>

                <v-card-text>
                  Queso, salsa y pepperoni.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>

        <!-- Pizza Vegetariana -->
        <v-col
          cols="12"
          md="4"
          sm="6"
        >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="../assets/pizzaVegetariana.jpg"
              height="200px"
            ></v-img>

            <v-card-title>
              Vegetariana
            </v-card-title>

            <v-card-subtitle>
              Some nice thing about this pizza
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="#D1493F"
                text
                @click="mostrarIngreVege = !mostrarIngreVege"

              >
                Ingredientes
                <v-icon>{{ mostrarIngreVege ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
              <div v-show="mostrarIngreVege">
                <v-divider></v-divider>

                <v-card-text>
                  Queso, salsa, champiñones, cebolla, pimientos y aceitunas.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>

        <!-- Pizza Suprema -->
        <v-col
          cols="12"
          md="4"
          sm="6"
        >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="../assets/pizzaSuprema.jpg"
              height="200px"
            ></v-img>

            <v-card-title>
              Suprema
            </v-card-title>

            <v-card-subtitle>
              Some nice thing about this pizza
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="#D1493F"
                text
                @click="mostrarIngreSup = !mostrarIngreSup"

              >
                Ingredientes
                <v-icon>{{ mostrarIngreSup ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
              <div v-show="mostrarIngreSup">
                <v-divider></v-divider>

                <v-card-text>
                  Queso, salsa, pepperoni, salchicha, champiñones, cebolla y pimientos.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>

        <!-- Pizza de Salchicha -->
        <v-col
          cols="12"
          md="4"
          sm="6"
        >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="../assets/pizzaSalchicha.jpg"
              height="200px"
            ></v-img>

            <v-card-title>
              De Salchicha
            </v-card-title>

            <v-card-subtitle>
              Some nice thing about this pizza
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="#D1493F"
                text
                @click="mostrarIngreSalchi = !mostrarIngreSalchi"

              >
                Ingredientes
                <v-icon>{{ mostrarIngreSalchi ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
              <div v-show="mostrarIngreSalchi">
                <v-divider></v-divider>

                <v-card-text>
                  Queso, salsa, salchicha, pepperoni y tocino.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>

         <!-- Pizza de Carnes Frías -->
        <v-col
          cols="12"
          md="4"
          sm="6"
        >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="../assets/pizzaCarnes.jpg"
              height="200px"
            ></v-img>

            <v-card-title>
              Carnes Frías
            </v-card-title>

            <v-card-subtitle>
              Some nice thing about this pizza
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="#D1493F"
                text
                @click="mostrarIngreCarne = !mostrarIngreCarne"

              >
                Ingredientes
                <v-icon>{{ mostrarIngreCarne ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
              <div v-show="mostrarIngreCarne">
                <v-divider></v-divider>

                <v-card-text>
                  Queso, salsa, pepperoni, salami y jamón.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>

        <!-- Pizza Honolulu -->
        <v-col
          cols="12"
          md="4"
          sm="6"
        >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="../assets/pizzaHonolulu.png"
              height="200px"
            ></v-img>

            <v-card-title>
              Honolulu
            </v-card-title>

            <v-card-subtitle>
              Some nice thing about this pizza
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="#D1493F"
                text
                @click="mostrarIngreHono = !mostrarIngreHono"

              >
                Ingredientes
                <v-icon>{{ mostrarIngreHono ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
              <div v-show="mostrarIngreHono">
                <v-divider></v-divider>

                <v-card-text>
                  Queso, salsa, jamón, piña, tocino y chile jalapeño.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>

        <!-- Pizza 4 Quesos -->
        <v-col
          cols="12"
          md="4"
          sm="6"
        >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="../assets/pizza4Quesos.jpg"
              height="200px"
            ></v-img>

            <v-card-title>
              Cuatro Quesos
            </v-card-title>

            <v-card-subtitle>
              Some nice thing about this pizza
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="#D1493F"
                text
                @click="mostrarIngreQuesos = !mostrarIngreQuesos"

              >
                Ingredientes
                <v-icon>{{ mostrarIngreQuesos ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
              <div v-show="mostrarIngreQuesos">
                <v-divider></v-divider>

                <v-card-text>
                  Salsa, queso crema, queso mozzarella, queso parmesano y queso cheddar.
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
    data: () => ({
      mostrarIngreMex: false,
      mostrarIngrePastor: false,
      mostrarIngreHawa: false,
      mostrarIngrePeppe: false,
      mostrarIngreVege: false,
      mostrarIngreSup: false,
      mostrarIngreSalchi: false,
      mostrarIngreCarne: false,
      mostrarIngreHono: false,
      mostrarIngreQuesos: false

    }),

  }
</script>


