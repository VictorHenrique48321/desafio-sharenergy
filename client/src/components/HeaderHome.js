import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search'
import React, { useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'

const HeaderHome = (props) => {

  let navigate = useNavigate()
  let params = useParams()

  const [articleSearch, setArticleSearch] = useState("")
  const [initialDate, setInitialDate] = useState("")
  const [lastDate, setLastDate] = useState("")

  // pesquisar artigo na barra de pesquisa
  const pesquisarArtigo = () => {

    // verifica se as duas datas e o titulo from preenchidos
    if(lastDate && initialDate && articleSearch) {
      navigate(`/articlesQuantity/10/title/${articleSearch}/lastDate/${lastDate}/initialDate/${initialDate}`)
      return window.location.reload()
    }

    // verifica se as duas datas foram preenchidas
    if(lastDate && initialDate) {
      navigate(`/articlesQuantity/10/lastDate/${lastDate}/initialDate/${initialDate}`)
      return window.location.reload()
    }

    navigate(`/articlesQuantity/10/title/${articleSearch}`)
    return window.location.reload()
  }

  // retorna a quantidade de artigos que usuario escolheu
  const mostarQuantidadeArtigos = (articlesQuantity) => {

    // caso o parametro de titulo e datas exista retorna a quantidade de artigos com essas datas e titulos
    if(params.lastDate && params.initialDate && params.articletitle) {
      const lastDate = params.lastDate
      const initialDate = params.initialDate
      const articleTitle = params.articletitle
      console.log("existo")
      navigate(`/articlesQuantity/${articlesQuantity}/title/${articleTitle}/lastDate/${lastDate}/initialDate/${initialDate}`)
      return window.location.reload()
    }

    // caso o parametro de titulo exista ele retorna a quantidade de artigos com esse titulo
    if(params.articletitle){
      const articleTitle = params.articletitle      
      navigate (`/articlesQuantity/${articlesQuantity}/title/${articleTitle}`)
      return window.location.reload()
    }

    // caso o parametro de datas exista ele retorna a quantidade de artigos com essas datas
    if(params.lastDate) {
      const lastDate = params.lastDate
      const initialDate = params.initialDate
      console.log("existo errado")
      navigate(`/articlesQuantity/${articlesQuantity}/lastDate/${lastDate}/initialDate/${initialDate}`)
      return window.location.reload()
    }

    // retornar a quantidade de artigos que o usuario escolheu
    navigate (`/articlesQuantity/${articlesQuantity}`)
    return window.location.reload()
  }

  return (
    <Box sx={{
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center"
    }}>
      <Box sx={{
        display: "flex", 
        justifyContent: "center", 
        margin: "1rem 0",
        flexWrap: "wrap"
      }}>
        <TextField 
          id="standard-basic" 
          label="Titulo" 
          placeholder='Pesquisa por titulo'
          onChange={(event) => {setArticleSearch(event.target.value)}}
          sx={{width: {"xs": "90%", "sm": "60%"}, marginBottom: "1rem"}}
        />
        <Box sx={{display: "flex", justifyContent:{"xs": "space-around", "sm": "center"}, width: {"xs": "auto", "sm": "100%"}}}>
          <TextField type="date" helperText="data mais recente " onChange={(event) => {setInitialDate(event.target.value)}} sx={{width: {"xs": "45%", "sm": "25%"}, marginRight: "1rem"}}/>
          <TextField type="date" helperText="data menos recente" onChange={(event) => {setLastDate(event.target.value)}} sx={{width: {"xs": "45%", "sm": "25%"}}}/>
        </Box>
        <Button variant="contained" onClick={pesquisarArtigo} endIcon={<SearchIcon />} sx={{maxWidth: "250px", marginTop: "1rem"}}>
          Pesquisar 
        </Button>
        <Button variant="contained" onClick={() => navigate("/")} sx={{maxWidth: "250px", marginTop: "1rem", marginLeft: ".5rem"}}>
          Remover Filtros 
        </Button>
      </Box>
      <Typography textAlign={"center"} color="primary">Quantidade de artigos</Typography>
      <Box  sx={{display: "flex", justifyContent: "center"}}>
        <Button variant="outlined" onClick={() => mostarQuantidadeArtigos(10)} sx={{margin: ".5rem", height: {"md": "50px"}}}>10</Button>
        <Button variant="outlined" onClick={() => mostarQuantidadeArtigos(25)} sx={{margin: ".5rem", height: {"md": "50px"}}}>25</Button>
        <Button variant="outlined" onClick={() => mostarQuantidadeArtigos(50)} sx={{margin: ".5rem", height: {"md": "50px"}}}>50</Button>
        <Button variant="outlined" onClick={() => mostarQuantidadeArtigos(100)} sx={{margin: ".5rem", height: {"md": "50px"}}}>100</Button>
      </Box>
    </Box>
  )
}

export default HeaderHome