<script>
// importiamo il metodo axios per l'API
import axios from 'axios';
import { store } from '../store';

export default {
    data(){
        return{
            
            store,

        }
    },
    // mounted(){
        
    //     axios.get(store.UrlApi).then((response)=>{
            
    //         store.pokemonCards = response.data.docs
    //         console.log(response.data)
    //     })
	// }
   
    
    
}
</script>

<template lang="">
    <!-- ciclo delle card pokemon -->
    <div class="card-pokemon" v-for="(pokemon,index) in store.pokemonCards" :class="pokemon.type1 === 'Grass' ? 'grass' : pokemon.type1 === 'Fire' ? 'fire' : pokemon.type1 === 'Water' ? 'water' : ''">
        <!-- inseriamo all'interno della card le proprietà dell array -->
        <div class="content-img-pokemon">
            <img :src="pokemon.imageUrl"> <!--link dell'immagine-->
        </div>
        <p>{{pokemon.number}}</p> <!--numero della generazione del pokemon-->
        <p><strong>{{pokemon.name}}</strong></p> <!--nome del pokemon-->
        <p>{{pokemon.type1}}</p>  <!--type (fuoco, acqua, terra ecc..) del pokemon-->
        
    </div>
</template>


<style lang="scss" >
    
    .card-pokemon{
        width: calc(100%/5 - 20px);
        padding: 20px 0;
        margin: 10px;
        border-radius: 13px;
        display: flex;
        flex-direction: column;
        align-items: center;


        .content-img-pokemon{
            width: 120px;
            height: 120px;
            border-radius: 50%;
            

            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                
            }
            
        }

        p{
            margin-top: 10px;
        }
        
    }
    .fire{
        background-color: rgb(253, 89, 89);
    }
    .grass{
        background-color: rgb(164, 255, 118);
    }
    .water{
        background-color: rgb(105, 193, 255);
        
    }
    
</style>