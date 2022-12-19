import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// import logo from './logo.svg';

import Header from './components/Header/Header';
import PageHome from './components/PageHome/PageHome';
import PageContactUs from './components/PageContactUs/PageContactUs';
import PageOurBlog from './components/PageOurBlog/PageOurBlog';
import PageOurTeam from './components/PageOurTeam/PageOurTeam';
import PagePortfolio from './components/PagePortfolio/PagePortfolio';
import PageServices from './components/PageServices/PageServices';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<PageHome />} />
        <Route path='/contuct-us' element={<PageContactUs />} />
        <Route path='/our-blog' element={<PageOurBlog />} />
        <Route path='/Team' element={<PageOurTeam />} />
        <Route path='/Portfolio' element={<PagePortfolio />} />
        <Route path='/Services' element={<PageServices />} />
        
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
