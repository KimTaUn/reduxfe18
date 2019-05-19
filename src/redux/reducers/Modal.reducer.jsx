//store dành cho nghiệp vụ quản lý modal

const stateModal = {
  title: "title default",
  content: "content default"
};

const storeModalReducer = (state = stateModal, action) => {
  switch (action.type) {
    case "HIEN_THI_THONG_TIN":
      state.title = action.title;
      state.content = action.content;
      return { ...state };
    default:
      break;
  }
  return { ...state };
};

export default storeModalReducer;
