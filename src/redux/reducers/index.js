import { combineReducers } from 'redux'
import handleArticle from './article.reducers';
import handleAuth from './auth.reducers';
import handleComment from './comment.reducers';
import handleUser from './user.reducers';

const rootReducers = combineReducers({
  handleArticle,
  handleAuth,
  handleComment,
  handleUser
})

export default rootReducers