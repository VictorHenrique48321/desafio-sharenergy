import { Box, Pagination, Typography } from '@mui/material'
import React, { useRef, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const FooterHome = React.memo((props) => {

  let navigate = useNavigate()
  let params = useParams()

  const pageSelected = useRef([])

  // avanca para a pagina selecionada 
  const selecionarPagina = (e) => {
    const page = e.target.textContent
    const articlesQuantity = params.quantity

    if(params.lastDate && params.initialDate && params.articletitle) {
      const lastDate = params.lastDate
      const initialDate = params.initialDate
      const articleTitle = params.articletitle
      navigate(`/articlesQuantity/${articlesQuantity}/title/${articleTitle}/lastDate/${lastDate}/initialDate/${initialDate}/page/${page}`)
      return window.location.reload()
    }

    if(params.lastDate && params.initialDate) { // <- muda a url caso o parametro datas exista
      const lastDate = params.lastDate
      const initialDate = params.initialDate
      navigate(`/articlesQuantity/${articlesQuantity}/lastDate/${lastDate}/initialDate/${initialDate}/page/${page}`)
      return window.location.reload()
    }

    if(params.articletitle) { // <- muda a url caso o parametro titulo exista
      const articleTitle = params.articletitle
      navigate(`/articlesQuantity/${articlesQuantity}/title/${articleTitle}/page/${page}`)
      return window.location.reload()
    }

    if(!articlesQuantity) {  // <- caso tente usar a paginacao enquanto estiver na pagina inicial 
      return navigate(`/articlesQuantity/10/page/${page}`)
    }

    navigate(`/articlesQuantity/${articlesQuantity}/page/${page}`)
    return window.location.reload()
  }

  // faz com que cada seta avance ou retorne uma pagina ou varias
  const selecionarPaginaPorSeta = (arrowType) => {

    let currentPage = parseInt(params.pageNumber)
    const articlesQuantity = params.quantity
    let url = ''


    // caso tente usar a paginacao sem utilizar nenhum filtro
    if(params.quantity) {
      url = `/articlesQuantity/${articlesQuantity}/page/`
    }

    // verifica se o parametro titulo existe e muda a url 
    if(params.articletitle) {
      const articleTitle = params.articletitle
      url = `/articlesQuantity/${articlesQuantity}/title/${articleTitle}/page/`
    }

    // caso tente usar a paginacao enquanto estiver na pagina inicial
    if(!articlesQuantity) {
      url = `/articlesQuantity/10/page/`
    }

    // verifica se o parametro data existe e muda a url 
    if(params.lastDate && params.initialDate) {
      const lastDate = params.lastDate
      const initialDate = params.initialDate
      url = `/articlesQuantity/${articlesQuantity}/lastDate/${lastDate}/initialDate/${initialDate}/page/`
    }

    // verifica se as datas e o titulo existem e muda a url
    if(params.lastDate && params.initialDate && params.articletitle) {
      const lastDate = params.lastDate
      const initialDate = params.initialDate
      const articleTitle = params.articletitle
      url = `/articlesQuantity/${articlesQuantity}/title/${articleTitle}/lastDate/${lastDate}/initialDate/${initialDate}/page/`
    }


    // caso o parametro :pageNumber nao exista ele atribuiu o valor 0
    if(!currentPage) {
      currentPage = 0 
    }
    
    switch (arrowType) {
      case "singleRight":
        navigate(url + (validarNumeroDaPagina(currentPage, 1)))      
        return window.location.reload()   
      case "fullright":
        navigate(url + (validarNumeroDaPagina(currentPage, 10))) 
        return window.location.reload() 
      case "singleLeft":
        navigate(url + (validarNumeroDaPagina(currentPage, -1)))  
        return window.location.reload()        
      case "fullLeft":
        navigate(url + (validarNumeroDaPagina(currentPage, -10)))
        return window.location.reload() 
    }
  }

  // faz com que o numero da pagina nao seja menor que 1
  const validarNumeroDaPagina = (pageNumber, arrowClicked) => {

    const nextPage = pageNumber + arrowClicked
    console.log(pageNumber)

    if(nextPage < 1) {
      return 1
    }

    return nextPage

  }

  // retorna a barra de paginacao baseado no numero da pagina atual
  const numerosDaPaginacacao = (pageNumber) => {

    let paginationList = []
    const convertToNumber = parseInt(pageNumber)

    for(let i = 0; i <= 6; i++) {
      paginationList.push(convertToNumber + i)
    }

    return (
      paginationList.map((value, index) => {
        return (
          <Typography 
          ref={(element) => { pageSelected.current.push(element) }}
          key={index} 
          onClick={selecionarPagina}
          sx={{
            margin: {"xs": "0 .3rem", "sm": "0 .5rem"}, 
            fontSize: "18px", 
            minWidth: "24px",
            cursor: "pointer",
            border: "2px solid black",
            borderRadius: "5px",
            textAlign: "center"
          }}>
            {value}
          </Typography>
        )
      })
    )
  }
  
  useEffect(() => {

    // funcao para deixar o fundo azul na pagina que estiver selecionada

    if(params.pageNumber) {
      for(let i = 0; i < pageSelected.current.length; i++) {
        if(pageSelected.current[i].textContent.includes(params.pageNumber)){
          pageSelected.current[i].style.backgroundColor = "#2196f3"
          return
        }
      }
    }

    pageSelected.current[0].style.backgroundColor = "#2196f3"

  }, [selecionarPagina])

  return (
    <Box sx={{margin: "1rem 0", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap"}}>
      <KeyboardDoubleArrowLeftIcon sx={{fontSize: "24px", cursor: "pointer"}} color="primary" onClick={() => selecionarPaginaPorSeta("fullLeft")}/>
      <ArrowBackIcon sx={{fontSize: "24px", cursor: "pointer"}} color="primary" onClick={() => selecionarPaginaPorSeta("singleLeft")}/>
      {params.pageNumber ? numerosDaPaginacacao(params.pageNumber) : numerosDaPaginacacao(1)}
      <ArrowForwardIcon sx={{fontSize: "24px", cursor: "pointer"}} color="primary" onClick={() => selecionarPaginaPorSeta("singleRight")}/>
      <KeyboardDoubleArrowRightIcon sx={{fontSize: "24px", cursor: "pointer"}} color="primary" onClick={() => selecionarPaginaPorSeta("fullright")}/>
    </Box>
  )
})

export default FooterHome