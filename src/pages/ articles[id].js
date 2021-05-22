import { useSelector, useDispatch } from 'react-redux';
import { getArticleById } from '../redux/actions/article.actions';
import { useEffect } from 'react';

const DetailsArticle = () => {
  const dispatch = useDispatch();
  const articleByID = useSelector((state) => state)
  console.log(articleByID)
  useEffect(() => {
    dispatch(getArticleById())
  }, [dispatch])
  return (
    <div>

    </div>
  );
}
 
export default DetailsArticle