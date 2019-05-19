import React, { Component } from 'react'
import {connect} from 'react-redux'

export class GioHang extends Component {
  
    renderGioHang = () => {
        return this.props.gioHang.map((spGH,index)=>{
            return (
            <tr key={index}>
                <td>
                <img width={50} height={75} src={spGH.HinhAnh} alt=""/>
                </td>
                <td>
                    {spGH.TenSP}
                </td>
                <td>
                    {spGH.Gia.toLocaleString()} VND
                </td>
                <td>
                    <button 
                    onClick={()=>{
                      this.props.tangGiamSoLuong(spGH,true)}} 
                    className="btn btn-success">+</button>
                    {spGH.SoLuong}
                    <button 
                    onClick={()=>{
                      this.props.tangGiamSoLuong(spGH,false)}} 
                    className="btn btn-success">-</button>
                </td>
                <td>
                    {(spGH.Gia*spGH.SoLuong).toLocaleString()} VND
                </td>
                <td>
                <button 
                onClick={()=>{
                  this.props.xoaSPGioHang(spGH)
                }}
                className="btn btn-danger">X</button>
                </td>
            </tr>)
        })

    }

    tinhTongTien = () => {
      let kqTongTien = this.props.gioHang.reduce(
        (tongTien, spGH, index ) =>{
          tongTien = tongTien + (spGH.Gia* spGH.SoLuong);
          console.log(spGH);
          console.log(tongTien);
          
          return tongTien }
        ,0);
        return kqTongTien.toLocaleString()
    }
    render() {
    return (
        <div className="container">
            <h2>GIỎ HÀNG</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Hình Ảnh</th>
              <th>Sản Phẩm</th>
              <th>Giá</th>
              <th>Số Lượng</th>
              <th>Tổng Cộng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderGioHang()}
          </tbody>
        </table>
        <div className="container">
          <span>Tổng Tiền: {this.tinhTongTien()} VND</span>
        </div>
      </div>
    )
  }
}

// Hàm mapStateToProps lấy dữ liệu từ store và tạo ra props cho component

const mapStateToProps = (state) => {
    return {
        gioHang : state.gioHangStoreReducer.gioHang
    }
}

// Hàm mapDispatchToProps đẩy dữ liệu từ component lên store GioHang

const mapDispatchToProps = (dispatch) => {
  return {
    tangGiamSoLuong : (sanPham,tangGiam) => {
      dispatch({
        type: 'TANG_GIAM_SO_LUONG',
        maSP : sanPham.MaSP,
        tangGiam
      })
    },
    xoaSPGioHang : (sanPham) => {
      dispatch({
        type: 'XOA_SP_GIO_HANG',
        sanPham
      })
    }
  }
}
export default connect (mapStateToProps,mapDispatchToProps)(GioHang)

