import React from 'react';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Modal from './components/Modal';
import DanhSachSanPham from './components/BaiTapGioHang/DanhSachSanPham'
import BaiTapGioHang from './components/BaiTapGioHang/BaiTapGioHang';

function App() {

  return (
    <div className="App">
      <Header />
      {/* <Slider /> */}
      {/* <ProductList /> */}
      <BaiTapGioHang/>
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
