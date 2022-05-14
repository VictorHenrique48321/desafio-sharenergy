import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ArticleNotFound from '../components/ArticleNotFound'
import FooterHome from '../components/FooterHome'
import HeaderHome from '../components/HeaderHome'
import MainHome from '../components/MainHome'

const ArticlesPagination = () => {

  let params = useParams()

  const [backendData, setBackendData] = useState([])

  // retornar em qual artigo deve comecar a proxima pagina baseada na pagina anterior
  const comecarNoArtigo = (pageNumber, articlesQuantity) => {
    switch (articlesQuantity) {
      case "10":
        return 10 * (pageNumber - 1)
      case "25":
        return 25 * (pageNumber - 1)
      case "50":
        return 50 * (pageNumber - 1)
      case "100": 
        return 100 * (pageNumber - 1)
      default: 
        break
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0) // <- sempre que uma pagina for selecionada te leva pro topo

    const startAt = comecarNoArtigo(params.pageNumber, params.quantity)

    fetch(`https://desafiosharenergy.herokuapp.com/articles/${params.quantity}/${startAt}`)
    .then(response => response.json())
    .then(data =>setBackendData(data))
  }, [])

  return (
    backendData.errorMessage ? <ArticleNotFound/> :
    <Box>
      <HeaderHome/>
      <MainHome backendData={backendData}/>
      <FooterHome/>
    </Box>
  )
}

export default ArticlesPagination