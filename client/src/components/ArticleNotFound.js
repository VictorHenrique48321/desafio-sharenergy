import { Box } from '@mui/material/node'
import Link from '@mui/material/node/Link'
import Typography from '@mui/material/node/Typography'
import React from 'react'

const ArticleNotFound = () => {
  return (
    <Box sx={{position: "absolute", top: "50%", left:"50%", transform: "translate(-50%, -50%)"}}>
      <Typography variant="h3" textAlign="center">404</Typography>\
      <Typography>Parece que o artigo que você procura ainda não existe</Typography>
      <Link underline="none" href="/"><Typography>Aqui está um link para a página inicial</Typography></Link>
    </Box>
  )
}

export default ArticleNotFound