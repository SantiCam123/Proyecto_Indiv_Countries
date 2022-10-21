import React from 'react'
import { filterCountryByActivity, filterCountryByContinent, getAllActivities, getAllCountries, orderCountryByName, orderCountryByPopulation } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import '../CSS/Header.css'

export default function Header(props) {
const dispatch = useDispatch();
const allActivities = useSelector((state) => state.allActivities)
    
      
    useEffect(() =>{
        dispatch(getAllActivities());
    }, [dispatch])
    

    function handlerFilterC(e){
        if(e.target.value === 'All') return dispatch(getAllCountries());
        dispatch(filterCountryByContinent(e.target.value))
        props.setCurrentPage(1)
    }

    function handlerFilterA(e){
        if(e.target.value ===  'All') return dispatch(getAllCountries());
        dispatch(filterCountryByActivity(e.target.value))
        props.setCurrentPage(1)
    }

    function handlerOrderN(e){
        if(e.target.value === 'All') return dispatch(getAllCountries());
        dispatch(orderCountryByName(e.target.value))
        props.setCurrentPage(1)
    }

    function handlerOrderP(e){
        if(e.target.value === 'All') return dispatch(getAllCountries());
        dispatch(orderCountryByPopulation(e.target.value))
        props.setCurrentPage(1)
    }

  return (
        <div className="options">
            <select onChange={(e) => handlerOrderN(e)}>
                <option value='All'>Sort alphabetically</option>
                <option value='asc'>A-Z</option>
                <option value='des'>Z-A</option>
            </select>
            <select className='FC' onChange={(e) => handlerFilterC(e)}>
                <option value='All'>Filter by Continent</option>
                <option value='America'>America</option>
                <option value='Europe'>Europe</option>
                <option value='Africa'>Africa</option>
                <option value='Asia'>Asia</option>
                <option value='Oceania'>Oceania</option>
                <option value='Antarctic'>Antarctic</option>
            </select>
            <select onChange={(e) => handlerFilterA(e)}>
                <option value='All'>Filter by Activity</option>
                {
                    allActivities.map((e)=>{
                        return(
                        <option key={e.id} value={e.name}>{e.name}</option>
                    )})
                }
            </select>
            <select onChange={(e) => handlerOrderP(e)}>
                <option value='All'>Sort by Population</option>
                <option value='Highest'>Highest</option>
                <option value='Lowerest'>Lowerest</option>
            </select>
            </div>
  )
}
