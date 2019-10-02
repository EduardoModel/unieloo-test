import React from 'react'

import styled from 'styled-components'

const Img = styled.img`
    align: left;
    width: 200px;
    height: 200px;
    border-radius: 20px;
`;

const InfoProfi = styled.div`
    text-align:left;
    postition:relative;
    margin-left: 220px;
    margin-top: -220px
    display: block;
    background-color: lightblue;
    width:470px;
    font-size:100%;
    padding-left:20px;
    border-radius:20px;
    height:200px;
`;

const Services = styled.div`
    background-color: #973CA5;
    width:697px;
    height:200px;
    padding-left:15px;
    padding-top:1px;
    margin-top:5px;
    border-radius: 20px;
    align-items: center;
    margin-bottom: -110px;
`;

const Service = styled.div`
    align-content: inline;
    float: left;
    margin-right: 40px;
    margin-left: 30px;
    background-color: yellow;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 20px;
`;


const Professional = (props) => {
    const info = props.props || {}
    return (
        <div>
            <Img src={info.User.profileImg} alt="Profile Image"></Img>
            <div>
                <h3>{info.Specialization.name}</h3>
                <p>{info.User.name}, {info.cr}</p>
                <p>{info.addressName}, {info.addressNumber}, {info.district}. CEP: {info.cep}, {info.city}-{info.state.toUpperCase()}</p>
                <p>{info.description}</p>
                <p>Email: {info.User.email}</p>
                <p>Telefone: {info.User.phoneNumber}</p>
            </div>

            <div>
            <h3>Serviços</h3>
            {info.Services.map((service) => (
                props.preco > 0 ? parseInt(service.value, 10) <= props.preco &&
                <div>
                <p>{service.description}</p>
                <p>Valor: {service.value === "0.00"? 'Grátis': `R$ ${service.value}`}</p>
                <p>Duração: {service.duration} minutos</p>
                </div> 
                : 
                <div>
                <p>{service.description}</p>
                <p>Valor: {service.value === "0.00"? 'Grátis': `R$ ${service.value}`}</p>
                <p>Duração: {service.duration} minutos</p>
                </div>
            ))}
            </div>
        </div>
    )
}
    
export default Professional