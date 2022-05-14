import { Card, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const MainHome = (props) => {

  const navigate = useNavigate()

  const formatarData = (data) => {
    return data.slice(0,10).replace(/-/g, "/")
  }

  const IrParaPaginaDoArtigo = (articleId) => {

    navigate(`/article/${articleId}`)

  }

  return (
    <Box sx={{
      display: {"md": "flex"},
      flexWrap: {"md": "wrap"}
    }}>
      {props.backendData.map((value, index) => {
        return (
          <Card
          key={value.id}
          onClick={() => IrParaPaginaDoArtigo(value.id)} 
          sx={{ 
            width: {"xs": "90%", "md": "45%"}, 
            margin: ".5rem auto",
            cursor: "pointer"
          }}>
            <CardContent sx={{borderRadius: "12px", border: "2px solid #2196f3"}} data-id={value.id}>
              <Typography sx={{height: "30px", textAlign: "center", borderBottom: "2px solid #2196f3"}}>{formatarData(value.publishedAt)}</Typography>
              <Typography sx={{height: "60px", textAlign: "center", marginTop: "1rem"}}>{value.title}</Typography>
            </CardContent>
          </Card>
        )
      })}
    </Box>
  )
}

export default MainHome