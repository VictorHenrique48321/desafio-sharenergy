import { Box } from '@mui/material/node'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ArticleNotFound from '../components/ArticleNotFound'
import FooterHome from '../components/FooterHome'
import HeaderHome from '../components/HeaderHome'
import MainHome from '../components/MainHome'

const ArticleDateAndTitle = () => {

  let params = useParams()

  const [backendData, setbackendData] = useState([])

  useEffect(() => {
    fetch(`https://desafiosharenergy.herokuapp.com/articles/${params.quantity}/title/${params.articletitle}/initialdate/${params.initialDate}/lastdate/${params.lastDate}`)
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

export default ArticleDateAndTitle