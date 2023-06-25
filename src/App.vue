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
		// inseriamo la variabile contenuta nello state managment(store) che contiene il link dell'API che richiami solamente il type1
		axios.get(store.apiType1).then((response) => {
		// inseriamo all'interno della variabile contenente l'array vuoto il response e il data dell'API formando cosi un nuovo array che conterrà le singole voci di type1
		store.listType = response.data
		console.log(response.data)
		})
	},
	
	

}
</script>

<!-- parte grafica -->
<template lang="">
	<div>
		<AppHeader />
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