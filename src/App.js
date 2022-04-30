import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
