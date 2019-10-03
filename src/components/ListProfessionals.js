import React, {useContext, useState, useEffect} from 'react'
import Professional from './Professional'
import MainPageContext from './../context/mainPage-context'
import styled from 'styled-components'
import breakPointMinWidth from './../sizes/sizes'

const Wraper = styled.div`
    text-align: center;
    margin-left:0;
`

const PageNumbers = styled.ul`
    list-style: none;
    display: inline-table;
    margin-left: -40px;
    @media ${breakPointMinWidth}{
        display:block;
        text-align: center;
        margin-left: -600px;
    }
`

const PageNumbersLi = styled.li`
    margin-right: 0.5em;
    color: blue;
    user-select: none;
    cursor: pointer;
    display: inline-table;
`

const ListProfesionals = ({infoFilter}) => {
    const profiPerPage = 1;
    const [currentPage, setCurrentPage] = useState(1)

    const {data} = useContext(MainPageContext)
    const profiSelected = infoFilter.profissional ? data.filter((info) => info.Specialization.name === infoFilter.profissional) : data

    //Logic for the pages
    const indexOfLastPofi = currentPage * profiPerPage
    const indexOfFirtProfi = indexOfLastPofi - profiPerPage
    const currentProfis = profiSelected.slice(indexOfFirtProfi, indexOfLastPofi)
    const pageNumbers = []
    for (let i = 1; i<=Math.ceil(profiSelected.length/profiPerPage); i++){
        pageNumbers.push(i)
    }

    //Effect to set always the first page when the professional filter is chosen
    //Works as a reset for the currentPage
    useEffect(() => {
        setCurrentPage(1)
    }, [infoFilter])

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
            <Wraper>
                <PageNumbers id="page-numbers">
                    {renderPageNumbers}
                </PageNumbers>
            </Wraper>
        </div>
    )
}

export default ListProfesionals