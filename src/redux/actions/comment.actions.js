import axios from 'axios';

export const GETCOMMENTBYARTICLE_REQUEST = "GETCOMMENTBYARTICLE_REQUEST";
export const GETCOMMENTBYARTICLE_SUCCESS = "GETCOMMENTBYARTICLE_SUCCESS";
export const GETCOMMENTBYARTICLE_ERROR = "GETCOMMENTBYARTICLE_ERROR";

export const POSTCOMMENTBYARTICLE_REQUEST = "POSTCOMMENTBYARTICLE_REQUEST";
export const POSTCOMMENTBYARTICLE_ERROR = "POSTCOMMENTBYARTICLE_ERROR";
export const POSTCOMMENTBYARTICLE_SUCCESS = "POSTCOMMENTBYARTICLE_SUCCESS";

export const getCommentRequest = () => {
  return {
    type: GETCOMMENTBYARTICLE_REQUEST
  }
}

export const getCommentSuccess = (result) => {
  return {
    type: GETCOMMENTBYARTICLE_SUCCESS,
    result
  }
}

export const getCommentError = (error) => {
  return {
    type: GETCOMMENTBYARTICLE_ERROR,
    error
  }
}

export const postCommentRequest = () => {
  return {
    type: POSTCOMMENTBYARTICLE_REQUEST
  }
}

export const postCommentSuccess = (result) => {
  return {
    type: POSTCOMMENTBYARTICLE_SUCCESS,
    result
  }
}

export const postCommentError = (error) => {
  return {
    type: POSTCOMMENTBYARTICLE_ERROR,
    error
  }
}

export const postComment = (data) => {
  return function(dispatch) {
    dispatch(postCommentRequest())

    axios
      .post(process.env.POST_COMMENT, data)
      .then((result) => dispatch(postCommentSuccess(result.data)))
      .catch((error) => dispatch(postCommentError(error)))
  }
}

export const getComment = (article_id) => {
  return function(dispatch) {
    dispatch(getCommentRequest())

    axios
      .get(`${process.env.GET_COMMENT}/${article_id}`)
      .then((result) => dispatch(getCommentSuccess(result.data)))
      .catch((error) => dispatch(getCommentError(error)))
  }
}