import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham';
import GioHang from './GioHang';

export default class BaiTapGioHang extends Component {
  render() {
    return (
      <div className="container">
        <DanhSachSanPham/>
        <GioHang/>
      </div>
    )
  }
}
