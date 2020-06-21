const defaultState = {
  isOpen: false,
  videos: [],
};

const videoModalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      if (action.videos?.length > 0) {
        return {
          isOpen: true,
          videos: action.videos,
        };
      }
      return state;
    case "CLOSE_MODAL":
      return defaultState;
    default:
      return state;
  }
};

export default videoModalReducer;
