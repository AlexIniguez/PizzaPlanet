<template>
  <div>

    <v-card class="card">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr style="background-color:#EE7035;">
              <th style="font-size: 80px;" class="text-left titulo">
                Maza
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
              <td style="width:10px;"><button><v-icon>mdi-plus</v-icon></button></td>  
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
                Ingredente
              </th>
              <th class="text-left">
                
              </th>
            </tr>
          </thead>
          <tbody>
            
            <tr
              v-for="item in ingredientes"
              :key="item.name"              
            >
              <td>{{ item.name }}</td>
              <td style="width:10px;"><button><v-icon>mdi-plus</v-icon></button></td>               
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    
  </div>
</template>

<script>
  export default {
    data: () => ({
      singleExpand: false,
      ingredientes: [
        {
          name: 'Jalapeños'          
        },
        {
          name: 'Cebolla'          
        },
        {
          name: 'Aceitunas'          
        },
        {
          name: 'Champiñones'          
        },
        {
          name: 'Pimiento'          
        },
        {
          name: 'Piña'          
        },
        {
          name: 'Salsa'          
        },
        {
          name: 'Queso parmesano'          
        },
        {
          name: 'Pollo'          
        },
        {
          name: 'Salchicha'          
        },
        {
          name: 'Queso crema'          
        },
        {
          name: 'Queso Cheddar'          
        },
        {
          name: 'Jamón'          
        },
        {
          name: 'Salami'          
        },
        {
          name: 'Pepperoni'          
        },
        {
          name: 'Chorizo'          
        },
        {
          name: 'Carne molida'          
        },
        {
          name: 'Tocino'          
        },
        {
          name: 'Pastor'          
        },
        {
          name: 'Mozzarella'          
        },
      ],
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
  }
</script>

<style scoped>
  .card{
    margin: 20px 10% 0px 10%;
  }
  
</style>