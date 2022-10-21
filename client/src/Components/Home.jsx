import React from "react";
import {Link} from 'react-router-dom';
import { getAllCountries } from "../Redux/Actions";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import Cards from "./Cards.jsx";
import Nav from "./Nav.jsx";
import '../CSS/Home.css';
import Pagination from "./Pagination";
import Header from "./Header";
import Swal from 'sweetalert2';




export default function Home() {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries)

    useEffect(() =>{
        dispatch(getAllCountries());
    }, [dispatch])

    //Reseteo
    function handlerClick(e){
        Swal.fire({
            title: 'The page will reset',
            text: "Are you sure you want to do it?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, reset the page'
        }).then((result) => {
            if (result.isConfirmed){
                e.preventDefault();
                dispatch(getAllCountries());
                setCurrentPage(1)
                Swal.fire({
                    title: 'Reset complete',
                    icon: 'success'
            })
            }
        })
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
            <div>
                <Nav setCurrentPage={setCurrentPage} />
            </div>
        <div  className="reseter">
            <button  className="reset" onClick={(e) => handlerClick(e)}>Reset App</button>
        </div>
            <div>
            <Header setCurrentPage={setCurrentPage} />
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
            </div>
    )
}