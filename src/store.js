// STATE MANAGMENT
import { reactive } from "vue";

export const store = reactive({
    pokemonCards: [],
    UrlApi: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/?per=1050',

    pokemonType: '',
    UrlTypeApi: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1',
    listTypePokemon: []

})