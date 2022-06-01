import { FILTER_CONTINENT, GET_COUNTRIES } from "../Actions";

const initialState = {
    countries: [],
    activities: [],
    allCountries: []
}

function rootReducer(state=initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return{
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        
        case FILTER_CONTINENT:
            const allCountries = [...state.allCountries];
            const stateContinent = allCountries.filter(c => c.continent?.includes(action.payload))
            return{
                ...state,
                countries: stateContinent
            }
        
            
            default: return state
        }
}

export default rootReducer;