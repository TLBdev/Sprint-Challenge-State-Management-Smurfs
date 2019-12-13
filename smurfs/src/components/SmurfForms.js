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
            edited: state.edited + 1
        })

    }
    return (
        <div>
            <form name='add' onSubmit={handleAdd}>
                <input name='name' value={state.name} onChange={handleChange} type='text'></input>
                <input name='age' value={state.age} onChange={handleChange} type='text'></input>
                <input name='height' value={state.height} onChange={handleChange} type='text'></input>
                <button type='submit'>Add To Village</button>
            </form>
            <form name='alter'>

            </form>
            <form name='delete'>

            </form>
        </div>
    )
}

export default SmurfForms