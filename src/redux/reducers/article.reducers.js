import {
  GET_ARTICLE_REQUEST,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_ERROR,
  GET_ARTICLEBYID_REQUEST,
  GET_ARTICLEBYID_SUCCESS,
  GET_ARTICLEBYID_ERROR
} from '../actions/article.actions.js';

const initialState = {
  data: []
}

const handleArticle = (state = initialState, action) => {
  switch(action.type) {
    case GET_ARTICLE_REQUEST:
      return {
        ...state
      }
    case GET_ARTICLE_SUCCESS:
      return {
        ...state,
        data: action.result
      }
    case GET_ARTICLE_ERROR:
      return {
        ...state,
        error: action.error
      }
    case GET_ARTICLEBYID_REQUEST:
      return {
        ...state
      }
    case GET_ARTICLEBYID_SUCCESS:
      return {
        ...state,
        data: action.result
      }
    case GET_ARTICLEBYID_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default handleArticle