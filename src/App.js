import React from 'react';
import Container from './Components/Container';
import Header from './Components/Header';
import Images from './Components/Images';
import Content from './Components/Content';
import Services from './Components/Services';
import Studies from './Components/Studies';
import Blogs from './Components/Blogs';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';



function App() {
  return (
    <div className='main-app'>
      <Header />
      <Container/>
      <Images />
      <Content/>
      <Services/>
      <Studies/>
      <Blogs/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App