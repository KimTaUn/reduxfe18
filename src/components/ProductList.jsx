import React, { Component } from 'react'
import Product from './Product';

export default class ProductList extends Component {

    //Thuộc tính this.props cho phép component này nhận giá trị tham số
    // từ component cha truyền vào
    dsSanPham = [
        { id: 'sp_1', name: 'iphoneX', price: '30.000.000 VNÄ', screen: 'screen_1', backCamera: 'backCamera_1', frontCamera: 'frontCamera_1', img: './img/sp_iphoneX.png', desc: 'iPhone X features a new all-screen design. Face ID, which makes your face your password' },

        { id: 'sp_2', name: 'Note 7', price: '20.000.000 VNÄ', screen: 'screen_2', backCamera: 'backCamera_2', frontCamera: 'frontCamera_2', img: './img/sp_note7.png', desc: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason' },

        { id: 'sp_3', name: 'Vivo', price: '10.000.000 VNÄ', screen: 'screen_3', backCamera: 'backCamera_3', frontCamera: 'frontCamera_3', img: './img/sp_vivo850.png', desc: 'A young global smartphone brand focusing on introducing perfect sound quality' },

        { id: 'sp_4', name: 'Blacberry', price: '15.000.000 VNÄ', screen: 'screen_4', backCamera: 'backCamera_4', frontCamera: 'frontCamera_4', img: './img/sp_blackberry.png', desc: 'BlackBerry is a line of smartphones, tablets, and services originally designed' }];

    renderItem = () => {

       let content = this.dsSanPham.map((sanPham,index) => {
            return (<Product  hienThiThongTinSanPham={this.hienThiThongTinSanPham} sanPham={sanPham} key={index}> </Product>); //Kết quả trả về từ callback sẽ được push vào content (mảng kết quả)
        });
        console.log(content);
       return content;
    }

    //Lưu ý: Dữ liệu cần lấy ở component nào thì đặt callback function ở component đó
    hienThiThongTinSanPham = (desc) => {
        alert(desc);
    }

    render() {
        return (
            <div className="container">
              <h3 className="text-center">{this.props.tenDSSP}</h3>
                <div className="row">
                    {this.renderItem()}
                </div>
            </div>

        )
    }
}
