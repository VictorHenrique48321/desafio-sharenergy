import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ArticleNotFound from '../components/ArticleNotFound'
import FooterHome from '../components/FooterHome'
import HeaderHome from '../components/HeaderHome'
import MainHome from '../components/MainHome'

const ArticlesDate = () => {

  let params = useParams()

  const [backendData, setbackendData] = useState([])

  useEffect(() => {
    fetch(`https://desafiosharenergy.herokuapp.com/articles/${params.quantity}/initialdate/${params.initialDate}/lastdate/${params.lastDate}`)
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

export default ArticlesDate