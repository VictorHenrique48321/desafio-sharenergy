import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import "./assets/css/reset.css"
import ArticlesQuantity from "./pages/ArticlesQuantity";
import ArticlesPagination from "./pages/ArticlesPagination";
import ArticlesSearch from "./pages/ArticlesSearch";
import ArticlesSearchPagination from "./pages/ArticlesSearchPagination";
import ArticlesDate from "./pages/ArticlesDate";
import ArticleDatePagination from "./pages/ArticleDatePagination";
import ArticleDateAndTitle from "./pages/ArticleDateAndTitle";
import ArticleDateAndTtitlePagination from "./pages/ArticleDateAndTtitlePagination";
import ArticlePage from "./pages/ArticlePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/articlesQuantity/:quantity" element={<ArticlesQuantity/>}/>
        <Route path="/articlesQuantity/:quantity/page/:pageNumber" element={<ArticlesPagination/>}/>
        <Route path="/articlesQuantity/:quantity/title/:articletitle" element={<ArticlesSearch/>}/>
        <Route path="/articlesQuantity/:quantity/title/:articletitle/page/:pageNumber" element={<ArticlesSearchPagination/>}/>
        <Route path="/articlesQuantity/:quantity/lastDate/:lastDate/initialDate/:initialDate" element={<ArticlesDate/>}/>
        <Route path="/articlesQuantity/:quantity/lastDate/:lastDate/initialDate/:initialDate/page/:pageNumber" element={<ArticleDatePagination/>}/>
        <Route path="/articlesQuantity/:quantity/title/:articletitle/lastDate/:lastDate/initialDate/:initialDate" element={<ArticleDateAndTitle/>}/>
        <Route path="/articlesQuantity/:quantity/title/:articletitle/lastDate/:lastDate/initialDate/:initialDate/page/:pageNumber" element={<ArticleDateAndTtitlePagination/>}/>
        <Route path="/article/:articleId" element={<ArticlePage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
