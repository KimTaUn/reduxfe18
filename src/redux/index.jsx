// Store chính: quản lý tất cả store con (mỗi store con quản lý dữ liệu theo nghiệp vụ)
import {combineReducers} from 'redux'
import  storeModalReducer  from './reducers/Modal.reducer' 
import gioHangStoreReducer from './reducers/GioHang.reducer'
import QuanLySanPhamStoreReducer from './reducers/QuanLySanPham.reducer'
// export defaut không cần dùng {}

const rootReducer = combineReducers({

    //store con (store nghiệp vụ sau này)
    
    //Cách 1: storeModalReducer : storeModalReducer
    //Cách 2: chân phương
    storeModalReducer,
    gioHangStoreReducer,
    QuanLySanPhamStoreReducer
})

export default rootReducer;