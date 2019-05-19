import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SanPham extends Component {
  
    render() {

        let {id, name, desc, price, img } = this.props.sanPham;
    
        return (
        <div className="col-md-3">
                <div className="container card">
                <img
                    className="card-img-top"
                    src={img}
                    alt="Card image"
                    style={{ maxWidth: "100%", height: 200 }}
                />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{desc}</p>
                    <span>Giá: {price} </span>
                    <button onClick={()=> this.props.themGioHang(this.props.sanPham)
                    } className="btn btn-primary">Cart</button>
                </div>
                </div>
        </div>
    )
  }
}

// Tạo ra phương thức đẩy dữ liệu lên store
const mapDispatchToProps = (dispatch) => { //dispatch : hàm của connect cung cấp để giúp đưa dữ liệu từ component lên store

    return {
        themGioHang : (sanPham) => {
            dispatch({
                type:'THEM_GIO_HANG',
                sanPham
            })
            console.log(sanPham);            
        }
    }
}

export default connect(null, mapDispatchToProps)(SanPham)