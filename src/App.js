import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch} from "react-redux";
import jsonData from './locations.json';
import { locationsData } from './reducers/locationDataSlice';

import Home from './pages/Home';
import About from './pages/About';
import Packages from './pages/Packages';
import Layout from './containers/Layout';
import Blog from './components/Blog';

const App = () => {

  const dispatch = useDispatch();

  useEffect (() => {
  dispatch(locationsData(jsonData));
 }, [dispatch]);

  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/packages' element={<Packages/>}/>
            <Route path='/blog' element={<Blog/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
  );
};

export default App;
