import React from "react";
import {Link} from 'react-router-dom';
import { getAllCountries } from "../Redux/Actions";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import Cards from "./Cards.jsx";
import '../CSS/Home.css';
import Pagination from "./Pagination";
import Header from "./Header";




export default function Home() {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries)

    useEffect(() =>{
        dispatch(getAllCountries());
    }, [dispatch])

    //Reseteo
    function handlerClick(e){
        e.preventDefault();
        dispatch(getAllCountries());
        setCurrentPage(1)
        alert('Page Reset')
    }

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
        <div className="All">
        <div  className="reseter">
            <button  className="reset" onClick={(e) => handlerClick(e)}>Reset App</button>
        </div>
            <div>
            <Header />
            </div>
        <div className="cards">
            {
                currentCountry.length === 0 ? (
                    <div>
                        <h2>Loading...</h2>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/b/bf/GIF_Mundo_Banderas.gif' alt='Not found' />
                    </div>
                ) :
                currentCountry.map((e) => {
                    return(
                        <div>
                    <Link to={`/countries/${e.id}`}><Cards name={e.name} image={e.image} continent={e.continent} /></Link>
                        </div>
                    );
                })
            }
        </div>
        <div className="pagination">
            <Pagination countriesPerPage={countriesPerPage} allCountries={allCountries.length} paginate={paginate} />
        </div>
        <div className="currentPage">
            <h5>You are in page: {currentPage}</h5>
        </div>
            </div>
    )
}