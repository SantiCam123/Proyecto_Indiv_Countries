import React from "react";
import { getAllCountries } from "../Redux/Actions";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import Cards from "./Cards.jsx";
import Nav from "./Nav";
import '../CSS/Home.css';
import Pagination from "./Pagination";




export default function Home() {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries)

    useEffect(() =>{
        dispatch(getAllCountries());
    }, [dispatch])
    
    //Paginado
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(9);
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountry = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    
    return(
        <div>
            <div>
            <Nav />
            </div>
        <div className="cards">
            {
                currentCountry?.map((e) => {
                    return(
                        <div>
                    <Cards name={e.name} image={e.image} continent={e.continent} />
                        </div>
                    );
                })
            }
        </div>
        <div className="pagination">
            <Pagination countriesPerPage={countriesPerPage} allCountries={allCountries.length} paginate={paginate} />
        </div>
        <h5>You are in page: {currentPage}</h5>
            </div>
    )
}