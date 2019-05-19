import React, { Component } from 'react'
import { connect } from 'react-redux'; // kết nối component và store của redux

export class Modal extends Component {
    render() {


        return (
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">{this.props.modalTitle}</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                          {this.props.modalContent}
                         </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => { // state là dữ liệu từ store chính (rootReducer)

    return {
        //tạo ra 2 props cho component => dữ liệu được lấy từ storeModalReducer
        modalTitle : state.storeModalReducer.title,
        modalContent: state.storeModalReducer.content
    }
}

export default connect(mapStateToProps,null)(Modal)