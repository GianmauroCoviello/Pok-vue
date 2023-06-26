<!-- parte logica  -->
<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
           
            
        }
    },
    
    
   
}
</script>

<!-- parte grafica -->
<template lang="">
  <div>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-100">
                    <div class="point-blue">

                    </div>
                    <div class="point bg-red">
                        
                    </div>
                    <div class="point bg-yellow">
                        
                    </div>
                    <div class="point bg-green">
                        
                    </div>
                    
                </div>
                <div class="container-select">
                    <!-- inseriamo la select con il v-model che riprenderà la variabile vuota nello store -->
                    <select  v-model="store.pokemonType">
                        <option value="">SELECT TYPE</option>
                        <!-- ciclo le option indicando il type dei pokemon e inserendoli nell'array vuoto di riferimento in store  -->
                        <option v-for="(type,index) in store.listTypePokemon " :key="index" @click="$emit('search')">{{type}}</option>
                    </select>
                </div>
                
            </div>
        </div>
    </header>
    
    
  </div>
</template>

<!-- parte di style -->
<style lang="scss" scoped>
    .row{
        width: 1170px;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;

        .col-100{
            display: flex;
            padding: 30px;
            

            




            .point-blue{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                border: 2px solid white;
                background-color: blue;
                margin-right: 10px;
                background: linear-gradient(332deg, rgb(64, 54, 243) 0%, rgb(45, 45, 219) 30%, rgba(255, 255, 255, 1) 100%);
            }
            .point{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 2px solid white;
                background-color: blue;
                margin-right: 10px;
                

            }
            
            .bg-yellow{
            background-color: yellow;
            background: linear-gradient(150deg, rgba(255, 255, 255, 1) 22%, rgba(238, 246, 3, 1) 64%, rgba(251, 255, 1, 1) 98%);

            }
            .bg-green{
                background-color: green;
                background: linear-gradient(150deg, rgba(255, 255, 255, 1) 22%, rgba(46, 246, 3, 1) 64%, rgba(8, 101, 0, 1) 94%);

        
            }
            .bg-red{
                background-color: rgb(229, 52, 52);
                background: linear-gradient(150deg, rgba(255, 255, 255, 1) 7%, rgba(246, 3, 3, 1) 64%, rgba(108, 1, 1, 1) 98%);
        
            }

            


        }
    }
    
    
  
</style>