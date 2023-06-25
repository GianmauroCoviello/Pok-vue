<!-- parte logica -->
<script>
// importiamo lo state managment
import { store } from '../store';
export default {
    data() {
        return {
            // effettuiamo la chiamata dello store all'interno di vue tramite il return
            store,
        }
    },
    
    
}
</script>
<!-- parte grafica -->
<template lang="">
    <div>
        <!-- inseriamo la select -->
        <select name="" id="">
            <option value="">SELECTED TYPE</option>
            <!-- cicliamo la option della select prendendo dallo store l'array vuoto e inserendo al suo inerno le voci di type1 dell'API -->
            <option v-for="(type,index) in store.listType"  :key="index"
            @click="$emit('search',selectedPokemonType)">
                {{type}}

            </option>
        </select>
        
    </div>
</template>
<!-- parte style -->
<style lang="scss" scoped>
    div{
        display: flex;
        align-items: center;
        justify-content: center;


        select{
            width: 150px;
            padding: 10px;
            font-weight: 900;
            background-color: darkkhaki;
            border: none;
        }

    }
    
</style>