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
    } else if(input.time < 1 || input.time > 24 || input.time === 0){
        errors.time = 'Time can be only to 1h to 24h'
    } else if(input.countries.length === 0){
        errors.countries = 'It needs at least 1 Country to create an activity'
    } else if(input.seasons === ''){
        errors.seasons = 'You need to select at least 1 season to create an activity'
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
    difficulty: 0,
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

function handleCheck(e) {
    if(e.target.checked){
        setInput({ 
            ...input,
            seasons: e.target.value
        })
    }
    setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
    }))
}

function handleSelect(e){
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
        difficulty: 0,
        time: 0,
        seasons: '',
        countries: [] 
    })
    history.push('/home')

}

    return (
    <div>
        <h1>Create your activity!</h1>
        <form onSubmit={(e) => handleSubmit(e)} className='form'>
            <select className='select' onChange={(e) => handleSelect(e)}>
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
                            <li key={c}>{c}</li>
                            <button type='button' value={c} onClick={(e) => handleDelete(e)}>X</button>
                            </div>
                            )
                    })
                }
            </ul>
                {errors.countries && (
                    <p>{errors.countries}</p>
                )}
            <div>
                <label>Name: </label>
                <input type='text' value={input.name} name='name' onChange={(e) => handleChange(e)} required/>
            </div>
                {errors.name && (
                    <p>{errors.name}</p>
                )}
            <div>
                <label>Difficulty: </label>
                <input type='range' min='1' max='5' list='tickmarks' value={input.difficulty} name='difficulty' onChange={(e) => handleChange(e)} required/>
            </div>
            <div>
                <label>Seasons: </label>
                <label><input type='checkbox' name='Summer' value='Summer'onChange={(e) => handleCheck(e)} />Summer</label>
                <label><input type='checkbox' name='Winter' value='Winter' onChange={(e) => handleCheck(e)} />Winter</label>
                <label><input type='checkbox' name='Fall' value='Fall' onChange={(e) => handleCheck(e)} />Fall</label>
                <label><input type='checkbox' name='Spring' value='Spring' onChange={(e) => handleCheck(e)} />Spring</label>
            </div>
            {errors.seasons && (
                    <p>{errors.seasons}</p>
                )}
            <div>
                <label>Time: </label>
                <input type='number' value={input.time} name='time' onChange={(e) => handleChange(e)} required/>
            </div>
            {errors.time && (
                    <p>{errors.time}</p>
                )}
            <div>
                {
                   createB(errors) ? (<p>Complete the requirements and the create button will apear!</p>) :
                    (<button type='submit'>Create</button>) 
                }
            </div>
        </form>
    </div>
  )
}
