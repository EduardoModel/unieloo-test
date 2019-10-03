import React from 'react'
import breakPointMinWidth from './../sizes/sizes'
import styled from 'styled-components'

const Img = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 20px;
    margin: 12px;
`

const MainDiv = styled.div`
    background-color: #FF6336;
    border-radius: 20px;
    margin-top: 10px;
    overflow:hidden;
    text-align: center;

    @media ${breakPointMinWidth}{
        text-align: left; 
        width: 900px;
        display: flex;
        height: 380px;
    }
`
const ServicesDiv = styled.div`
    @media ${breakPointMinWidth}{
        margin-left: 10px;
    }
`

const P = styled.p`
    font-family: "Arial";
    font-size: 18px;
    color: white;
`

const H3 = styled.h3`
    font-family: "Arial";
    color: white;
    font-size: 22px;
` 


const Professional = (props) => {
    const info = props.props || {}
    return (
        <MainDiv>
            <Img src={info.User.profileImg} alt="Profile Image"></Img>
            <div>
                <H3>{info.Specialization.name}</H3>
                <P>{info.User.name}, {info.cr}</P>
                <P>{info.addressName}, {info.addressNumber}, {info.district}. CEP: {info.cep}, {info.city}-{info.state.toUpperCase()}</P>
                <P>{info.description}</P>
                <P>{info.User.email}</P>
                <P>{info.User.phoneNumber}</P>
            </div>

            <ServicesDiv>
            <H3>Serviços</H3>
            {info.Services.map((service, index) => (
                props.preco > 0 ? parseInt(service.value, 10) <= props.preco &&
                <div key={index}>
                <P>{service.description}</P>
                <P>Valor: {service.value === "0.00"? 'Grátis': `R$ ${service.value}`}</P>
                <P>Duração: {service.duration} minutos</P>
                </div> 
                : 
                <div key={index}>
                <P>{service.description}</P>
                <P>Valor: {service.value === "0.00"? 'Grátis': `R$ ${service.value}`}</P>
                <P>Duração: {service.duration} minutos</P>
                </div>
            ))}
            </ServicesDiv>
        </MainDiv>
    )
}
    
export default Professional