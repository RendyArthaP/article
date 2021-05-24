import { combineReducers } from 'redux'
import handleArticle from './article.reducers';
import handleAuth from './auth.reducers';
import handleComment from './comment.reducers';

const rootReducers = combineReducers({
  handleArticle,
  handleAuth,
  handleComment,
})

export default rootReducers