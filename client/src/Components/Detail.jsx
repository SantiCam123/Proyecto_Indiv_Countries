import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../Redux/Actions';
import { useEffect } from 'react';
import '../CSS/Detail.css'

export default function Detail(props) {
    const dispatch = useDispatch();
    const myCountry = useSelector((state) => state.detail)
    const id = props.match.params.id


    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

    console.log(myCountry)

  return (
    <div>
        {
            myCountry[0]?.id === id ? (
                <div>
                    <div>
                   <h1>Welcome to {myCountry[0].name}</h1>
                   <img src={myCountry[0].image} alt='Not found'/>
                   </div>
                   <h4>Capital: <span>{myCountry[0].capital}</span></h4>
                   <h4>Continent: <span>{myCountry[0].continent}</span></h4>
                   <h5>ID: <span>{myCountry[0].id}</span></h5>
                   <h5>Sub Region: <span>{myCountry[0].sub_Reg}</span></h5>
                   <h5>Area: <span>{myCountry[0].area}</span></h5>
                   <h5>Population: <span>{myCountry[0].population}</span></h5>
                <div>
                    {
                        myCountry[0]?.activities.length > 0 ?
                        (
                        myCountry[0].activities.map((a) => {
                            return(
                                <div>
                                    <h2>It´s activities are:</h2>
                                <span>Name: {a.name} </span>
                                <span>Difficulty: {a.difficulty} </span>
                                <span>Time: {a.time} </span>
                                <span>Season: {a.seasons} </span>
                                </div>
                            )
                        })
                        ) :
                        (
                            <span>There is no activity in this country... Create on by clicking on Create a new activity!!</span>
                        )
                    }
                </div>
                </div>
            ) : (
                <div>
                <h2>Loading...</h2>
                <img src='https://upload.wikimedia.org/wikipedia/commons/b/bf/GIF_Mundo_Banderas.gif' alt='Not found' />
            </div>
            )
        }
    </div>
  )
}


