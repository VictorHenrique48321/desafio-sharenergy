const Router = require("express")
const cors = require("cors")

const ArticleController = require("../controllers/articlesController")

const router = Router()

router
 .get("/articles", cors(), ArticleController.dezArtigos)
 .get("/articles/:quantity", cors(), ArticleController.artigoQuantidadeCustomizada)
 .get("/articles/:quantity/:start", cors(), ArticleController.paginacaoDeArtigos)
 .get("/articles/:quantity/title/:searchtitle", cors(), ArticleController.buscarArtigoTitulo)
 .get("/articles/:quantity/title/:searchtitle/page/:start", cors(), ArticleController.paginacaoDeTitulos)
 .get("/articles/:quantity/initialdate/:initialDate/lastdate/:lastDate", cors(), ArticleController.buscarPorData)
 .get("/articles/:quantity/initialdate/:initialDate/lastdate/:lastDate/page/:start", cors(), ArticleController.paginacaoDeDatas)
 .get("/articles/:quantity/title/:searchtitle/initialdate/:initialDate/lastdate/:lastDate", cors(), ArticleController.buscarArtigoPorTituloeData)
 .get("/articles/:quantity/title/:searchtitle/initialdate/:initialDate/lastdate/:lastDate/page/:start", cors(), ArticleController.paginacaoDeDataseTitulo)
 .get("/article/:articleId", cors(), ArticleController.paginaDoArtigo)
 module.exports = router