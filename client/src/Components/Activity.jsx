import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCountries } from '../Redux/Actions';

export default function Activity() {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries)

    useEffect(() => {
        dispatch(getAllCountries())
    }, [dispatch])

  return (
    <div>
        {
           allCountries.activities && allCountries.activities.map((a)=> {
               return (
                   <div>
                       <span>Name: {a.name}</span>
                   </div>
               )
           })
        }
    </div>
  )
}
