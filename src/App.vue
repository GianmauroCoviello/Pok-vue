<!-- parte logica  -->
<script>
// importiamo il metodo axios
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppProdCards from './components/AppProdCards.vue';

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
        
        axios.get(store.UrlTypeApi).then((response)=>{
            
            store.listTypePokemon = response.data
            console.log(response.data)
        })
		this.searchType()
	},
	methods: {
		searchType(){
			
			let myUrl = store.UrlApi
			if (store.pokemonType !== '') {
				myUrl += `&eq[type1]=${store.pokemonType}`
				
			}
			
			
			// effettuo la chiamata ad axios per popolare l'array dei pokemon
			axios.get(myUrl).then((response) => {
				store.pokemonCards = response.data.docs
				console.log(response.data)
			})
		}
		
	},
	
	

}
</script>

<!-- parte grafica -->
<template lang="">
	<div>
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