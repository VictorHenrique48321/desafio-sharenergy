import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ArticleNotFound from '../components/ArticleNotFound'
import FooterHome from '../components/FooterHome'
import HeaderHome from '../components/HeaderHome'
import MainHome from '../components/MainHome'

const ArticlesQuantity = () => {
  let param = useParams()

  const [backendData, setBackendData] = useState([])

  useEffect(() => {
    fetch(`https://desafiosharenergy.herokuapp.com/articles/${param.quantity}`)
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

export default ArticlesQuantity