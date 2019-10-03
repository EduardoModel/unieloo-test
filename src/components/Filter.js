import React, {useState} from 'react'
import breakPointMinWidth from './../sizes/sizes'
import styled from 'styled-components'

const FilterDiv = styled.div`
    text-align: center;
    background-color: #018B72;
    border-radius: 6px;
    padding: 8px;
    
    @media ${breakPointMinWidth}{
        display: flex;
        width:885px;
    }
`
const ImputDiv = styled.div`
    @media ${breakPointMinWidth}{
        float: left;
        width: 442px;
    }    
`

const P = styled.p`
    font-family: "Arial";
    font-size: 16px;
    color: white;
`

const Select = styled.select`
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: 6px; 
`
const Input = styled.input`
    border-radius: 20px;
    padding-left: 5px;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
`
const Button = styled.button`
    border-radius: 6px;
`


const Filter = (props) => {
    const [profissional, setProfissional] = useState('')
    const [preco, setPreco] = useState(0)

    const formSubmit = (e) => {
        e.preventDefault()
        props.onSubmit({profissional: profissional || '', preco: preco || 0})
    }

    return(
        <FilterDiv>
            <form onSubmit={formSubmit}>
                <ImputDiv>
                    <P>Profissional</P>
                    <Select onChange={(e) => {
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
                    </Select>
                </ImputDiv>
                <ImputDiv>
                    <P>Preço até </P>
                    <Input type='number'
                    min='0'
                    
                    autoCapitalize="off"
                    onChange={(e) => {
                        if(e.target.value>=0){
                            setPreco(e.target.value)
                        }
                    }}
                    defaultValue={0}>
                    </Input>
                </ImputDiv>
                <br></br>
                <br></br>
                <Button>Buscar</Button>
            </form>
        </FilterDiv>
    )
}
export default Filter