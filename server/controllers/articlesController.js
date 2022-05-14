const axios = require("axios")


class ArticleController {

  static async dezArtigos(req, res) {

    try {

      const url = "https://api.spaceflightnewsapi.net/v3/articles?_limit=10"
      const response = await axios(url)
      let artigos = []

      for(let i = 0; i < response.data.length; i++){
        artigos.push({
          id: response.data[i].id,
          title: response.data[i].title,
          publishedAt: response.data[i].publishedAt
        })
      }

      return res.status(200).json(artigos)

    } catch (error) {

      return res.status(404).json(error.message)
    }

  }

  static async artigoQuantidadeCustomizada(req, res) {

    try {

      const articlesQuantity = ["10", "25", "50", "100"]
      
      if(!articlesQuantity.includes(req.params.quantity)){
        res.status(404).json({errorMessage: "articles not found"})
      }

      const url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=${req.params.quantity}`
      const response = await axios(url)
      let artigos = []

      for(let i = 0; i < response.data.length; i++){
        artigos.push({
          id: response.data[i].id,
          title: response.data[i].title,
          publishedAt: response.data[i].publishedAt
        })
      }

      return res.status(200).json(artigos)

    } catch (error) {

      return res.status(404).json(error.message)
    }

  }

  static async paginacaoDeArtigos(req, res) {
    
    try {

      const articlesQuantity = ["10","25", "50", "100"]
      
      if(!articlesQuantity.includes(req.params.quantity)){
        res.status(404).json({errorMessage: "articles not found"})
      }

      const quantityArticles = req.params.quantity
      const startAtArticle = req.params.start

      const url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=${quantityArticles}&_start=${startAtArticle}`
      const response = await axios(url)

      let artigos = []

      for(let i = 0; i < response.data.length; i++){
        artigos.push({
          id: response.data[i].id,
          title: response.data[i].title,
          publishedAt: response.data[i].publishedAt
        })
      }

      return res.status(200).json(artigos)

    } catch(error) {

      return res.status(500).json({errorMessage: "articles not found"})

    }

  }

  static async buscarArtigoTitulo (req, res) {
    
    try {

      const articlesQuantity = ["10", "25", "50", "100"]
      
      if(!articlesQuantity.includes(req.params.quantity)){
        res.status(404).json({errorMessage: "articles not found"})
      }
      
      const quantityArticles = req.params.quantity
      const articleTitle = req.params.searchtitle

      const url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=${quantityArticles}&title_contains=${articleTitle}`
      const response = await axios(url)

      let artigos = []

      for(let i = 0; i < response.data.length; i++){
        artigos.push({
          id: response.data[i].id,
          title: response.data[i].title,
          publishedAt: response.data[i].publishedAt
        })
      }

      return res.status(200).json(artigos)
      
    } catch (error) {

      return res.status(500).json({errorMessage: "articles not found"})
      
    }

  }

  static async paginacaoDeTitulos (req, res) {

    try {

    const articlesQuantity = ["10", "25", "50", "100"]

    if(!articlesQuantity.includes(req.params.quantity)){
      res.status(404).json({errorMessage: "articles not found"})
    }
 
    const quantityArticles = req.params.quantity
    const titleArticle = req.params.searchtitle
    const paginationArticle = req.params.start

    const url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=${quantityArticles}&title_contains=${titleArticle}&_start=${paginationArticle}`
    const response = await axios(url)

    let artigos = []

      for(let i = 0; i < response.data.length; i++){
        artigos.push({
          id: response.data[i].id,
          title: response.data[i].title,
          publishedAt: response.data[i].publishedAt
        })
      }

      return res.status(200).json(artigos)

    } catch (error) {

      return res.status(500).json({errorMessage: "articles not found"})
      
    }

  }

  static async buscarPorData (req, res) { 

    try { 

    const articlesQuantity = ["10", "25", "50", "100"]

    if(!articlesQuantity.includes(req.params.quantity)){
      res.status(404).json({errorMessage: "articles not found"})
    }
 
    const quantityArticles = req.params.quantity
    const initialDate = req.params.initialDate
    const lastDate = req.params.lastDate

    const url = `https://api.spaceflightnewsapi.net/v3/articles?publishedAt_lte=${initialDate}&publishedAt_gte=${lastDate}&_limit=${quantityArticles}`
    const response = await axios(url)

    let artigos = []

      for(let i = 0; i < response.data.length; i++){
        artigos.push({
          id: response.data[i].id,
          title: response.data[i].title,
          publishedAt: response.data[i].publishedAt
        })
      }

      return res.status(200).json(artigos)

    } catch (error) {

      return res.status(500).json({errorMessage: "articles not found"})
      
    }

  }

  static async paginacaoDeDatas (req, res) { 

    try { 

    const articlesQuantity = ["10", "25", "50", "100"]

    if(!articlesQuantity.includes(req.params.quantity)){
      res.status(404).json({errorMessage: "articles not found"})
    }
 
    const quantityArticles = req.params.quantity
    const paginationArticle = req.params.start
    const initialDate = req.params.initialDate
    const lastDate = req.params.lastDate

    const url = `https://api.spaceflightnewsapi.net/v3/articles?publishedAt_lte=${initialDate}&publishedAt_gte=${lastDate}&_limit=${quantityArticles}&_start=${paginationArticle}`
    const response = await axios(url)

    let artigos = []

      for(let i = 0; i < response.data.length; i++){
        artigos.push({
          id: response.data[i].id,
          title: response.data[i].title,
          publishedAt: response.data[i].publishedAt
        })
      }

      return res.status(200).json(artigos)

    } catch (error) {

      return res.status(500).json({errorMessage: "articles not found"})
      
    }

  }

  static async buscarArtigoPorTituloeData (req, res) {

    try { 

      const articlesQuantity = ["10", "25", "50", "100"]
  
      if(!articlesQuantity.includes(req.params.quantity)){
        res.status(404).json({errorMessage: "articles not found"})
      }
   
      const quantityArticles = req.params.quantity
      const articleTitle = req.params.searchtitle
      const initialDate = req.params.initialDate
      const lastDate = req.params.lastDate
  
      const url = `https://api.spaceflightnewsapi.net/v3/articles?publishedAt_lte=${initialDate}&publishedAt_gte=${lastDate}&_limit=${quantityArticles}&title_contains=${articleTitle}`
      const response = await axios(url)
  
      let artigos = []
  
        for(let i = 0; i < response.data.length; i++){
          artigos.push({
            id: response.data[i].id,
            title: response.data[i].title,
            publishedAt: response.data[i].publishedAt
          })
        }
  
        return res.status(200).json(artigos)
  
      } catch (error) {
  
        return res.status(500).json({errorMessage: "articles not found"})
        
      }
    
  }

  static async paginacaoDeDataseTitulo (req, res) {

    try { 

      const articlesQuantity = ["10", "25", "50", "100"]
  
      if(!articlesQuantity.includes(req.params.quantity)){
        res.status(404).json({errorMessage: "articles not found"})
      }
   
      const quantityArticles = req.params.quantity
      const articleTitle = req.params.searchtitle
      const paginationArticle = req.params.start
      const initialDate = req.params.initialDate
      const lastDate = req.params.lastDate
  
      const url = `https://api.spaceflightnewsapi.net/v3/articles?publishedAt_lte=${initialDate}&publishedAt_gte=${lastDate}&_limit=${quantityArticles}&title_contains=${articleTitle}&_start=${paginationArticle}`
      const response = await axios(url)
  
      let artigos = []
  
        for(let i = 0; i < response.data.length; i++){
          artigos.push({
            id: response.data[i].id,
            title: response.data[i].title,
            publishedAt: response.data[i].publishedAt
          })
        }
  
        return res.status(200).json(artigos)
  
      } catch (error) {
  
        return res.status(500).json({errorMessage: "articles not found"})
        
      }
    
  }

  static async paginaDoArtigo (req, res) { 

    try {

      const articleId = req.params.articleId

      const url = `https://api.spaceflightnewsapi.net/v3/articles/${articleId}`
      const response = await axios(url)

      return res.status(200).json(response.data)

    } catch (error) {

      return res.status(404).json({errorMessage: "article not found"})

    }

  }
}

module.exports = ArticleController