import {
  GET_ARTICLE_REQUEST,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_ERROR,
  GET_ARTICLEBYID_REQUEST,
  GET_ARTICLEBYID_SUCCESS,
  GET_ARTICLEBYID_ERROR
} from '../actions/article.actions.js';

const initialState = {
  data: [],
  isLoading: true
}

const handleArticle = (state = initialState, action) => {
  switch(action.type) {
    case GET_ARTICLE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_ARTICLE_SUCCESS:
      return {
        ...state,
        data: action.result,
        isLoading: false
      }
    case GET_ARTICLE_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    case GET_ARTICLEBYID_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_ARTICLEBYID_SUCCESS:
      return {
        ...state,
        data: action.result,
        isLoading: false
      }
    case GET_ARTICLEBYID_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    default:
      return state
  }
}

export default handleArticle