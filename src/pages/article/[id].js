import Head from 'next/head'
import { useSelector, useDispatch} from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { getArticleById } from '../../redux/actions/article.actions';
import Navbar from '../../components/Navbar';
import SocialDetails from '../../components/SocialDetails';
import Author from '../../components/Author';
import Comment from '../../components/Comment';
import moment from 'moment';

const DetailsArticle = () => {
  const router = useRouter()
  let { id } = router.query
  const dispatch = useDispatch()
  const articleByID = useSelector((state) => state.handleArticle.dataById)
  console.log(articleByID)
  const loading = useSelector((state) => state.handleArticle.isLoading)

  useEffect(() => {
    dispatch(getArticleById(id))
  }, [dispatch, id])
  
  return (
    <div>
      <Head>
        <title>Details Article</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        {loading
          ?
          <div>
            <h1 className="text-center mt-20 text-3xl font-bold">
              Please wait...
            </h1>
          </div>
          :
            <div className="my-10 px-6 xl:px-10 2xl:px-16 w-full max-w-4xl mx-auto">
              <div className="flex flex-col">
                <h1 className="font-normal text-4xl">
                  {articleByID.title}
                </h1>
                <div className="flex flex-row mt-5">
                  <span className="mr-4 font-normal text-base text-blue">
                    {articleByID.category}
                  </span>
                  <p className="font-normal text-base text-grey">
                    {moment(articleByID.date).format('MMMM Do YYYY')}
                  </p>
                </div>
              </div>
              <img 
                src={articleByID.image}
                alt={articleByID.title}
                className="my-4"
              />
              <div className="">
                <p className="text-xl leading-8">
                  {articleByID.description}
                </p>
              </div>
              <SocialDetails />
              <Author />
              <Comment />
            </div>
        }
      </main>
    </div>
  );
}
 
export default DetailsArticle;