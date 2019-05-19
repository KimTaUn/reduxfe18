

const stateGioHang = {
    gioHang:[
        // {MaSP: 1, TenSP: "abc", Gia: 0, SoLuong : 0, HinhAnh:""}
    ]
}

const gioHangStoreReducer = (state = stateGioHang, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.MaSP === action.sanPham.id);
            if (index !== -1) {
                gioHangCapNhat[index].SoLuong +=1;
            } else {
                let {id, name, img, price} = action.sanPham;
                let spGH = {MaSP : id, HinhAnh: img,TenSP:name, Gia: price, SoLuong:1};
                gioHangCapNhat.push(spGH);
            }

            state.gioHang = gioHangCapNhat;
            return {...state};
        };
        case 'TANG_GIAM_SO_LUONG': {
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.MaSP === action.maSP)
            if (action.tangGiam === true) {
                gioHangCapNhat[index].SoLuong += 1;
            } else if(gioHangCapNhat[index].SoLuong >1) {
                gioHangCapNhat[index].SoLuong -= 1;
            }
            state.gioHang = gioHangCapNhat;
            return {...state};
        }
        case 'XOA_SP_GIO_HANG': {
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.MaSP === action.sanPham.MaSP);
            gioHangCapNhat.splice(index,1);
            
            state.gioHang = gioHangCapNhat;
            return {...state};

        }
        default:
            break;

    }
    return {...state}
}

export default gioHangStoreReducer