<script>

// importazione componenti
import { store } from '../store'


export default {
    // richiamo della props nella componente figlia
    props:{
        MyPokemon: Object, // indica che il props è un oggetto
    },
    data(){
        return{
            
            store,

        }
    },
    // insere il computed con la funzione da richiamare
    computed:{
        // funzione che restituira i suoi specifici colori alle determinate card in base al loro type1
        cardsPokemonColor(){
            return  this.MyPokemon.color.toLowerCase()

        }
    }
    
   
    
    
}
</script>

<template lang="">
    <div class="color-card" :style="{ 'background-color': cardsPokemonColor }">
        <div class="content-img-pokemon">
            <img :src="MyPokemon.imageUrl" alt="">
        </div>
        <p>{{ MyPokemon.number }}</p>
        <h3>{{ MyPokemon.name }}</h3>
        <p>{{ MyPokemon.type1 }}</p>
    </div>   
    
</template>


<style lang="scss" scoped>
    
    .color-card{
        width: 100%;
        height: 100%;
        padding: 30px 0;
        // margin: 10px;
        border-radius: 13px;
        display: flex;
        flex-direction: column;
        align-items: center;
                    

        .content-img-pokemon{
            width: 150px;
            height: 150px;
            border-radius: 50%;
            

            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                
            }
            
        }

        p{
            margin-top: 10px;
            color: white;
            font-weight: bold;
        }
        h3{
            margin-top: 10px;
            color: white;
            font-weight: bold;

        }
    }   
    
    
</style>