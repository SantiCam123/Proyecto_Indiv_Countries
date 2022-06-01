import { FILTER_ACTIVITY, FILTER_CONTINENT, GET_ACTIVITY, GET_COUNTRIES } from "../Actions";

const initialState = {
    countries: [],
    allActivities: [],
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
        
        case GET_ACTIVITY:
            return{
                ...state,
                allActivities: action.payload
            }
        
        case FILTER_CONTINENT:
            const allCountries = [...state.allCountries];
            const stateContinent = allCountries.filter(c => c.continent?.includes(action.payload))
            return{
                ...state,
                countries: stateContinent
            }
        
        case FILTER_ACTIVITY:
            const allCountriesA = [...state.allCountries];
            const stateActivity = allCountriesA.filter(a => a.activities?.filter(n => n.name === action.payload).length > 0)
            return{
                ...state,
                countries: stateActivity
            }
            
            default: return state
        }
}

export default rootReducer;