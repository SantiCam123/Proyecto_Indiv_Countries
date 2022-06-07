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
    <div className='alldetail'>
        {
            myCountry[0]?.id === id ? (
                <div>
                   <div className='detail'>
                   <h1>Welcome to {myCountry[0].name}</h1>
                   <img src={myCountry[0].image} alt='Not found' width='400px' height='210'/>
                   <div className='data'>
                   <h4 style={{marginRight: '20px'}}>Capital: <span>{myCountry[0].capital}</span></h4>
                   <h4 style={{marginRight: '20px'}}>Continent: <span>{myCountry[0].continent}</span></h4>
                   <h5 style={{marginRight: '20px'}}>ID: <span>{myCountry[0].id}</span></h5>
                   <h5 style={{marginRight: '20px'}}>Sub Region: <span>{myCountry[0].sub_Reg}</span></h5>
                   <h5 style={{marginRight: '20px'}}>Area: <span>{myCountry[0].area}</span></h5>
                   <h5 style={{marginRight: '20px'}}>Population: <span>{myCountry[0].population}</span></h5>
                   </div>
                   </div>
                <div className='activity'>
                    <h2 style={{textAlign: 'center'}}>It´s activities are:</h2>
                    {
                        myCountry[0]?.activities.length > 0 ?
                        (
                        myCountry[0].activities.map((a) => {
                            return(
                                <div className='activitydata'>
                                <span style={{marginRight: '20px', marginLeft: '10px'}}>Name: {a.name} </span>
                                <span style={{marginRight: '20px'}}>Difficulty: {a.difficulty} </span>
                                <span style={{marginRight: '20px'}}>Time: {a.time} </span>
                                <span style={{marginRight: '20px'}}>Season: {a.seasons} </span>
                                </div>
                            )
                        })
                        ) :
                        (
                            <span style={{paddingTop: '10px', textAlign: 'center'}}>There is no activity in this country... Create on by clicking on Create a new activity!!</span>
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


