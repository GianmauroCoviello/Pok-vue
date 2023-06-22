<!-- parte logica  -->
<script>
export default {
  
}
</script>

<!-- parte grafica -->
<template lang="">
  <div>
    <div class="container">
        <div class="row">
            <div class="container-pokedex">
                <div class="display-pokedex">

                </div>

            </div>
        </div>
    </div>
    
  </div>
</template>

<!-- parte di style -->
<style lang="scss" scoped>
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
                height: 400px;
                background-color: rgb(88, 86, 86);

            }
            


        }
    }
    
  
</style>