import Head from 'next/head'
import Article from '../components/Article'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import Footer from '../components/Footer';
import { useSelector, useDispatch} from 'react-redux';
import { useEffect, useState } from 'react'
import { getArticle } from '../redux/actions/article.actions';

export default function Home() {
  const dispatch = useDispatch()
  const [getToken, setGetToken] = useState()
  const articles = useSelector((state) => state.handleArticle.data)
  const loading = useSelector((state => state.handleArticle.isLoading))
  const searchArticle = useSelector((state) => state.handleArticle.categoryArticle)
  const isLogin = useSelector((state) => state.handleAuth.isLogged)
  console.log(isLogin)
  const [searchName, setSearchName] = useState("")
  
  useEffect(() => {
    let tokens = window.localStorage.getItem("token")
    setGetToken(tokens)
    dispatch(getArticle())
  }, [dispatch, searchArticle])

  return (
    <div>
      <Head>
        <title>Designate.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      
      <main className="">
        <Navbar isLogin={isLogin}/>
        <Searchbar 
          articles = {articles ? articles : []} 
          searchName = {searchName}
          setSearchName = {setSearchName}
        />
        {loading 
          ?
            <div>
              <h1 className="text-center mt-20 text-3xl font-bold h-screen">
                Please wait...
              </h1>
            </div>
          :
            <Article 
              articles = {articles ? articles : []} 
              searchName = {searchName}
              setSearchName = {setSearchName}
            />
        }
        <Footer />
      </main>
    </div>
  )
}
