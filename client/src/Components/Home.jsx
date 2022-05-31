import React from "react";
import { getAllCountries } from "../Redux/Actions";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';




export default function Home() {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countires)

    useEffect(() =>{
        dispatch(getAllCountries());
    })
    
    
    return(
        <div>
            <h1>Henry´s Travel</h1>
        </div>
    )
}