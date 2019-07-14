import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import ArticlesList from './pages/ArticlesList';
import AboutPage from './pages/AboutPage';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/article" component={ArticlePage} exact></Route>
          <Route path="/article-list" component={ArticlesList} exact></Route>
          <Route path="/about" component={AboutPage} exact></Route>
        </div>
      </div>
    </Router>

  );
}

export default App;
