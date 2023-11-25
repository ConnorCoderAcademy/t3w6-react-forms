import './App.css';
import Navbar from './components/Navbar';
import BusinessCardParent from './components/BusinessCardParent';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BusinessCardPage from './pages/BusinessCardPage';
import { Route, Routes, Outlet } from 'react-router-dom';
import RedirectHomeButton from './components/RedirectHomeButton';

function App() {
  return (
    <div className="App">
      <h1>This is shown in all the pages</h1>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        {/* <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/cards' element={<BusinessCardPage />} /> */}
        <Route path="/about" element={<Outlet />}> 
          <Route index element= {<AboutPage />} />
          <Route path="contact" element={<ContactPage/>}></Route>
        </Route>
        <Route path='/cards' element={<BusinessCardPage />} />


      </Routes>
    </div>
  );
}

export default App;
