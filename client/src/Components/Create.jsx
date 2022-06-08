import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { getAllCountries, postAvtivity } from "../Redux/Actions";
import {useHistory} from 'react-router-dom';
import '../CSS/Create.css'

function validate(input) {
    const errors = {};
    if(input.name === '') {
        errors.name = 'Name is required'
    } else if(!/^[a-zA-Z ]*$/.test(input.name)){
        errors.name = 'Name is invalid: must be letters only';
    } else if(input.name.length <= 2 || input.name.length >= 15){
        errors.name = 'Name is invalid: the minimum of letters is 2 and the maximum is 15'
    } else if(input.time < 1 || input.time > 24 || input.time === 0){
        errors.time = 'Time can be only to 1h to 24h'
    } else if(input.seasons === 'All'){
        errors.seasons = 'You need to select 1 season to create an activity'
    }
    return errors;
}

function createB(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) return true;
    }    
    return false;
}


export default function Create() {
  const dispatch = useDispatch();
  const history = useHistory();
  const allCountries = useSelector((state) => (state.countries))
  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    name:'',
    difficulty: 1,
    time: 0,
    seasons: '',
    countries: []
})


useEffect(() =>{
    dispatch(getAllCountries())
}, [dispatch])

function handleChange(e){
    setInput({
        ...input,
        [e.target.name]: e.target.value
    });
    setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
    }))

}

function handleSelect(e){
    if(Object.values(input.countries).includes(e.target.value)){
        return alert('This country is already selected')
    }
    setInput({
        ...input,
        countries: [...input.countries, e.target.value]
    })
}

function handleDelete(e) {
    setInput({
        ...input,
        countries: input.countries.filter(i => i !== e.target.value)
    })

}

function handleSubmit(e){
    e.preventDefault();
    if(input.name === ''){
        return alert('Complete the form first to submit!')
    }
    else if(input.countries.length === 0) {
        return alert('There should be at least 1 country to create your activity...')
    }
    else if(createB(errors)) {
        return alert('Complete the form first to submit!')
    }

    setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
    }))
    dispatch(postAvtivity(input));
    alert('Activity created')
    setInput({
        name:'',
        difficulty: 1,
        time: 0,
        seasons: '',
        countries: [] 
    })
    history.push('/home')

}

    return (
    <div className='allform'>
        <h1 className='title'>Create your activity!</h1>
        <form onSubmit={(e) => handleSubmit(e)} className='form'>
            <div>
                <p>Name: </p>
                <input type='text' value={input.name} name='name' onChange={(e) => handleChange(e)} required/>
            </div>
                {errors.name && (
                    <p style={{color: 'red'}}>{errors.name}</p>
                    )}
            <div>
                <p>Difficulty: </p>
                <input type='range' min='1' max='5' value={input.difficulty} name='difficulty' onChange={(e) => handleChange(e)} required/>
                <label style={{color: 'white'}}>{input.difficulty}</label>
            </div>
            <div className='seasons'>
                <p>Seasons: </p>
                <select className='selectS' name='seasons' value={input.seasons} onChange={(e) => handleChange(e)}>
                    <option value="All">Seasons</option>
                    <option value="Summer">Summer</option>
                    <option value="Spring">Spring</option>
                    <option value='Winter'>Winter</option>
                    <option value="Fall">Fall</option>
                </select>
            </div>
            {errors.seasons && (
                <p style={{color: 'red'}}>{errors.seasons}</p>
                )}
            <div>
                <p>Time: </p>
                <input type='number' min='0' max='24' value={input.time} name='time' onChange={(e) => handleChange(e)} required/>
            </div>
            {errors.time && (
                <p style={{color: 'red'}}>{errors.time}</p>
                )}
            <div>
                <p>Countries: </p>
                <select className='selectC' onChange={(e) => handleSelect(e)}>
                    {
                       allCountries.map((c) =>{
                           return(
                               <option key={c.id} value={c.id}>{c.name}</option>
                           )
                       })
                    }
                </select>
                <ul>
                    {
                        input.countries.map((c) => {
                            return(
                                <div>
                                <button type='button' className='x' value={c} onClick={(e) => handleDelete(e)}>X</button>
                                <li key={c}>{c}</li>
                                </div>
                                )
                        })
                    }
                </ul>
                {
                   createB(errors) ? (<p style={{color: 'red'}}>Complete the requirements and the create button will apear!</p>) :
                    (<button className='submit' type='submit'>Create</button>) 
                }
            </div>
        </form>
    </div>
  )
}


