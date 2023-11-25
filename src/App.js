import './App.css';
import BusinessCardParent from './components/BusinessCardParent';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BusinessCardPage from './pages/BusinessCardPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        {/* <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/cards' element={<BusinessCardPage />} /> */}
        <Route path="/about" element={<AboutPage />}>
          <Route path="contact" element={<ContactPage/>}></Route>

        </Route>


      </Routes>
    </div>
  );
}

export default App;
