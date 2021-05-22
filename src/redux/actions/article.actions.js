import axios from "axios";

export const GET_ARTICLE_REQUEST = 'GET_ARTICLE_REQUEST'
export const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS'
export const GET_ARTICLE_ERROR = 'GET_ARTICLE_ERROR'

export const GET_ARTICLEBYID_REQUEST = 'GET_ARTICLEBYID_REQUEST'
export const GET_ARTICLEBYID_SUCCESS = 'GET_ARTICLEBYID_SUCCESS'
export const GET_ARTICLEBYID_ERROR = 'GET_ARTICLEBYID_ERROR'

export const getArticleRequest = () => {
  return {
    type: GET_ARTICLE_REQUEST
  }
}

export const getArticleSuccess = (result) => {
  return {
    type: GET_ARTICLE_SUCCESS,
    result
  }
}

export const getArticleError = (error) => {
  return {
    type: GET_ARTICLE_ERROR,
    error
  }
}

export const getArticleByIdRequest = () => {
  return {
    type: GET_ARTICLEBYID_REQUEST
  }
}

export const getArticleByIdSuccess = (result) => {
  return {
    type: GET_ARTICLEBYID_SUCCESS,
    result
  }
}

export const getArticleByIdError = (error) => {
  return {
    type: GET_ARTICLEBYID_ERROR,
    error
  }
}

export const getArticle = () => {
  return function(dispatch) {
    dispatch(getArticleRequest())

    axios
      .get(process.env.REACT_APP_ARTICLE)
      .then((result) => dispatch(getArticleSuccess(result.data)))
      .error((error) => dispatch(getArticleError(error)))
  }
}

export const getArticleById = (id) => {
  return function(dispatch) {
    dispatch(getArticleByIdRequest())
    axios
      .get(`${process.env.REACT_APP_ARTICLE}/${id}`)
      .then((result) => dispatch(getArticleByIdSuccess(result.data)))
      .catch((error) => dispatch(getArticleByIdError(error)))
  }
}