import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/pages/homepage/Home'
import Bulbs from './components/pages/bulbspage/Bulbs'
import About from './components/pages/aboutpage/About'
import NotFound from './components/pages/errorpages/NotFound'
import {MasterProvider} from './context/MasterContext'

function App() {
  return (
    <MasterProvider>
    <BrowserRouter>
      <div className='d-flex flex-column vh-100 justify-content-between bg-black'>
        <Header/>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/bulbs' element={<Bulbs/>}/>
            <Route path='/aboutus' element={<About/>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
    </MasterProvider>
  );
}

export default App;
