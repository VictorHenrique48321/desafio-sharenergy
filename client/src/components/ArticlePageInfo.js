import { CardContent } from '@mui/material'
import { Box, Card, CardHeader, CardMedia, Link, Typography } from '@mui/material/node'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const ArticlePageInfo = (props) => {

  let navigate = useNavigate()

  const formatarData = (data) => {

    if(!data) {
      return
    }

    return data.slice(0,10).replace(/-/g, "/")
  }

  const ProximoArtigo = (arrowType) => {
  
    if(arrowType === "next") {
      navigate(`/article/${props.backendData.id - 1}`) 
      return window.location.reload()
    } 

    if(arrowType === "previous") {
      navigate(`/article/${props.backendData.id + 1}`) 
      return window.location.reload()
    }
  }

  return (
    <Box sx={{
        width: "100vw", 
        height: "100vh", 
        display: "flex", 
        justifyContent: {"xs": "flex-start", "lg": "space-around"},  
        alignItems: {"xs": "center", "lg": "center"},
        flexDirection: "column"
      }}>
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", marginBottom: {"xs": "1rem", "lg": "0"}}}>
        <Link href="/" variant="h5" underline="none" sx={{cursor: "pointer"}}>Voltar para a pagina inicial</Link>
      </Box>
      <Box sx={{display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap"}}>
        <Card sx={{"width": {"xs": "95%", "md": "70%"},borderWidth: "2px"}} variant="outlined">
          <CardHeader sx={{textAlign: "center"}}
            title={<Typography sx={{fontSize: "18px"}}>{props.backendData.title}</Typography>}
          />
          <CardMedia 
            component="img"
            height="250"
            width="200"
            image={props.backendData.imageUrl}
          />
          <CardContent>
            <Typography sx={{marginTop: "1rem"}}>{props.backendData.summary}</Typography>
            <Typography sx={{marginTop: "2rem"}}>Publicado em {formatarData(props.backendData.publishedAt)}</Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{
          width: {"xs": "100%", "md": "60%"}, 
          margin: "0 auto", 
          display: "flex", 
          justifyContent: "space-around", 
          padding: {"xs": "1rem 0 ", "lg": "0"}
        }}>
        <Box sx={{display: "flex", alignItems: "center"}}>
          <ArrowBackIcon onClick={() => ProximoArtigo("previous")}
            sx={{
              width: {"xs": "50px", "lg": "80px"}, 
              height: {"xs": "25px", "lg": "35px"}, 
              backgroundColor: "rgb(25, 118, 210)", 
              color:"white", 
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "1rem"
            }}/>
          <Typography>Proximo</Typography>
        </Box>
        <Box sx={{display: "flex", alignItems: "center"}}>
          <Typography>Anterior</Typography>
          <ArrowForwardIcon onClick={() => ProximoArtigo("next")}
            sx={{
              width: {"xs": "50px", "lg": "85px"}, 
              height: {"xs": "25px", "lg": "35px"},  
              backgroundColor: "rgb(25, 118, 210)", 
              color:"white", 
              borderRadius: "5px",
              cursor: "pointer",
              marginLeft: "1rem"
            }}/>
        </Box>
      </Box>
    </Box>
  )
}


export default ArticlePageInfo