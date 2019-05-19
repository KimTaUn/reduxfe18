
const stateQLSP = {
    DSSP : [
        { id: 'sp_1', name: 'iphoneX', price: 30000000, screen: 'screen_1', backCamera: 'backCamera_1', frontCamera: 'frontCamera_1', img: './img/sp_iphoneX.png', desc: 'iPhone X features a new all-screen design. Face ID, which makes your face your password' },

        { id: 'sp_2', name: 'Note 7', price: 20000000, screen: 'screen_2', backCamera: 'backCamera_2', frontCamera: 'frontCamera_2', img: './img/sp_note7.png', desc: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason' },

        { id: 'sp_3', name: 'Vivo', price: 10000000, screen: 'screen_3', backCamera: 'backCamera_3', frontCamera: 'frontCamera_3', img: './img/sp_vivo850.png', desc: 'A young global smartphone brand focusing on introducing perfect sound quality' },

        { id: 'sp_4', name: 'Blacberry', price: 15000000, screen: 'screen_4', backCamera: 'backCamera_4', frontCamera: 'frontCamera_4', img: './img/sp_blackberry.png', desc: 'BlackBerry is a line of smartphones, tablets, and services originally designed' }
    ]
}

const QuanLySanPhamStoreReducer = (state = stateQLSP, action) => {
    return {...state}
}

export default QuanLySanPhamStoreReducer