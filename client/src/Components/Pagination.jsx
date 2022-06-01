import React, { useState } from 'react';
import '../CSS/Pagination.css'

export default function Pagination({countriesPerPage, allCountries, paginate}) {
    const [currentPage, setCurrentPage] = useState(1);
    
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumbers.push(i);
    }
  
    return (
    <nav className='pag'>
        <div className='prev'>
                {pageNumbers.includes(currentPage - 1) && 
                    <button onClick={() => {
                        setCurrentPage(currentPage - 1);
                        paginate(currentPage - 1);
                    }} >Prev</button>}
        </div>
        <div className='botones'>
                {pageNumbers?.map(number => {
                    return(
                        <button onClick={() => {setCurrentPage(number); paginate(number)}} key={number}>{number}</button>
                        )
                    })}

        </div>
        <div className='next'>
        {pageNumbers.includes(currentPage + 1) && 
                    <button onClick={() => {
                        setCurrentPage(currentPage + 1);
                        paginate(currentPage + 1);
                    }} >Next</button>}
        </div>
    </nav>
  )
}
