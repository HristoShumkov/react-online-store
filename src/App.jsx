import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Catalog from './components/catalog/Catalog';
import ItemDetails from './components/itemDetails/ItemDetails';
import UserDetails from './components/userDetails/UserDetails';
import SavedItems from './components/savedItems/SavedItems';
import NotFound from './components/404NotFound/404NotFound';
import BoughtItems from './components/boughtItems/BoughtItems';
import SellItem from './components/sellItem/SellItem';
import EditItem from './components/editItem/EditItem';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/details" element={<ItemDetails />} />
        <Route path="/user" element={<UserDetails />} />
        <Route path="/saved" element={<SavedItems />} />
        <Route path="/bought" element={<BoughtItems />} />
        <Route path="/sell" element={<SellItem />} />
        <Route path="/edit" element={<EditItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
