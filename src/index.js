/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import options from './components/Carousel/audioOptions';

import './index.css';

import Page404 from './pages/Page404';
import Home from './pages/Home/Home';
import AddVideo from './pages/AddVideo';
import AddCategory from './pages/AddCategory';
import ManageBands from './pages/ManageBands';

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add/video" component={AddVideo} exact />
        <Route path="/add/category" component={AddCategory} exact />
        <Route path="/manage/bands" component={ManageBands} exact />
        <Route component={Page404} />
      </Switch>
      <ReactJkMusicPlayer {...options} />
    </BrowserRouter>
  </div>,
  document.getElementById('root'),
);
