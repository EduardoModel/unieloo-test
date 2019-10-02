import React, {useState} from 'react'

const Filter = (props) => {
    const [profissional, setProfissional] = useState('')
    const [preco, setPreco] = useState(0)

    const formSubmit = (e) => {
        e.preventDefault()
        props.onSubmit({profissional: profissional || '', preco: preco || 0})
    }

    return(
        <div>
            <form onSubmit={formSubmit}>
                <select onChange={(e) => {
                    if(e.target.value !== 'Todos'){
                        setProfissional(e.target.value)
                    }else{
                        setProfissional('')
                    }
                }}>
                    <option>Todos</option>
                    <option>Dentista</option>
                    <option>Psicologia</option>
                    <option>Nutricionista</option>
                </select>
                <p>Preço até: </p>
                <input type='number' onChange={(e) => {
                    if(e.target.value>=0){
                        setPreco(e.target.value)
                    }
                }}
                defaultValue={0}>
                </input>
                <button>Buscar</button>
            </form>
        </div>
    )
}
export default Filter