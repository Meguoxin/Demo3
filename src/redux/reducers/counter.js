import * as types from '../actions/actionTypes'

const initialState = {
  count: 0
}

export default counter = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
      case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
      case types.CHANGE: {
        return {
          ...state,
          count: state.count + 2
        }
      }
      case types.GUO:{
        return{
            ...state,
            count: state.count +3
        }
      }
      case types.JIAN:{
        return{
            ...state,
            count:state.count - 3
        }
      }
    default:
      return state;
  }
};