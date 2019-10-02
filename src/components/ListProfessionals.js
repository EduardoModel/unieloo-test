import React, {useContext, useState} from 'react'
import Professional from './Professional'
import MainPageContext from './../context/mainPage-context'
import styled from 'styled-components'


const PageNumbers = styled.ul`
    list-style: none;
    display: flex;
`

const PageNumbersLi = styled.li`
    margin-right: 0.3em;
    color: blue;
    user-select: none;
    cursor: pointer;
`

const ListProfesionals = ({infoFilter}) => {
    console.log(infoFilter)
    const profiPerPage = 1;
    const [currentPage, setCurrentPage] = useState(1)

    const {data} = useContext(MainPageContext)
    const profiSelected = infoFilter.profissional ? data.filter((info) => info.Specialization.name === infoFilter.profissional) : data

    const indexOfLastPofi = currentPage * profiPerPage
    const indexOfFirtProfi = indexOfLastPofi - profiPerPage
    const currentProfis = profiSelected.slice(indexOfFirtProfi, indexOfLastPofi)
 
    const pageNumbers = []
    for (let i = 1; i<=Math.ceil(profiSelected.length/profiPerPage); i++){
        pageNumbers.push(i)
    }

    const handleClick = (e) => {
        setCurrentPage(e.target.id)
    }

    const renderPageNumbers = pageNumbers.map((number) => {
        return(
            <PageNumbersLi
            key={number}
            id={number}
            onClick={handleClick}
            >
            {number}
            </PageNumbersLi>
        )
    })

    return (
        <div>
            {(currentProfis.map((info) => (
                <Professional key={info.id} props={info} preco={infoFilter.preco}/> 
            )))}
            <PageNumbers id="page-numbers">
                {renderPageNumbers}
            </PageNumbers>
        </div>
    )
}

export default ListProfesionals