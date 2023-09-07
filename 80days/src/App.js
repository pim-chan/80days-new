import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Packages from './pages/Packages';
import Layout from './containers/Layout';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/packages' element={<Packages/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
