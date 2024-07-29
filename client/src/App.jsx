import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import ItemCatalog from './components/catalog/ItemCatalog';
import ItemDetails from './components/itemDetails/ItemDetails';
import UserDetails from './components/userDetails/UserDetails';
import SavedItems from './components/savedItems/SavedItems';
import NotFound from './components/404NotFound/404NotFound';
import BoughtItems from './components/boughtItems/BoughtItems';
import SellItem from './components/sellItem/SellItem';
import EditItem from './components/editItem/EditItem';

import { AuthContext } from './contexts/AuthContext';

import './App.css';

function App() {
  const [auth, setAuth] = useState({});

  const changeAuthState = (state) => {
    localStorage.setItem("accessToken", state.accessToken);

    setAuth(state);
  }
  
  const contextData = {
    userId: auth._id,
    email: auth.email,
    profilePic: auth.profilePic,
    accessToken: auth.accessToken,
    isAuthenticated: !!auth.email,
    changeAuthState
  }

  return (
    <AuthContext.Provider value={contextData}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/items" element={<ItemCatalog />} />
          <Route path="/items/:itemId" element={<ItemDetails />} />
          <Route path="/user" element={<UserDetails />} />
          <Route path="/saved" element={<SavedItems />} />
          <Route path="/bought" element={<BoughtItems />} />
          <Route path="/sell-item" element={<SellItem />} />
          <Route path="/edit/:itemId" element={<EditItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
