import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import DesignPage from './pages/DesignPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          <Nav/>
        </Header>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='Productos' element={<ProductsPage />} />
          <Route path='Diseños-Personalizados' element={<DesignPage />} />
          <Route path='Nosotros' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
