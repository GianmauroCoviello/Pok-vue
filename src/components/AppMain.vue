<!-- parte logica  -->
<script>
// importazione componenti
import AppProdCards from './AppProdCards.vue';
import { store } from '../store';
// importazione componente del loader
import AppLoader from './AppLoader.vue'
// import { store } from './store.js';
export default {
    components:{
        // chiamata delle componenti
        AppProdCards,
        AppLoader
    },
    data() {
        return {
            store
        }
    },
    
    
  
}
</script>

<!-- parte grafica -->
<template lang="">
  
    <!-- struttura pokedex -->
    <div class="container" v-if="store.loading === false">
        <div class="row">
            <div class="container-pokedex" >
                <div class="display-pokedex">
                    <!-- ciclo delle card -->
                    <div class="card-pokemon" v-for="(pokemon,index) in store.pokemonCards">
                        <!-- inserimento della props all'interno della componente padre -->
                        <AppProdCards :MyPokemon="pokemon"/>
                    </div>
                    
                    
                   
                </div>
                

            </div>
                
        </div>       
    </div>
    <AppLoader v-else/> 
    
</template>

<!-- parte di style -->
<style lang="scss" scoped>
    .container{
        padding-bottom: 50px;


        
    
        .row{
            width: 1170px;
            display: flex;
            margin: 0 auto;

            .container-pokedex{
                width: 100%;
                background-color: rgb(195, 191, 191);
                border-radius: 13px;
                padding: 30px 15px;
                
                


                .display-pokedex{
                    overflow-y: auto;
                    background-color: rgb(109, 104, 104);
                    display: flex;
                    flex-wrap: wrap;
                    height: 530px;


                    
                    .card-pokemon{
                        width: calc(100%/5 - 20px);
                        margin: 10px;
                        border-radius: 13px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }                

                }
                
            }
        }
        
    }
    </style>