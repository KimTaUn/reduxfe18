import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Product extends Component {

    state = {
        showDetail:true
    }

    showDetail = () => {
        if(this.state.showDetail === true)
        {
            return (  <p className="card-text">The Galaxy Note7 comes with a perfectly symmetrical design for good reason</p>);
        }
        return '';
    }

    showHideDetail = () => {
        //Làm thay đổi giá trị state.showDetail => render gọi lại
        this.setState({
            showDetail: !this.state.showDetail
        })
    }

    render() {
        //Cách 1:
        let {name,price,desc,img} = this.props.sanPham;
        // let {layThongTinSanPham} = this.props;
        //Cách 2:
        //let name = this.props.sanPham.name;
        // let {sanPham,layThongTinSanPham} = this.props //=> lấy 1 đối tượng sanPham

        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                <div className="container">
                    <div className="card bg-light" style={{ width: 300 }}>
                        <img className="card-img-top" src={img} alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
                        <div className="card-body text-center">
                            <h4 className="card-title text-center">{name}</h4>
                            {this.showDetail()}
                            <p>{price}</p>
                            <button onClick={() => this.showHideDetail()}  className="btn btn-primary">Detail</button>
                            <button onClick={()=> this.props.hienThiThongTinModal(name, desc)} data-toggle="modal" data-target="#myModal"  className="btn btn-danger">Show info</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

// Tạo ra phương thức đẩy dữ liệu lên store
const mapDispatchToProps = (dispatch) => { //dispatch : hàm của connect cung cấp để giúp đưa dữ liệu từ component lên store

    return {
        hienThiThongTinModal : (title, content) => { // hienThiThongTinModal = function(title,content){ return }
            dispatch({ // sử dụng hàm dispatch của connect cung cấp để đưa dữ liệu lên store, nhận vào tham số là 1 đối tượng {}, bắt buộc có thuộc tính là type
                type: 'HIEN_THI_THONG_TIN',
                title: title,
                content: content
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Product)