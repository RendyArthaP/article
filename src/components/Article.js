import ListArticle from "./ListArticle"
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Article = ({articles, searchName, setSearchName, searchNameArticle}) => {
  const [articleFiltered, setArticleFiltered] = useState([...articles])
  const searchArticle = useSelector((state) => state.handleArticle.categoryArticle)
  const [pageLoad, setPageLoad] = useState(8)

  const loadMore = () => {
    setPageLoad(pageLoad + 8)
  }

  useEffect(() => {
    if(searchArticle) {
      let data = articles.filter((item) => item.category == searchArticle)
      setArticleFiltered(data)
    }
  }, [searchArticle])

  return (
    <>
      <div className="mt-8 lg:mt-24 w-full max-w-6xl mx-auto px-4 md:px-20 lg:px-8 2xl:px-16 flex flex-row flex-wrap justify-between"> 
        {articleFiltered.filter((article) => {
          if(searchName === "") {
            return article
          } else if(article.title.toLowerCase().includes(searchName.toLowerCase())) {
            return article
          } return null
        }).slice(0, pageLoad).map((article) => (
          <ListArticle 
            key={article._id} 
            article = {article}
            loadMore = {loadMore}
          />
        ))}
      </div>
      
      {pageLoad > 8 
        ? 
          null
        :
        <button 
          className="bg-orange text-white shadow-orange my-24 py-2 mx-auto flex justify-center focus:outline-none rounded w-32"
          onClick={loadMore}
        >
          Load More
        </button>
      }
    </>
  )
}

export default Article
