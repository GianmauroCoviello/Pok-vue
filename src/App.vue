<!-- parte logica  -->
<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
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
	mounted(){
		axios.get(store.apiType1).then((response) => {
		store.listType = response.data
		console.log(response.data)
		})
	}
	

}
</script>

<!-- parte grafica -->
<template lang="">
	<div>
		<AppHeader/>
		<AppMain/>
		<!-- <AppProdCards/> -->
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