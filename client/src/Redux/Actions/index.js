import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_ACTIVITY = 'GET_ACTIVITY';
export const FILTER_CONTINENT = 'FILTER_CONTINENT';
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY';
export const ORDER_NAME = 'ORDER_NAME';
export const OREDER_POPULATION = 'ORDER_POPULATION';
export const GET_NAME = 'GET_NAME';
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const GET_ID = 'GET_ID';


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

export function getNameCountries(name){
    return async function(dispatch){
        try {
        const json= await axios.get('http://localhost:3001/countries?name=' + name);
        return dispatch({
            type: GET_NAME,
            payload: json.data
        })
        } catch (error) {
        console.log(error)
        }
    }
}

export function getDetail(id){
    return async function(dispatch){
        try {
            var json = await axios.get('http://localhost:3001/countries/' + id);
            return dispatch({
                type: GET_ID,
                payload: json.data 
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function postAvtivity(payload){
    return async function(dispatch){
        try {
            const json = await axios.post('http://localhost:3001/activity', payload);
            return json
        } catch (error) {
            console.log(error)
            alert(error)
        }
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

export function orderCountryByName(order){
    return{
        type: ORDER_NAME,
        payload: order
    }
}

export function orderCountryByPopulation(order){
    return{
        type: OREDER_POPULATION,
        payload: order
    }
}