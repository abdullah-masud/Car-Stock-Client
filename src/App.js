import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Update from './Pages/Update/Update';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import AddNewItem from './Pages/AddNewItem/AddNewItem';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/update/:inventoryId' element=
          {<RequireAuth>
            <Update />
          </RequireAuth>} />
        <Route path='/manageInventories' element=
          {<RequireAuth>
            <ManageInventories />
          </RequireAuth>} />
        <Route path='/addnewitem' element={<RequireAuth><AddNewItem /></RequireAuth>} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
