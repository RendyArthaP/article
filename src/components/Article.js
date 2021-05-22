import ListArticle from "./ListArticle"
import { useState } from 'react';

const Article = ({articles}) => {
  const [pageLoad, setPageLoad] = useState(8)
  const loadMore = () => {
    setPageLoad(pageLoad + 8)
  }

  return (
    <div className="my-8 lg:mt-24 w-full max-w-6xl mx-auto px-4 md:px-6 xl:px-10 2xl:px-16 flex flex-row flex-wrap justify-between"> 
      {articles.slice(0, pageLoad).map((article) => {
        return (
          <ListArticle 
            key={article._id} 
            article = {article}
            loadMore = {loadMore}
          />
        )
      })}
      {pageLoad > 8 
        ? 
          null
        :
        <button 
          className="bg-orange text-white shadow-orange mt-2 py-2 mx-auto focus:outline-none rounded w-32"
          onClick={loadMore}
        >
          Load More
        </button>
      }
    </div>
  )
}

export default Article
