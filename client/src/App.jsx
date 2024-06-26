import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import FoodMenu from "./pages/foodMenu/FoodMenu";
import Reservations from "./pages/reservations/Reservations";
import Recruitment from "./pages/recruitment/Recruitment";
import News from "./pages/news/News";
import Login from "./pages/login-resister/login";
import Resister from "./pages/login-resister/resister";
import Abouts from "./pages/about/About";
import Dashboard from './pages/admin/components/Dashboard';
import DetailNews from './pages/news/DetailNews';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<><Header /><Home /><Footer /></>} />
        <Route path='/ve-chung-toi' element={<><Header /><Abouts /><Footer /></>} />
        <Route path='/thuc-don' element={<><Header /><FoodMenu /><Footer /></>} />
        <Route path='/dat-cho' element={<><Header /><Reservations /><Footer /></>} />
        <Route path='/tin-tuc' element={<><Header /><News /><Footer /></>} />
        <Route path='/news/:id' element={<><Header /><DetailNews /><Footer /></>} />
        <Route path='/tuyen-dung' element={<><Header /><Recruitment /><Footer /></>} />
        <Route path='/dang-nhap' element={<><Header /><Login /><Footer /></>} />
        <Route path='/dang-ky' element={<><Header /><Resister /><Footer /></>} />
        <Route path='/dashboard/*' element={<Dashboard />} />
      </Routes>  
    </>
    
  );
}

export default App;
