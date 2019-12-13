import React from 'react'
import { SmurfContext } from '../contexts'
import axios from 'axios'
function SmurfForms() {
    const { state, changeState } = React.useContext(SmurfContext)

    const handleChange = (e) => {
        changeState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleAdd = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3333/smurfs', { name: state.name, age: state.age, height: state.height, id: Date.now() })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        changeState({
            ...state,
            name: '',
            age: 0,
            height: '',
            id: 0,
            edited: state.edited + 1
        })
    }
    const handleAlter = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3333/smurfs/${state.id}`, { name: state.name, age: state.age, height: state.height, id: Date.now() })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        changeState({
            ...state,
            name: '',
            age: 0,
            height: '',
            id: 0,
            edited: state.edited + 1
        })
    }
    const handleRemove = (e) => {
        e.preventDefault()
        axios.delete(`http://localhost:3333/smurfs/${state.id}`)

        changeState({
            ...state,
            name: '',
            age: 0,
            height: '',
            id: 0,
            edited: state.edited + 1
        })
    }
    return (
        <div>
            <form name='add' onSubmit={handleAdd}>
                <span>Name:</span>
                <input name='name' value={state.name} onChange={handleChange} type='text'></input>
                <span>Age:</span>
                <input name='age' value={state.age} onChange={handleChange} type='text'></input>
                <span>Height:</span>
                <input name='height' value={state.height} onChange={handleChange} type='text'></input>
                <button type='submit'>Add To Village</button>
            </form>
            <form name='alter' onSubmit={handleAlter}>
                <span>Name:</span>
                <input name='name' value={state.name} onChange={handleChange} type='text'></input>
                <span>Age:</span>
                <input name='age' value={state.age} onChange={handleChange} type='text'></input>
                <span>Height:</span>
                <input name='height' value={state.height} onChange={handleChange} type='text'></input>
                <span>ID:</span>
                <input name='id' value={state.id} onChange={handleChange} type='text'></input>
                <button type='submit'>Alter Smurf by ID</button>
            </form>
            <form name='delete' onSubmit={handleRemove}>
                <span>ID:</span>
                <input name='id' value={state.id} onChange={handleChange} type='text'></input>
                <button type='submit'>KIA by ID</button>
            </form>
        </div>
    )
}

export default SmurfForms