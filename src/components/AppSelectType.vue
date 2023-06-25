
<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    
}
</script>

<template lang="">
    <div>
        <select name="" id="">
            <option value="">selected type</option>
            <option v-for="(type,index) in store.listType"  :key="index">
                {{type}}

            </option>
        </select>
        
    </div>
</template>

<style lang="scss" scoped>
    div{
        display: flex;
        align-items: center;
        justify-content: center;


        select{
            width: 100px;
        }

    }
    
</style>