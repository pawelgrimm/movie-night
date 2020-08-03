export const SUBMIT_REQUEST = "SUBMIT_REQUEST";
export const SUBMIT_SUCCESS = "SUBMIT_SUCCESS";
export const SUBMIT_FAILURE = "SUBMIT_FAILURE";

const dataSubmitReducer = (state, action) => {
  switch (action.type) {
    case SUBMIT_REQUEST:
      return {
        ...state,
        isSubmitting: true,
        isSuccess: false,
        isError: false,
      };
    case SUBMIT_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        isSuccess: true,
        isError: false,
      };
    case SUBMIT_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        isSuccess: false,
        isError: true,
      };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

export default dataSubmitReducer;
