import {
  GETCOMMENTBYARTICLE_REQUEST,
  GETCOMMENTBYARTICLE_SUCCESS,
  GETCOMMENTBYARTICLE_ERROR,
  POSTCOMMENTBYARTICLE_REQUEST,
  POSTCOMMENTBYARTICLE_SUCCESS,
  POSTCOMMENTBYARTICLE_ERROR
} from '../actions/comment.actions';

const initialState = {
  data: [],
  isLoading: false
}

const handleComment = (state = initialState, action) => {
  switch(action.type) {
    case GETCOMMENTBYARTICLE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GETCOMMENTBYARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.result
      }
    case GETCOMMENTBYARTICLE_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    case POSTCOMMENTBYARTICLE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case POSTCOMMENTBYARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [
          ...state.data,
          action.result
        ]
      }
    case POSTCOMMENTBYARTICLE_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    default:
      return state
  }
}

export default handleComment