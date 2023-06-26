<!-- parte logica  -->
<script>
// importiamo il metodo axios
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';


// importiamo lo store managment
import { store } from './store'
// import AppProdCards from './components/AppProdCards.vue';
export default {
	components:{
		AppHeader,
		AppMain,
		


	},
	data() {
		return {
			store,
		}
	}, 
	// insriamo mounted o create
	mounted(){
        // effettuo la chiamata axios e faccio la chiamata alla variabile contenuta nello store che contiene il link API che ci serve
        axios.get(store.UrlTypeApi).then((response)=>{
            // inserisco la risposta API nell'array
            store.listTypePokemon = response.data
            console.log(response.data)
        })
		// richiamo la funzione in mounted
		this.searchType()
		
	},
	methods: {
		searchType(){
			
			//  variabile che contiene il link API  
			let myUrl = store.UrlApi
			// con questa condizione verifico se il contenuto e diverso da stringa vuota
			if (store.pokemonType !== '') {
				// se il contenuto e diverso da stringa vuota aggiungo il parametro type1 all' API
				myUrl += `&eq[type1]=${store.pokemonType}`
				
			}
			
			
			// effettuo la chiamata ad axios per popolare l'array dei pokemon
			axios.get(myUrl).then((response) => {
				store.pokemonCards = response.data.docs
				console.log(response.data)
				store.loading = false
			})
			
		}
		
	},
	
	

}
</script>

<!-- parte grafica -->
<template lang="">
	<div>
		<!-- riprendo la componente $emit -->
		<AppHeader @search="searchType" />
		<AppMain/>
  	</div>
</template>

<!-- parte di style -->
<style lang="scss">
	*{
    	padding: 0;
		margin: 0;
		box-sizing: border-box;
  	}
	body{
		background-color: rgb(196, 8, 8);
	}
 
</style>