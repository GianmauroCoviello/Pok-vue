<!-- parte logica  -->
<script>
export default {
  
}
</script>

<!-- parte grafica -->
<template lang="">
  <div>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-100">
                    <div class="point-blue">

                    </div>
                    <div class="point bg-red">
                        
                    </div>
                    <div class="point bg-yellow">
                        
                    </div>
                    <div class="point bg-green">
                        
                    </div>

                </div>
            </div>
        </div>
    </header>
    
    
  </div>
</template>

<!-- parte di style -->
<style lang="scss" scoped>
    .row{
        width: 1170px;
        display: flex;
        margin: 0 auto;

        .col-100{
            display: flex;
            padding: 30px;




            .point-blue{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                border: 2px solid white;
                background-color: blue;
                margin-right: 10px;
            }
            .point{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 2px solid white;
                background-color: blue;
                margin-right: 10px;

            }
            
            .bg-yellow{
            background-color: yellow;

            }
            .bg-green{
                background-color: green;
        
            }
            .bg-red{
                background-color: rgb(229, 52, 52);
        
            }


        }
    }
    
    
  
</style>