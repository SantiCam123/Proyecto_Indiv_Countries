import React from "react";
import { getAllCountries } from "../Redux/Actions";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import Cards from "./Cards.jsx";
import Nav from "./Nav";




export default function Home() {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries)

    useEffect(() =>{
        dispatch(getAllCountries());
    }, [dispatch])
    
    
    return(
        <div>
            <Nav />
        <div>
            {
                allCountries?.map((e) => {
                    return(
                        <fragment>
                    <Cards name={e.name} image={e.image} continent={e.continent} />
                        </fragment>
                    );
                })
            }
        </div>
            </div>
    )
}