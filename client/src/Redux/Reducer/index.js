import { FILTER_ACTIVITY, FILTER_CONTINENT, GET_ACTIVITY, GET_COUNTRIES, GET_ID, GET_NAME, ORDER_NAME, OREDER_POPULATION, POST_ACTIVITY, GET_CONTINENT } from "../Actions";

const initialState = {
    countries: [],
    allActivities: [],
    allCountries: [],
    detail: []
}

function orderA(array, prop){
const sort = array.sort((a, b) =>{
    if(a[prop] > b[prop]) return 1;
    if(a[prop] < b[prop]) return -1;
    return 0;
})
    return sort;
}

function orderD(array, prop){
    const sort = array.sort((a, b) =>{
        if(a[prop] > b[prop]) return -1;
        if(a[prop] < b[prop]) return 1;
        return 0;
    })
        return sort;
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

        case GET_NAME:
            return{
                ...state,
                countries: action.payload
            }

        case GET_CONTINENT:
            return{
                ...state,
                countries: action.payload
            }
        
        case GET_ID:
            return{
                ...state,
                detail: action.payload
            }

        case POST_ACTIVITY:
            return{
                ...state
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
        
        case ORDER_NAME:
            const allCountriesB = [...state.allCountries];
            let sortedN = action.payload === 'asc' ?
            orderA(allCountriesB, 'name') : orderD(allCountriesB, 'name');
            return{
                ...state,
                countries: sortedN
            }

        case OREDER_POPULATION:
            const allCountriesC = [...state.allCountries];
            let sortedP = action.payload === 'Lowerest' ?
            orderA(allCountriesC, 'population') : orderD(allCountriesC, 'population');
            return{
                 ...state,
                countries: sortedP
            }
            
            default: return state
        }
}

export default rootReducer;