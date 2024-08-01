import { Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';
import ItemCatalog from './components/itemCatalog/ItemCatalog';
import ItemDetails from './components/itemDetails/ItemDetails';
import UserDetails from './components/userDetails/UserDetails';
import UserCart from './components/userCart/UserCart';
import NotFound from './components/404NotFound/404NotFound';
import BoughtItems from './components/boughtItems/BoughtItems';
import SellItem from './components/sellItem/SellItem';
import EditItem from './components/editItem/EditItem';

import './App.css';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {

  return (
    <AuthContextProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />}/>
          <Route path="/items/:category" element={<ItemCatalog />} />
          <Route path="/items/view/:itemId" element={<ItemDetails />} />
          <Route path="/user" element={<UserDetails />} />
          <Route path="/my-cart" element={<UserCart />} />
          <Route path="/bought" element={<BoughtItems />} />
          <Route path="/sell-item" element={<SellItem />} />
          <Route path="/edit/:itemId" element={<EditItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
