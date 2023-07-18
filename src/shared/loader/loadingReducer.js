// export const SET_LOADING = 'SET_LOADING';
// export const GET_LOADING = 'GET_LOADING';
// export const GET_LOADING_COUNT = 'GET_LOADING_COUNT';
// export const INCREASE_LOADING_COUNT = 'INCREASE_LOADING_COUNT';
// export const DECREMENT_LOADING_COUNT = 'DECREMENT_LOADING_COUNT';

// export const setLoading = (isLoading) => ({
//   type: SET_LOADING,
//   payload: isLoading,
// });

// export const getLoading = () => ({
//   type: GET_LOADING,
// });

// export const getLoadingCount = () => ({
//   type: GET_LOADING_COUNT,
// });

// export const increaseLoadingCount = () => ({
//   type: INCREASE_LOADING_COUNT,
// });

// export const decreaseLoadingCount = () => ({
//   type: DECREMENT_LOADING_COUNT,
// });

// const initialState = {
//   isLoading: false,
//   loadingCount: 0
// };

// const loadingReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_LOADING:
//       return {
//         ...state,
//         isLoading: action.payload,
//         loadingCount: state.loadingCount + (action.payload ? 1 : -1),
//       };
//     case GET_LOADING:
//       return state.isLoading;
//     case INCREASE_LOADING_COUNT:
//       return {
//         ...state,
//         loadingCount: state.loadingCount + 1,
//       };
//     // case DECREMENT_LOADING_COUNT:
//     //   if(state.loadingCount-1 === 0){
//     //     state.isLoading = false;
//     //   }
//     //   return {
//     //     ...state,
//     //     loadingCount: state.loadingCount - 1,
//     //   };
//     case GET_LOADING_COUNT:
//       return {
//         ...state,
//         loadingCount: state.loadingCount,
//       }
//     default:
//       return state;
//   }
// };

// export default loadingReducer;
