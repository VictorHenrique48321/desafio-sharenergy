import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FooterHome from '../components/FooterHome'
import HeaderHome from '../components/HeaderHome'
import MainHome from '../components/MainHome'
import ArticleNotFound from '../components/ArticleNotFound'

const ArticlesSearch = () => {

  const [backendData, setBackendData] = useState([])

  const params = useParams()

  useEffect(() => {
    fetch(`http://desafiosharenergy.herokuapp.com/articles/${params.quantity}/title/${params.articletitle}`)
    .then(response => response.json())
    .then(data => setBackendData(data))

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

export default ArticlesSearch