import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_ACTIVITY = 'GET_ACTIVITY';
export const FILTER_CONTINENT = 'FILTER_CONTINENT';
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY';

export function getAllCountries(){
    return async function(dispatch){
        const json = await axios.get('http://localhost:3001/countries');
        return dispatch({
            type: GET_COUNTRIES,
            payload: json.data
        })
    }
};

export function getAllActivities(){
    return async function(dispatch){
        const json= await axios.get('http://localhost:3001/activity');
        return dispatch({
            type: GET_ACTIVITY,
            payload: json.data
        })
    }
}

export function filterCountryByContinent(continent){
    return{
        type: FILTER_CONTINENT,
        payload: continent
    }
}

export function filterCountryByActivity(activities){
    return{
        type: FILTER_ACTIVITY,
        payload: activities
    }
}