import React, { Component } from 'react'
import SanPham from './SanPham'
import { connect} from 'react-redux'

export class DanhSachSanPham extends Component {
  
    renderSP = () =>{
        return this.props.mangSanPham.map((sanPham, index) => {
            console.log(sanPham);
            return (
                <SanPham 
                sanPham={sanPham}
                key={index}/>
            )
        })
    }
    render() {
    return (
      <div>
        <div className="container row">{this.renderSP()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

    return {
        mangSanPham : state.QuanLySanPhamStoreReducer.DSSP
    }
}

export default connect(mapStateToProps, null)(DanhSachSanPham)