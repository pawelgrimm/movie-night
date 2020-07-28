import { CLOSE_MODAL, OPEN_MODAL, SET_APP_ELEMENT } from "./actions";

const defaultState = {
  isOpen: false,
  children: undefined,
  appElement: undefined,
};

const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      if (action.children) {
        return { ...state, isOpen: true, children: action.children };
      }
      return state;
    case CLOSE_MODAL:
      return { ...state, isOpen: false, children: undefined };
    case SET_APP_ELEMENT:
      return { ...state, appElement: action.appElement };
    default:
      return state;
  }
};

export default modalReducer;
