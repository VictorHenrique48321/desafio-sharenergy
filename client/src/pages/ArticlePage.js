import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ArticleNotFound from '../components/ArticleNotFound'
import ArticlePageInfo from '../components/ArticlePageInfo'

const ArticlePage = () => {

  let params = useParams()

  const [backendData, setbackendData] = useState([])

  useEffect(() => {
    fetch(`https://desafiosharenergy.herokuapp.com/article/${params.articleId}`)
    .then(response => response.json())
    .then(data => setbackendData(data))
  }, [])

  return (
    backendData.errorMessage ? <ArticleNotFound/> : <ArticlePageInfo backendData={backendData}/>
  )

}

export default ArticlePage