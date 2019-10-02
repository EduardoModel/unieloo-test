import React, {useEffect, useReducer, useState} from 'react';
import axios from 'axios'
import ListProfessionals from './ListProfessionals'
import MainPageContext from './../context/mainPage-context'
import mainPageReducer from './../reducer/mainPage'
import Filter from './Filter';

const MainPage = () => {
    const [data, dispatch] = useReducer(mainPageReducer, [])
    const [infoFilter, setInfoFilter] = useState({profissional: '', preco: 0})

    const onSubmit = (info) => {
        setInfoFilter(info)
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://unieloo-sandbox.herokuapp.com/teste')
            if(response){
                const data = response.data.data 
                dispatch({type: 'FILL_DATA', data})
            }
        }
        fetchData()
    }, [])

    return (
        <MainPageContext.Provider value={{data, dispatch}}>
            <Filter onSubmit={onSubmit}/>
            <ListProfessionals infoFilter={infoFilter}/>
        </MainPageContext.Provider>
    )
}

//<ListProfessionals props={data? data : []}/>

export default MainPage