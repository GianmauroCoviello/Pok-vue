<!-- parte logica  -->
<script>
import AppHeader from './components/AppHeader.vue';
export default {
  components:{
    AppHeader,
  }

}
</script>

<!-- parte grafica -->
<template lang="">
	<div>
		<AppHeader/>


    
  	</div>
</template>

<!-- parte di style -->
<style lang="scss">
	*{
    	padding: 0;
		margin: 0;
		box-sizing: border-box;
  	}
	#app{
		background-color: red;
		height: 100vh;
	}



  
</style>