<!-- parte logica  -->
<script>
// importazione componenti
import AppProdCards from './AppProdCards.vue';
export default {
    components:{
        // chiamata delle componenti
        AppProdCards,
    }
  
}
</script>

<!-- parte grafica -->
<template lang="">
  <div>
    <!-- struttura pokedex -->
    <div class="container">
        <div class="row">
            <div class="container-pokedex">
                <div class="display-pokedex">
                      <!-- componente che si occupa della creazione delle cards dei pokemon -->
                    <AppProdCards/>
                
                </div>

            </div>
        </div>
    </div>
    
  </div>
</template>

<!-- parte di style -->
<style lang="scss" scoped>
    .container{
        padding-bottom: 20px;


        
    
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
                    background-color: rgb(88, 86, 86);
                    display: flex;
                    flex-wrap: wrap;
                    height: 500px;
                   

                }
                
            }
        }
        
    }
    </style>