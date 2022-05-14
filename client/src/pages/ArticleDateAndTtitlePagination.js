import { Box } from '@mui/material/node'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ArticleNotFound from '../components/ArticleNotFound'
import FooterHome from '../components/FooterHome'
import HeaderHome from '../components/HeaderHome'
import MainHome from '../components/MainHome'

const ArticleDateAndTtitlePagination = () => {
  let params = useParams()

  const [backendData, setbackendData] = useState([])

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

    const startAt = comecarNoArtigo(params.pageNumber, params.quantity)

    console.log("alo")

    fetch(`http://desafiosharenergy.herokuapp.com/articles/${params.quantity}/title/${params.articletitle}/initialdate/${params.initialDate}/lastdate/${params.lastDate}/page/${startAt}`)
    .then(response => response.json())
    .then(data => setbackendData(data))
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

export default ArticleDateAndTtitlePagination