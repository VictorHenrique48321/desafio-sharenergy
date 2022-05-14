import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box"
import HeaderHome from '../components/HeaderHome'
import MainHome from '../components/MainHome'
import FooterHome from '../components/FooterHome'

const Home = () => {

  const [backendData, setbackendData] = useState([])

  useEffect(() => {
    fetch("http://desafiosharenergy.herokuapp.com/articles")
    .then(response => response.json())
    .then(data => setbackendData(data))
  }, []) 

  return (
    <Box>
      <HeaderHome/>
      <MainHome backendData={backendData}/>
      <FooterHome/>
    </Box>
  )
}

export default Home