<script>
// importiamo il metodo axios per l'API
import axios from 'axios';

export default {
    data(){
        return{
            // inseriamo l'array vuoto che conterrà il response dell'API
            cardsPokemon:[],

        }
    },
    mounted(){
        // inseriamo il link per API all'interno di axios tramite il metodo get 
        axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?eq[type1]=Electric&sort[number]=desc').then((response)=>{
            // inseriamo all'interno dell'array vuoto il response dell'API prendendo solamente docs che rappresenta all'interno del object l'array che ci serve
            this.cardsPokemon = response.data.docs
            console.log(response.data)
        })
        
    }
    
}
</script>

<template lang="">
    <!-- ciclo delle card pokemon -->
    <div class="card-pokemon" v-for="(pokemon,index) in cardsPokemon">
        <!-- inseriamo all'interno della card le proprietà dell array -->
        <div class="content-img-pokemon">
            <img :src="pokemon.imageUrl"> <!--link dell'immagine-->
        </div>
        <p>{{pokemon.generation}}</p> <!--numero della generazione del pokemon-->
        <p><strong>{{pokemon.name}}</strong></p> <!--nome del pokemon-->
        <p>{{pokemon.type1}}</p>  <!--type del pokemon-->
        
    </div>
</template>


<style lang="scss" >
    
    .card-pokemon{
        width: calc(100%/5 - 20px);
        padding: 20px 0;
        background-color: rgb(149, 77, 77);
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

    
</style>