// STATE MANAGMENT
import { reactive } from "vue";

export const store = reactive({
    // array che contiene le card dei pokemon
    pokemonCards: [],
    // api che prende tutti i pokemon
    UrlApi: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/?per=1050',

    // variabile che contiene stringa vuota per le voci della select
    pokemonType: '',
    // API che contiene solo i type1
    UrlTypeApi: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1',
    // array che conterrà le voci delle option date dalla API dei type1
    listTypePokemon: [],

    // bonus
    loading: true

})