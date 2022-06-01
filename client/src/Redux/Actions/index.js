import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const FILTER_CONTINENT = 'FILTER_CONTINENT';

export function getAllCountries(){
    return async function(dispatch){
        const json = await axios.get('http://localhost:3001/countries', {});
        return dispatch({
            type: GET_COUNTRIES,
            payload: json.data
        })
    }
};

export function filterCountryByContinent(continent){
    return{
        type: FILTER_CONTINENT,
        payload: continent
    }
}


