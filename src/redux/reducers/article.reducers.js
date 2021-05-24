import {
  GET_ARTICLE_REQUEST,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_ERROR,
  GET_ARTICLEBYID_REQUEST,
  GET_ARTICLEBYID_SUCCESS,
  GET_ARTICLEBYID_ERROR,
  SET_CATEGORY
} from '../actions/article.actions.js';

const initialState = {
  data: [],
  dataById: {},
  categoryArticle: "",
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
      let data = action.result.data
      return {
        ...state,
        data,
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
        dataById: {...action.result.data},
        isLoading: false
      }
    case GET_ARTICLEBYID_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    case SET_CATEGORY:  
      return {
        ...state,
        categoryArticle: action.category
      }
    default:
      return state
  }
}

export default handleArticle